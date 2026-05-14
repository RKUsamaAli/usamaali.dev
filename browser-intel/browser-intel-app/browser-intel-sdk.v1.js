/**
 * BrowserIntel SDK
 * Sophisticated Extraction Engine for Browser Fingerprinting
 */

const STABILITY_THRESHOLDS = {
    // LEVEL 0: IMMUTABLE HARDWARE (The Foundation - Should never change)
    "hardware.platform": 0,
    "hardware.hardwareConcurrency": 0,
    "hardware.maxTouchPoints": 0,
    "hardware.screen": 5,

    // LEVEL 15: REGIONAL & ENGINE CONSTANTS (Very Stable)
    "runtime.mathSin": 15,
    "runtime.mathCos": 15,
    "privacy.timezone": 18,
    "privacy.intlNumber": 20,
    "hardware.pixelRatio": 22,
    "privacy.languages": 22,
    "hardware.colorDepth": 23,
    "privacy.intlDateTime": 25,

    // LEVEL 30: GRAPHICS & GPU (Device Specific)
    "hardware.glVendor": 30,
    "hardware.glRenderer": 32,
    "hardware.gpuInfo": 35,
    "graphics.audioHash": 38,
    "fonts.detected": 40,
    "graphics.canvasHash": 45,

    // LEVEL 50: SEMI-STABLE CONFIG
    "privacy.pdfViewer": 50,
    "fonts.systemColor": 55,
    "graphics.svgBBox": 60,

    // LEVEL 70: NETWORK & CONNECTIVITY (Volatile)
    "network.ip": 70,
    "privacy.sdpHash": 75,

    // LEVEL 85+: BOT DETECTION & RUNTIME 
    "runtime.webdriver": 85,
    "privacy.headless": 88,
    "runtime.protoProxy": 90,
    "privacy.evalLength": 92,
    "runtime.engine": 94,
    "runtime.stackFormat": 95,

    // LEVEL 96+: EPHEMERAL (UI/UX based - Changes with interaction)
    "hardware.uaData": 96,
    "hardware.deviceMemory": 97,
    "hardware.viewport": 98,
    "hardware.orientation": 99,
    "hardware.resistance": 100
};

class FingerprintScanner {
    async hash(text) {
        const msgUint8 = new TextEncoder().encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16);
    }

    async getHardware() {
        const data = {
            deviceMemory: navigator.deviceMemory || 'Unsupported',
            hardwareConcurrency: navigator.hardwareConcurrency || 'N/A',
            maxTouchPoints: navigator.maxTouchPoints || 0,
            platform: navigator.platform || 'N/A',
            uaData: 'N/A',
            screen: `${screen.width}x${screen.height}`,
            colorDepth: screen.colorDepth || 'N/A',
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            resistance: (window.outerWidth - window.innerWidth > 20) ? 'Probable (Letterboxing)' : 'None',
            pixelRatio: window.devicePixelRatio || 1,
            orientation: screen.orientation ? screen.orientation.type : 'N/A'
        };

        if (navigator.userAgentData) {
            try {
                const highEntropy = await navigator.userAgentData.getHighEntropyValues(['architecture', 'model', 'platformVersion']);
                data.uaData = `${highEntropy.platform} (${highEntropy.architecture})`;
            } catch (e) {
                data.uaData = 'Access Denied';
            }
        } else {
            const ua = navigator.userAgent;
            let platform = "Unknown OS";
            if (ua.includes("Macintosh") || ua.includes("Mac OS X")) platform = "macOS";
            else if (ua.includes("Windows")) platform = "Windows";
            else if (ua.includes("Linux")) platform = "Linux";
            else if (ua.includes("Android")) platform = "Android";
            else if (ua.includes("iPhone") || ua.includes("iPad")) platform = "iOS";

            let arch = "Unknown Arch";
            if (ua.includes("Win64") || ua.includes("x64") || ua.includes("x86_64")) arch = "x64";
            else if (ua.includes("arm64") || ua.includes("arm") || (platform === "macOS" && navigator.maxTouchPoints === 0)) arch = "arm/x64";

            data.uaData = `${platform} (${arch})`;
        }

        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            data.glVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            data.glRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        } catch (e) { data.glVendor = 'Blocked'; }

        try {
            if (navigator.gpu) {
                const adapter = await navigator.gpu.requestAdapter();
                data.gpuInfo = adapter.architecture || 'WebGPU Enabled (Generic)';
            } else { data.gpuInfo = 'Not Supported'; }
        } catch (e) { data.gpuInfo = 'Error/Permission'; }

        return data;
    }

    async getGraphics() {
        const results = {};

        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 200; canvas.height = 50;
            ctx.textBaseline = "top";
            ctx.font = "14px 'Arial'";
            ctx.textBaseline = "alphabetic";
            ctx.fillStyle = "#f60";
            ctx.fillRect(125, 1, 62, 20);
            ctx.fillStyle = "#069";
            ctx.fillText("Fingerprint 1.0 😃", 2, 15);
            ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
            ctx.fillText("Fingerprint 1.0 😃", 4, 17);
            results.canvasHash = await this.hash(canvas.toDataURL());
        } catch (e) { results.canvasHash = 'Blocked'; }

        try {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", "100"); svg.setAttribute("height", "30");
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.textContent = "abcdefghijklmnopqrstuvwxyz";
            svg.appendChild(text);
            document.body.appendChild(svg);
            const bbox = text.getBBox();
            results.svgBBox = `${bbox.width.toFixed(2)}x${bbox.height.toFixed(2)}`;
            document.body.removeChild(svg);
        } catch (e) { results.svgBBox = 'Error'; }

        try {
            const context = new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100);
            const oscillator = context.createOscillator();
            oscillator.type = 'triangle';
            oscillator.frequency.setValueAtTime(10000, context.currentTime);
            const compressor = context.createDynamicsCompressor();
            compressor.threshold.setValueAtTime(-50, context.currentTime);
            compressor.knee.setValueAtTime(40, context.currentTime);
            compressor.ratio.setValueAtTime(12, context.currentTime);
            oscillator.connect(compressor);
            compressor.connect(context.destination);
            oscillator.start(0);
            const buffer = await context.startRendering();
            const audioData = buffer.getChannelData(0).slice(4400, 4500);
            results.audioHash = await this.hash(audioData.join(''));
        } catch (e) { results.audioHash = 'Blocked/Muted'; }

        return results;
    }

    getJSEngine() {
        const results = {};

        results.mathSin = Math.sin(1e10).toString();
        results.mathCos = Math.cos(1e10).toString();

        try {
            null.f();
        } catch (e) {
            const stack = e.stack || '';
            if (stack.includes('at ')) results.engine = 'V8 (Chrome/Edge)';
            else if (stack.includes('@')) results.engine = 'JavaScriptCore (Safari)';
            else results.engine = 'SpiderMonkey (Firefox)';
            results.stackFormat = stack.split('\n')[0];
        }

        results.webdriver = navigator.webdriver ? 'Detected' : 'Not Present';
        results.protoProxy = (window.Proxy.toString().length > 40) ? 'Modified' : 'Clean';

        return results;
    }

    async getPrivacy() {
        const results = {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            languages: navigator.languages.join(','),
            evalLength: eval.toString().length,
            headless: (navigator.webdriver || !navigator.languages.length) ? 'Yes' : 'No'
        };

        try {
            const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
            pc.createDataChannel("");
            const offer = await pc.createOffer();
            results.sdpHash = await this.hash(offer.sdp);
            pc.close();
        } catch (e) { results.sdpHash = 'Blocked'; }

        try {
            results.intlNumber = (new Intl.NumberFormat()).format(123456.78);
            results.intlDateTime = (new Intl.DateTimeFormat()).format(new Date());
        } catch (e) { results.intlNumber = 'Blocked'; }
        results.pdfViewer = navigator.pdfViewerEnabled ? 'Enabled' : 'Disabled';

        return results;
    }

    getFonts() {
        const fontList = ["Calibri", "Roboto", "Helvetica Neue", "Ubuntu", "Consolas"];
        const detected = [];
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const text = "abcdef0123456789";
        context.font = "72px monospace";
        const baselineWidth = context.measureText(text).width;

        fontList.forEach(font => {
            context.font = `72px "${font}", monospace`;
            if (context.measureText(text).width !== baselineWidth) {
                detected.push(font);
            }
        });

        return {
            detected: detected.join(', ') || 'None Detected',
            systemColor: getComputedStyle(document.body).color
        };
    }

    async getNetwork() {
        const results = { ip: 'Fetching...' };
        try {
            const response = await fetch('https://api64.ipify.org?format=json');
            const data = await response.json();
            results.ip = data.ip;
        } catch (e) {
            results.ip = 'Blocked/Error';
        }
        return results;
    }
}

/**
 * Calculates a similarity score (0-100) between two device fingerprints.
 */
function calculateSimilarity(p1, p2) {
    if (!p1 || !p2) return 0;

    const weights = {
        ip: 30,
        hardware: 20,
        runtimeMath: 20,
        runtimeEnvironment: 15,
        gpu: 15
    };

    let score = 0;
    let totalPossible = 0;

    totalPossible += weights.ip;
    if (p1.network?.ip && p1.network?.ip === p2.network?.ip) {
        score += weights.ip;
    }

    totalPossible += weights.hardware;
    const h1 = p1.hardware || {};
    const h2 = p2.hardware || {};
    if (h1.hardwareConcurrency === h2.hardwareConcurrency && h1.screen === h2.screen) {
        score += weights.hardware;
    }

    totalPossible += weights.runtimeMath;
    const r1 = p1.runtime || {};
    const r2 = p2.runtime || {};
    if (r1.mathSin === r2.mathSin && r1.mathCos === r2.mathCos) {
        score += weights.runtimeMath;
    } else {
        return 0;
    }

    totalPossible += weights.runtimeEnvironment;
    if (r1.webdriver === r2.webdriver && r1.protoProxy === r2.protoProxy) {
        score += weights.runtimeEnvironment;
    }

    totalPossible += weights.gpu;
    if (p1.network?.gpuInfo === p2.network?.gpuInfo) {
        score += weights.gpu;
    }

    return Math.round((score / totalPossible) * 100);
}

class BrowserIntelSDK {
    constructor() {
        this.scanner = new FingerprintScanner();
        this.profile = null;
    }

    /**
     * Initializes the profile data by scanning the browser.
     */
    async init() {
        const hardware = await this.scanner.getHardware();
        const graphics = await this.scanner.getGraphics();
        const runtime = this.scanner.getJSEngine();
        const privacy = await this.scanner.getPrivacy();
        const fonts = this.scanner.getFonts();
        const network = await this.scanner.getNetwork();

        this.profile = { hardware, network, graphics, runtime, privacy, fonts };
        return this.profile;
    }

    /**
     * Generates a fingerprint hash and returns the matched payload based on the threshold.
     * @param {number} threshold A value from 0 to 10 (or 0 to 100). Will map 0-10 to 0-100 automatically.
     * @returns {Promise<{hash: string, payload: Object, fullProfile: Object}>}
     */
    async getFingerprint(threshold = 10) {
        console.log(threshold);

        if (!this.profile) {
            await this.init();
        }

        // Map 0-10 to 0-100 for internal stability thresholds checking
        let actualThreshold = threshold;
        // if (threshold <= 10) {
        //     actualThreshold = threshold * 10;
        // }

        const filteredPayload = {};
        for (const [path, minThreshold] of Object.entries(STABILITY_THRESHOLDS)) {
            const [category, key] = path.split('.');
            const isActive = actualThreshold >= minThreshold;

            if (isActive) {
                if (!filteredPayload[category]) filteredPayload[category] = {};
                filteredPayload[category][key] = this.profile[category][key];
            }
        }

        const rawString = JSON.stringify(filteredPayload);
        const hash = await this.scanner.hash(rawString);

        return {
            hash,
            payload: filteredPayload,
            fullProfile: this.profile
        };
    }

    /**
     * Compare two profiles and get a similarity score
     */
    getSimilarity(p1, p2) {
        return calculateSimilarity(p1, p2);
    }
}

// Expose internal stability thresholds for UI usage
BrowserIntelSDK.STABILITY_THRESHOLDS = STABILITY_THRESHOLDS;

// Export the SDK for different environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BrowserIntelSDK;
} else {
    window.BrowserIntelSDK = BrowserIntelSDK;
}
