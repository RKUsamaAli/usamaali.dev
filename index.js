const experienceYear = 6;
const info = {
    name: 'Usama Ali',
    title: 'Software Engineer, .NET &amp; Angular Full Stack Software Engineer, Website Developer, Microservices, Azure, Docker',
    subtitle: 'Continuously seeking opportunities to expand my knowledge and stay up-to-date',
    experienceYear: experienceYear,
    emailLink: 'mailto:ua@usamaali.dev',
    email: 'ua@usamaali.dev',
    phoneLink: 'tel:+923084366435',
    phone: '+92 308 436 6435',
    location: 'Pakistan',
    linkedIn: 'https://www.linkedin.com/in/usama-ali-dev',
    whatsapp: 'https://api.whatsapp.com/send?phone=923084366435',
    about: `
        <p class="mb-4 text-center">
            <strong>Experienced Full Stack Software Engineer</strong> with
            <strong>${experienceYear}+ years of hands-on experience</strong> in designing and developing
            <strong>scalable, high-performance web applications</strong>. Specialized in building
            robust backend systems using <strong>.NET Core</strong>, <strong>Node.js</strong>, and
            <strong>microservices architecture</strong>, with deep expertise in
            <strong>event-driven systems</strong> leveraging <strong>RabbitMQ</strong> and
            <strong>Kafka</strong>.
          </p>

          <p class="mb-4 text-center">
            Proven track record of delivering <strong>secure, cloud-native applications</strong>
            using <strong>Microsoft Azure</strong>, <strong>Docker</strong>, and
            <strong>CI/CD pipelines</strong>, ensuring <strong>high availability</strong>,
            <strong>performance</strong>, and <strong>cost efficiency</strong>. Strong experience
            in developing <strong>RESTful APIs</strong>, implementing
            <strong>synchronous and asynchronous communication</strong>, and optimizing
            <strong>SQL and NoSQL databases</strong> including <strong>SQL Server</strong>,
            <strong>PostgreSQL</strong>, and <strong>MongoDB</strong>.
          </p>

          <p class="mb-4 text-center">
            Equally proficient on the frontend, with hands-on experience in
            <strong>Angular</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and
            modern state management solutions. Passionate about writing
            <strong>clean, testable, and maintainable code</strong> by applying
            <strong>Clean Architecture</strong>, <strong>Domain-Driven Design (DDD)</strong>,
            <strong>CQRS</strong>, and <strong>Test-Driven Development (TDD)</strong>.
          </p>

          <p class="mb-4 text-center">
            <strong>Microsoft Certified: Azure Developer Associate</strong>, with growing experience
            in <strong>Conversational AI</strong>, <strong>LLMs</strong>, and
            <strong>AI-powered solutions</strong>. Recognized for strong
            <strong>leadership</strong>, <strong>mentoring</strong>, and
            <strong>cross-functional collaboration</strong>, consistently delivering solutions
            that align with <strong>business goals</strong> and <strong>user needs</strong>.
          </p>
        </div>

        <h3 class="text-center mb-4 mt-5">Full Stack Software Engineer</h3>
        <div class="row">
          <div class="col-lg-6">
            <ul>
              <li>
                <p><strong>.NET Core
                    Development</strong> Building secure, high-performance backend services.</p>
              </li>
              <li>
                <p><strong>Angular/React
                    Development</strong> Building responsive, modern frontend applications.</p>
              </li>
              <li>
                <p><strong>Microservices
                    Architecture</strong> Designing scalable, loosely coupled services for complex systems.</p>
              </li>
              <li>
                <p><strong>Web API Development</strong>
                  Creating RESTful APIs for reliable system communication.</p>
              </li>
              <li>
                <p><strong>Event-Driven
                    Architecture</strong> Implementing asynchronous messaging with RabbitMQ and Kafka.</p>
              </li>
              <li>
                <p><strong>SQL Server</strong>
                  Designing, optimizing, and maintaining high-performance relational databases.</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul>
              <li>
                <p><strong>Asynchronous
                    Programming</strong> Developing non-blocking, scalable backend services.</p>
              </li>
              <li>
                <p><strong>Clean Architecture &amp;
                    DDD</strong> Applying structured design principles for maintainable codebases.</p>
              </li>
              <li>
                <p><strong>CQRS Pattern</strong>
                  Separating read/write operations to improve scalability and performance.</p>
              </li>
              <li>
                <p><strong>Test-Driven Development
                    (TDD)</strong> Ensuring reliability through automated testing.</p>
              </li>
              <li>
                <p><strong>Docker &amp;
                    Containerization</strong> Packaging applications for consistent deployment.</p>
              </li>
              <li>
                <p><strong>Azure Cloud
                    Development</strong> Deploying and managing cloud-native applications on Azure.</p>
              </li>
            </ul>
          </div>
        </div>

    `,
    portfolio: [
        {
            images: [
                '../assets/img/projects/project-1.png',
                '../assets/img/projects/project-1-1.png',
                '../assets/img/projects/project-1-2.png',
                '../assets/img/projects/project-1-3.png',
                '../assets/img/projects/pp.png',
            ],
            title: 'Team Suite (Human Capital Management Solution)',
            type: 'Software',
            descriptionHTML: `<div class="portfolio-description text-justify">
                            Team Suite, is a new-age Human Capital Management Solution combining the strengths of Cloud
                            and Mobility. Team Suite is a fully scalable HR Solution and aims to change the working
                            dynamics of the HR department. <br>

                            The ESS system simplifies employee management with web-based and mobile functionality,
                            including time off and loan requests, HR data management, and performance management. The
                            system also streamlines payroll management, including employee compensation, taxes,
                            deductions, benefits tracking, and compliance.<br>
                            <strong>Features</strong>
                            <ul>
                                <li>ESS (Employee Self Service) web-based and mobile simplicity with powerful and
                                    practical features that drive productivity and user satisfaction.</li>
                                <li>Managing employee time off involves overseeing the process of employees requesting
                                    vacation days, sick days, and other types of leave, as well as allowing managers to
                                    approve or deny these requests and tracking the amount of leave taken by each
                                    employee.</li>
                                <li>Employees requesting loans and leases, as well as allowing managers to approve or
                                    deny these requests and tracking the amount of loan or lease taken by each employee.
                                </li>
                                <li>HR collecting, storing, maintaining, and using employee personal data in an
                                    organized and secure manner.</li>
                                <li>Setting performance goals, providing training and development opportunities,
                                    conducting performance evaluations, and implementing performance management systems.
                                </li>
                                <li>Payroll is calculating, distributing and managing employee compensation, taxes, and
                                    deductions, including processing paychecks and maintaining accurate records of
                                    employee compensation and hours worked. It also includes tracking employee benefits
                                    and complying with legal requirements.</li>

                            </ul>
                        </div>`,
            technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'RabbitMQ', 'Azure'],
            client: 'Fast Services'
        },
        {
            images: [
                "../assets/img/projects/project-2.png",
                "../assets/img/projects/project-2-4.png",
                "../assets/img/projects/project-2-5.png",
                "../assets/img/projects/project-2-1.png",
                "../assets/img/projects/project-2-2.png",
                "../assets/img/projects/project-2-3.png",
                "../assets/img/projects/pp.png",
            ],
            title: 'CORN POS',
            type: 'Software',
            descriptionHTML: `<div class="portfolio-description text-justify">
                            CORN POS is a comprehensive point of sale system in Pakistan, it's Simple, Quick & Scalable.
                            CORN easy-to-use POS software, covers, all the point-of-sale features you need to grow your
                            business. Set your business up for success with cloud-based point-of-sale software.<br>
                            The duties of a business include tracking and managing inventory, handling the sales
                            process, managing finances, protecting information and assets, and generating reports. These
                            involve monitoring stock levels, managing customer orders and payments, accounting,
                            budgeting, and complying with security regulations. Reports provide insight into operations
                            such as sales, inventory, finance, and security. <br>
                            <strong>Features</strong>
                            <ul>
                                <li>Track and manage the inventory of products and materials, including stock levels,
                                    reorder points, and product information.</li>
                                <li>Manage the process of selling products including invoices, tracking customer orders
                                    and payments, and managing sales commissions.</li>
                                <li>Manage the financial aspects of the organization, including accounting, budgeting,
                                    forecasting, and financial reporting.</li>
                                <li>Protect the organization's information and assets, including access control,
                                    incident management, and compliance with security regulations.</li>
                                <li>Generate various reports that provide insight into the organization's operations,
                                    including sales, inventory, financial, and security reports.</li>

                            </ul>
                        </div>`,
            technologies: ['React', '.NET Core', 'MSSQL', 'PWA', 'Azure'],
            client: 'Fast Services'
        },
        {
            images: [
                "../assets/img/projects/project-6.png",
                "../assets/img/projects/project-6-1.png",
                "../assets/img/projects/project-6-2.png",
                "../assets/img/projects/project-6-3.png",
                "../assets/img/projects/pp.png",
            ],
            title: 'Vogue (Tailor Shop)',
            type: 'Software',
            descriptionHTML: `<div class="portfolio-description text-justify">
                            The garment ordering application allows customers to select multiple articles in different
                            sizes and styles, with QR codes for inventory tracking. The application can move orders from
                            one location to another, while its API-based functionality enables sharing of data between
                            different systems. The application also offers multi-role and multi-user functionality for
                            secure access. <br>
                            <strong>Features</strong>
                            <ul>
                                <li>This application is designed to take orders for garments of multiple sizes and
                                    styles. It allows customers to select multiple articles, in different sizes and
                                    styles, and add them to their order.</li>
                                <li>This application has the capability to generate QR codes for each article, allowing
                                    users to scan them. This also is used for inventory management or for tracking the
                                    movement of the garments in the warehouse or in the store.</li>
                                <li>This application has the ability to move orders from one location, such as a
                                    warehouse or retail store, to another location, such as a different warehouse or
                                    retail store.</li>
                                <li>This application API (Application Programming Interface) base functionality defines
                                    how the system can be accessed and used, providing a consistent way for other
                                    systems to interact with it. This enables the sharing of data and functionality
                                    between different systems.</li>
                                <li>Multi-role-based and multi-user functionality in an application allows for multiple
                                    roles and users support. This enables different users to access the system with
                                    varying permissions and capabilities, according to their assigned roles.</li>

                            </ul>
                        </div>`,
            technologies: ['React', 'Node.js', 'MSSQL'],
            client: 'Fast Services'
        },
        {
            images: [
                "../assets/img/projects/project-5.png",
                "../assets/img/projects/project-5-1.png",
                "../assets/img/projects/project-5-2.png",
                "../assets/img/projects/pp.png",
            ],
            title: 'HIMS (Health Care)',
            type: 'Software',
            descriptionHTML: `<div class="portfolio-description text-justify">
                            A patient registration system is used to maintain demographic information of patients. The
                            emergency/triage module is used to manage emergency patients. The outpatient department
                            manages scheduling and treatment of non-hospitalized patients. The system also manages
                            billing, inventory, sale/purchase/POS transactions, and security with a dashboard for
                            performance indicators.<br>
                            <strong>Features</strong>
                            <ul>
                                <li>Patient Registration System is used to register new patients and maintain their
                                    demographic information.</li>
                                <li>Emergency/Triage Module is used to manage the triage and treatment of emergency
                                    patients.</li>
                                <li>Outpatient Department is used to manage the scheduling and treatment of patients who
                                    are not hospitalized.</li>
                                <li>Billing is used to manage the billing and financial aspects of patient care.</li>
                                <li>Inventory is used to manage the inventory of medical supplies and equipment.</li>
                                <li>Sale, Purchase & POS Module is used to manage the Sale, Purchase and point of Sale
                                    Transactions.</li>
                                <li>Dashboard is used to provide an overview of the system and key performance
                                    indicators.</li>
                                <li>Security refers to the measures put in place to protect the system and the data it
                                    contains from unauthorized access or breaches.</li>

                            </ul>
                        </div>`,
            technologies: ['Angular', '.Net Core', 'Oracle', 'Kafka'],
            client: 'Densible'
        },
        {
            images: [
                "../assets/img/projects/project-3.png",
                "../assets/img/projects/project-3-1.png",
                "../assets/img/projects/project-3-2.png",
                "../assets/img/projects/pp.png",
            ],
            title: 'Covid Vaccine Registration',
            type: 'Software',
            descriptionHTML: `<div class="portfolio-description text-justify">
                            The system allows for user registration for Covid-19 vaccination and scheduling of
                            vaccination appointments. It also has API-based functionality to communicate with three
                            different hospital software systems and share analytical statistics.<br>
                            <strong>Features</strong>
                            <ul>
                                <li>This system includes functionality for user registration for Covid-19 vaccination,
                                    allowing individuals to sign up for and schedule their vaccination appointments.
                                </li>
                                <li>API (Application Programming Interface) based functionality allows for interaction
                                    with three different hospital software systems. It facilitates communication between
                                    them and the sharing of organizational analytical statistics.</li>

                            </ul>
                        </div>`,
            technologies: ['React', 'Node.js', 'MSSQL'],
            client: 'Densible'
        },
        {
            images: [
                "../assets/img/projects/project-4-3.png",
                "../assets/img/projects/project-4.png",
                "../assets/img/projects/project-4-1.png",
                "../assets/img/projects/project-3-2.png",
                "../assets/img/projects/project-4-2.png",
                "../assets/img/projects/pp.png",
            ],
            title: 'Dashboard & Analytical Reports',
            type: 'Software',
            descriptionHTML: `<div class="portfolio-description text-justify">
                            The system integrates with three hospital databases and supports multiple databases within
                            one application. It uses a separate database for secure access and allows for communication
                            between hospital software systems. It also has multi-role and multi-user functionality for
                            varying access permissions. <br>
                            <strong>Features</strong>
                            <ul>
                                <li>This system is integrated with the Oracle databases of three different hospitals,
                                    enabling the use of dashboard data for analysis and reporting.</li>
                                <li>This system is configured to support multiple databases within a single application,
                                    allowing for seamless integration and access to multiple data sources.</li>
                                <li>This system uses a second database for application authorization, ensuring secure
                                    access to the application and its functionality.</li>
                                <li>API (Application Programming Interface) based functionality allows for interaction
                                    with three different hospital software systems. It facilitates communication between
                                    them and the sharing of organisational analytical statistics.</li>
                                <li>Multi-role-based and multi-user functionality in an application allows for multiple
                                    roles and users support. This enables different users to access the system with
                                    varying permissions and capabilities, according to their assigned roles.</li>
                            </ul>
                        </div>`,
            technologies: ['React Js', 'Node Js', 'MySQL'],
            client: 'Densible'
        },
        {
            images: ['../assets/img/projects/Noble-Forwarding.png'],
            title: 'Noble Forwarding',
            type: 'Website',
            descriptionHTML: `A professional corporate website for Noble Forwarding, showcasing their logistics and freight forwarding services with a modern, responsive design.`,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind'],
            client: 'Noble Forwarding'
        },
        {
            images: ['../assets/img/projects/Platinum-Electrical.png'],
            title: 'Platinum Electrical',
            type: 'Website',
            descriptionHTML: `A professional corporate website for Platinum Electrical, showcasing their electrical services with a modern, responsive design.`,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            client: 'Platinum Electrical'
        },
        {
            images: ['../assets/img/projects/Bahria-International-Hospital.png'],
            title: 'Bahria Hospital',
            type: 'Website',
            descriptionHTML: `A professional corporate website for Bahria International Hospital, showcasing their medical services with a modern, responsive design.`,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            client: 'Bahria International Hospital'
        },
        {
            images: ['../assets/img/projects/Primo-Door-Closer.png'],
            title: 'Primo Door Closer',
            type: 'Website',
            descriptionHTML: `A professional corporate website for Primo Door Closer, showcasing their products with a modern, responsive design.`,
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            client: 'Primo'
        },
        {
            images: ['../assets/img/projects/Harisco.png'],
            title: 'Harisco',
            type: 'Website',
            descriptionHTML: `A modern website for Harisco, focusing on their product range and corporate identity with a clean and professional layout.`,
            technologies: ['HTML5', 'SCSS', 'JavaScript'],
            client: 'Harisco'
        },
        {
            images: ['../assets/img/projects/Learning-One-to-One.png'],
            title: 'Learning One to One',
            type: 'Website',
            descriptionHTML: `An educational platform designed for one-to-one learning experiences, featuring course listings and student resources.`,
            technologies: ['React', 'Node Js', 'MySQL'],
            client: 'Learning O2O'
        },
    ],
    testimonials: [
        {
            image: 'assets/img/testimonials/umer-aziz-dp.jpg',
            name: 'Umer Aziz',
            title: 'Co-Founder Xameer Technologies',
            message: "He's able to quickly identify issues and provide effective solutions. His coding skills are impressive, can write clean and efficient code with a strong understanding of algorithms.",
        },
        {
            image: 'assets/img/testimonials/mujassir-nasir.png',
            name: 'Mujassir Nasir',
            title: 'Full Stack Software Engineer | Software Architect at Netsol',
            message: "He profoundly understands software development principles and is always up-to-date with the latest technologies. They are a great team player and have excellent communication skills.",
        },
        {
            image: 'assets/img/testimonials/majeed-ahmad.png',
            name: 'Majeed Ahmad',
            title: 'IT&MIS Project Manager and Operations Lead at Bahria Town Pvt Ltd',
            message: "He has an excellent ability to analyze problems and develop effective solutions that address them. Their attention to detail and thoroughness in testing and debugging have ensured that we have a stable and reliable software system.",
        },
        {
            image: 'assets/img/testimonials/rana-farooq-aslam.png',
            name: 'Rana Farooq Aslam',
            title: 'CEO at Fast Services',
            message: "He is a skilled full stack software engineer with impressive technical abilities and a remarkable problem-solving capacity. He demonstrated exceptional attention to detail and effective communication skills, offering valuable insights and suggestions that enhanced the project's functionality and aesthetics, always meeting deadlines and budgets.",
        },
    ],
    skills: [
        {
            "category": "Frontend",
            "items": [
                { "name": "Angular", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
                { "name": "React", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { "name": "React Native", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg" },
                { "name": "Next.js", "expertise": "Intermediate", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
                { "name": "Redux", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
                { "name": "NgRx", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ngrx/ngrx-original.svg" },
                { "name": "Material UI", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
                { "name": "Bootstrap", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
                { "name": "Tailwind", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            ]
        },
        {
            "category": "Backend",
            "items": [
                { "name": "Node.js", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
                { "name": "Express.js", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
                { "name": ".NET Framework", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },

                { "name": "EF .Net", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg" },
                { "name": "Mongoose", "expertise": "Intermediate", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" },
                { "name": "Prisma", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
                { "name": "RabbitMQ", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
                { "name": "Kafka", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
                { "name": "Redit", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
            ]
        },
        {
            "category": "Tools, Testing & Validation",
            "items": [
                { "name": "Unit Testing", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" },
                { "name": "Fluent Validation", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
                { "name": "Postman", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
                { "name": "Swagger", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" },
                { "name": "SonarQube", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sonarqube/sonarqube-original.svg" },
                { "name": "Splunk", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" },
                { "name": "DataDog", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/datadog/datadog-original.svg" },
                { "name": "New Relic", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/newrelic/newrelic-original.svg" },
                { "name": "Grafana k6", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" }
            ]
        },
        {
            "category": "Database",
            "items": [
                { "name": "SQL", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
                { "name": "MSSQL", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
                { "name": "MySQL", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                { "name": "PostgreSQL", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
                { "name": "SQLite", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },

                { "name": "MongoDB", "expertise": "Intermediate", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
                { "name": "DynamoDB", "expertise": "Intermediate", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" },
                { "name": "Firebase", "expertise": "Intermediate", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
                { "name": "IndexedDB", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg" }
            ]
        },
        {
            "category": "Cloud / DevOps / Deployments",
            "items": [
                { "name": "Docker", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { "name": "Kubernetes", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
                { "name": "Netlify", "expertise": "Beginner", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
                { "name": "Vercel", "expertise": "Beginner", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
                { "name": "Nginx", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
                { "name": "IIS", "expertise": "Expert", "badge_url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNi4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4wIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0MzIgMzMyLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMiAzMzIuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6I0YyNTAyMjt9DQoJLnN0MXtmaWxsOiM3RkJBMDA7fQ0KCS5zdDJ7ZmlsbDojMDBBNEVGO30NCgkuc3Qze2ZpbGw6I0ZGQjkwMDt9DQo8L3N0eWxlPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMDkuMiwxMDMuMVYyMjloMTYuMlYxMDMuMUgyMDkuMkwyMDkuMiwxMDMuMXogTTI1NCwxMDMuMVYyMjloMTYuMlYxMDMuMUgyNTRMMjU0LDEwMy4xeiBNMjkyLDIyMi45DQoJCQljNi43LDQuNCwxOS45LDguMSwzMi4zLDguMWMyOS42LDAsNDQuMS0xNi44LDQ0LjEtMzYuNGMwLTE4LjUtMTAuOC0yOS0zMi4zLTM3Yy0xNy41LTYuNy0yNC45LTEyLjUtMjQuOS0yNC4yDQoJCQljMC04LjgsNi40LTE4LjksMjMuOS0xOC45YzExLjQsMCwxOS45LDMuNywyMy45LDYuMWw0LjQtMTMuMWMtNS43LTMtMTQuOC02LjEtMjcuOS02LjFjLTI0LjYsMC00MC43LDE0LjUtNDAuNywzNC4zDQoJCQljMCwxNy44LDEyLjgsMjguMywzMy4zLDM1LjdjMTcuMiw2LjQsMjMuOSwxMy4xLDIzLjksMjQuOWMwLDEyLjgtOS44LDIxLjYtMjYuMywyMS42Yy0xMS4xLDAtMjEuOS0zLjctMjkuMy04LjFMMjkyLDIyMi45eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTYzLjYsMTAxLjhoNjAuOXY2MC45SDYzLjZWMTAxLjh6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMzAuNywxMDEuOGg2MC45djYwLjloLTYwLjlWMTAxLjh6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02My42LDE2OS4yaDYwLjlWMjMwSDYzLjZWMTY5LjJ6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMzAuNywxNjkuMmg2MC45VjIzMGgtNjAuOVYxNjkuMnoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" }
            ]
        },
        {
            "category": "Languages & Markup",
            "items": [
                { "name": "HTML", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                { "name": "CSS", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                { "name": "JavaScript", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { "name": "TypeScript", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                { "name": "C#", "expertise": "Advance", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
                { "name": "SCSS", "expertise": "Advance", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" }
            ]
        },
        {
            "category": "AI, LLM & API Integrations",
            "items": [
                { "name": "STT & TTS", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
                { "name": "LLM", "expertise": "Intermediate", "badge_url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+DQo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPHRpdGxlPmFpPC90aXRsZT4NCiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY0LjAwMDAwMCwgNjQuMDAwMDAwKSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMzIwLDY0IEwzMjAsMzIwIEw2NCwzMjAgTDY0LDY0IEwzMjAsNjQgWiBNMTcxLjc0OTM4OCwxMjggTDE0Ni44MTc4NDIsMTI4IEw5OS40ODQwMzg3LDI1NiBMMTIxLjk3NjYyOSwyNTYgTDEzMC45MTMwMzksMjMwLjk3NyBMMTg3LjU3NTAzOSwyMzAuOTc3IEwxOTYuMzE5NjA3LDI1NiBMMjIwLjE2NzE3MiwyNTYgTDE3MS43NDkzODgsMTI4IFogTTI2MC4wOTM3NzgsMTI4IEwyMzcuNjkxNTE5LDEyOCBMMjM3LjY5MTUxOSwyNTYgTDI2MC4wOTM3NzgsMjU2IEwyNjAuMDkzNzc4LDEyOCBaIE0xNTkuMDk0NzI3LDE0OS40NzUyNiBMMTgxLjQwOTAzOSwyMTMuMzMzIEwxMzcuMTM1MDM5LDIxMy4zMzMgTDE1OS4wOTQ3MjcsMTQ5LjQ3NTI2IFogTTM0MS4zMzMzMzMsMjU2IEwzODQsMjU2IEwzODQsMjk4LjY2NjY2NyBMMzQxLjMzMzMzMywyOTguNjY2NjY3IEwzNDEuMzMzMzMzLDI1NiBaIE04NS4zMzMzMzMzLDM0MS4zMzMzMzMgTDEyOCwzNDEuMzMzMzMzIEwxMjgsMzg0IEw4NS4zMzMzMzMzLDM4NCBMODUuMzMzMzMzMywzNDEuMzMzMzMzIFogTTE3MC42NjY2NjcsMzQxLjMzMzMzMyBMMjEzLjMzMzMzMywzNDEuMzMzMzMzIEwyMTMuMzMzMzMzLDM4NCBMMTcwLjY2NjY2NywzODQgTDE3MC42NjY2NjcsMzQxLjMzMzMzMyBaIE04NS4zMzMzMzMzLDAgTDEyOCwwIEwxMjgsNDIuNjY2NjY2NyBMODUuMzMzMzMzMyw0Mi42NjY2NjY3IEw4NS4zMzMzMzMzLDAgWiBNMjU2LDM0MS4zMzMzMzMgTDI5OC42NjY2NjcsMzQxLjMzMzMzMyBMMjk4LjY2NjY2NywzODQgTDI1NiwzODQgTDI1NiwzNDEuMzMzMzMzIFogTTE3MC42NjY2NjcsMCBMMjEzLjMzMzMzMywwIEwyMTMuMzMzMzMzLDQyLjY2NjY2NjcgTDE3MC42NjY2NjcsNDIuNjY2NjY2NyBMMTcwLjY2NjY2NywwIFogTTI1NiwwIEwyOTguNjY2NjY3LDAgTDI5OC42NjY2NjcsNDIuNjY2NjY2NyBMMjU2LDQyLjY2NjY2NjcgTDI1NiwwIFogTTM0MS4zMzMzMzMsMTcwLjY2NjY2NyBMMzg0LDE3MC42NjY2NjcgTDM4NCwyMTMuMzMzMzMzIEwzNDEuMzMzMzMzLDIxMy4zMzMzMzMgTDM0MS4zMzMzMzMsMTcwLjY2NjY2NyBaIE0wLDI1NiBMNDIuNjY2NjY2NywyNTYgTDQyLjY2NjY2NjcsMjk4LjY2NjY2NyBMMCwyOTguNjY2NjY3IEwwLDI1NiBaIE0zNDEuMzMzMzMzLDg1LjMzMzMzMzMgTDM4NCw4NS4zMzMzMzMzIEwzODQsMTI4IEwzNDEuMzMzMzMzLDEyOCBMMzQxLjMzMzMzMyw4NS4zMzMzMzMzIFogTTAsMTcwLjY2NjY2NyBMNDIuNjY2NjY2NywxNzAuNjY2NjY3IEw0Mi42NjY2NjY3LDIxMy4zMzMzMzMgTDAsMjEzLjMzMzMzMyBMMCwxNzAuNjY2NjY3IFogTTAsODUuMzMzMzMzMyBMNDIuNjY2NjY2Nyw4NS4zMzMzMzMzIEw0Mi42NjY2NjY3LDEyOCBMMCwxMjggTDAsODUuMzMzMzMzMyBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPg0KDQo8L3BhdGg+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=" },
                { "name": "N8N Automation", "expertise": "Advance", "badge_url": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjFlbSIgc3R5bGU9ImZsZXg6bm9uZTtsaW5lLWhlaWdodDoxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxZW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPm44bjwvdGl0bGU+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQgOC40YzAgMS4zMjUtMS4xMDIgMi40LTIuNDYyIDIuNC0xLjE0NiAwLTIuMTEtLjc2NS0yLjM4NC0xLjhoLTMuNDM2Yy0uNjAyIDAtMS4xMTUuNDI0LTEuMjE0IDEuMDAzbC0uMTAxLjU5MmEyLjM4IDIuMzggMCAwMS0uOCAxLjQwNWMuNDEyLjM1NC43MDQuODQ0LjggMS40MDVsLjEuNTkyQTEuMjIyIDEuMjIyIDAgMDAxNS43MTkgMTVoLjk3NWMuMjczLTEuMDM1IDEuMjM3LTEuOCAyLjM4NC0xLjggMS4zNiAwIDIuNDYxIDEuMDc1IDIuNDYxIDIuNFMyMC40MzYgMTggMTkuMDc4IDE4Yy0xLjE0NyAwLTIuMTEtLjc2NS0yLjM4NC0xLjhoLS45NzVjLTEuMjA0IDAtMi4yMy0uODQ4LTIuNDI4LTIuMDA1bC0uMTAxLS41OTJhMS4yMjIgMS4yMjIgMCAwMC0xLjIxNC0xLjAwM0gxMC45N2MtLjMwOC45ODQtMS4yNDYgMS43LTIuMzU2IDEuNy0xLjExIDAtMi4wNDgtLjcxNi0yLjM1NS0xLjdINC44MTdjLS4zMDguOTg0LTEuMjQ2IDEuNy0yLjM1NSAxLjdDMS4xMDIgMTQuMyAwIDEzLjIyNSAwIDExLjlzMS4xMDItMi40IDIuNDYyLTIuNGMxLjE4MyAwIDIuMTcyLjgxNSAyLjQwOCAxLjloMS4zMzdjLjIzNi0xLjA4NSAxLjIyNS0xLjkgMi40MDgtMS45IDEuMTg0IDAgMi4xNzIuODE1IDIuNDA4IDEuOWguOTUyYy42MDEgMCAxLjExNS0uNDI0IDEuMjEzLTEuMDAzbC4xMDItLjU5MmMuMTk4LTEuMTU3IDEuMjI1LTIuMDA1IDIuNDI4LTIuMDA1aDMuNDM2Yy4yNzQtMS4wMzUgMS4yMzgtMS44IDIuMzg0LTEuOEMyMi44OTggNiAyNCA3LjA3NSAyNCA4LjR6bS0xLjIzIDBjMCAuNjYzLS41NTIgMS4yLTEuMjMyIDEuMi0uNjggMC0xLjIzLS41MzctMS4yMy0xLjIgMC0uNjYzLjU1LTEuMiAxLjIzLTEuMi42OCAwIDEuMjMxLjUzNyAxLjIzMSAxLjJ6TTIuNDYxIDEzLjFjLjY4IDAgMS4yMy0uNTM3IDEuMjMtMS4yIDAtLjY2My0uNTUtMS4yLTEuMjMtMS4yLS42OCAwLTEuMjMxLjUzNy0xLjIzMSAxLjIgMCAuNjYzLjU1IDEuMiAxLjIzIDEuMnptNi4xNTMgMGMuNjggMCAxLjIzMS0uNTM3IDEuMjMxLTEuMiAwLS42NjMtLjU1LTEuMi0xLjIzLTEuMi0uNjggMC0xLjIzMS41MzctMS4yMzEgMS4yIDAgLjY2My41NSAxLjIgMS4yMyAxLjJ6bTEwLjQ2MiAzLjdjLjY4IDAgMS4yMy0uNTM3IDEuMjMtMS4yIDAtLjY2My0uNTUtMS4yLTEuMjMtMS4yLS42OCAwLTEuMjMuNTM3LTEuMjMgMS4yIDAgLjY2My41NSAxLjIgMS4yMyAxLjJ6IiBmaWxsPSIjRUE0QjcxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=" },
                { "name": "Whatsapp API", "expertise": "Expert", "badge_url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKYXJpYS1sYWJlbD0iV2hhdHNBcHAiIHJvbGU9ImltZyIKdmlld0JveD0iMCAwIDUxMiA1MTIiPjxyZWN0CndpZHRoPSI1MTIiIGhlaWdodD0iNTEyIgpyeD0iMTUlIgpmaWxsPSIjMjVkMzY2Ii8+PHBhdGggZmlsbD0iIzI1ZDM2NiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjI2IiBkPSJNMTIzIDM5M2wxNC02NWExMzggMTM4IDAgMTE1MCA0N3oiLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMzA4IDI3M2MtMy0yLTYtMy05IDFsLTEyIDE2Yy0zIDItNSAzLTkgMS0xNS04LTM2LTE3LTU0LTQ3LTEtNCAxLTYgMy04bDktMTRjMi0yIDEtNCAwLTZsLTEyLTI5Yy0zLTgtNi03LTktN2gtOGMtMiAwLTYgMS0xMCA1LTIyIDIyLTEzIDUzIDMgNzMgMyA0IDIzIDQwIDY2IDU5IDMyIDE0IDM5IDEyIDQ4IDEwIDExLTEgMjItMTAgMjctMTkgMS0zIDYtMTYgMi0xOCIvPjwvc3ZnPg==" },
                { "name": "PayPal", "expertise": "Expert", "badge_url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0+Cjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIC0xMzkuNSA3NTAgNzUwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgoNPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InBheXBhbCIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTY5Ny4xMTUzODUsMCBMNTIuODg0NjE1NCwwIEMyMy43MjQwMzg1LDAgMCwyMy4xOTU1NzQ5IDAsNTEuNzA2NTg2OCBMMCw0MTkuMjkzNDEzIEMwLDQ0Ny44MDQ0MjUgMjMuNzI0MDM4NSw0NzEgNTIuODg0NjE1NCw0NzEgTDY5Ny4xMTUzODUsNDcxIEM3MjYuMjc0MDM4LDQ3MSA3NTAsNDQ3LjgwNDQyNSA3NTAsNDE5LjI5MzQxMyBMNzUwLDUxLjcwNjU4NjggQzc1MCwyMy4xOTU1NzQ5IDcyNi4yNzQwMzgsMCA2OTcuMTE1Mzg1LDAgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkZGRkZGIj4KDTwvcGF0aD4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NC4wMDAwMDAsIDE1MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDkuMjcyNzk1LDguNDU3Nzc2NzkgQzEwMS4yNDg3NSwyLjk0MTU0NDY0IDkwLjc3ODAzNTcsMC4xNzY3NDEwNzEgNzcuODYwNjUxOCwwLjE3Njc0MTA3MSBMMjcuODUxNTI2OCwwLjE3Njc0MTA3MSBDMjMuODkxNTcxNCwwLjE3Njc0MTA3MSAyMS43MDM4MDM2LDIuMTU3MTk2NDMgMjEuMjg4MjIzMiw2LjExMzMzMDM2IEwwLjk3MjU1MzU3MSwxMzMuNjM4MjIzIEMwLjc2MTQxOTY0MywxMzQuODkwNjk2IDEuMDc0Nzc2NzksMTM2LjAzNjE3IDEuOTA5NzU4OTMsMTM3LjA3NzUwOSBDMi43Mzk5NjQyOSwxMzguMTIwNzU5IDMuNzg0MTY5NjQsMTM4LjYzOTUxOCA1LjAzNDczMjE0LDEzOC42Mzk1MTggTDI4Ljc4ODczMjEsMTM4LjYzOTUxOCBDMzIuOTU1MDQ0NiwxMzguNjM5NTE4IDM1LjI0NTAzNTcsMTM2LjY2MzgzOSAzNS42NjUzOTI5LDEzMi43MDE5NzMgTDQxLjI5MDUzNTcsOTguMzIyNDkxMSBDNDEuNDk1OTM3NSw5Ni42NTYzNDgyIDQyLjIyODY5NjQsOTUuMzAxNjUxOCA0My40NzkyNTg5LDk0LjI1ODQwMTggQzQ0LjcyODg2NjEsOTMuMjE3MDYyNSA0Ni4yOTE4MzA0LDkyLjUzNTg5MjkgNDguMTY3MTk2NCw5Mi4yMjM0OTExIEM1MC4wNDI1NjI1LDkxLjkxMzk1NTQgNTEuODEwOTI4Niw5MS43NTgyMzIxIDUzLjQ4MDg5MjksOTEuNzU4MjMyMSBDNTUuMTQ2MDgwNCw5MS43NTgyMzIxIDU3LjEyNDYyNSw5MS44NjMzMjE0IDU5LjQyMDM0ODIsOTIuMDcwNjMzOSBDNjEuNzEwMzM5Myw5Mi4yNzg5MDE4IDYzLjE3MDEyNSw5Mi4zODAxNjk2IDYzLjc5NTg4MzksOTIuMzgwMTY5NiBDODEuNzE0NTYyNSw5Mi4zODAxNjk2IDk1Ljc3OTMzMDQsODcuMzMxMTA3MSAxMDUuOTkxMTQzLDc3LjIyMjQ3MzIgQzExNi4xOTgxNzksNjcuMTE3NjYwNyAxMjEuMzA3NDI5LDUzLjEwNTQzNzUgMTIxLjMwNzQyOSwzNS4xODI5Mzc1IEMxMjEuMzA3NDI5LDIyLjg5MDM1NzEgMTE3LjI5MzAxOCwxMy45ODI2MDcxIDEwOS4yNzI3OTUsOC40NTc3NzY3OSBaIE04My40ODc3MDU0LDQ2Ljc0ODQ5MTEgQzgyLjQ0MjU0NDYsNTQuMDQyNjQyOSA3OS43MzY5NzMyLDU4LjgzMjgwMzYgNzUuMzYxNDM3NSw2MS4xMjU2NjA3IEM3MC45ODQ5NDY0LDYzLjQyMTM4MzkgNjQuNzM0MDQ0Niw2NC41NjIwODA0IDU2LjYwODczMjEsNjQuNTYyMDgwNCBMNDYuMjkzNzQxMSw2NC44NzU0Mzc1IEw1MS42MDgzOTI5LDMxLjQzMTI1IEM1Mi4wMjMwMTc5LDI5LjE0MTI1ODkgNTMuMzc2NzU4OSwyNy45OTQ4MzA0IDU1LjY3MDU3MTQsMjcuOTk0ODMwNCBMNjEuNjEwOTgyMSwyNy45OTQ4MzA0IEM2OS45NDE2OTY0LDI3Ljk5NDgzMDQgNzUuOTg4MTUxOCwyOS4xOTU3MTQzIDc5LjczODg4MzksMzEuNTg3OTI4NiBDODMuNDg3NzA1NCwzMy45ODU4NzUgODQuNzM4MjY3OSwzOS4wNDE2MjUgODMuNDg3NzA1NCw0Ni43NDg0OTExIFoiIGlkPSJTaGFwZSIgZmlsbD0iIzAwMzA4NyI+Cg08L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNjM3LjAyNjQxMSwwLjE3Njc0MTA3MSBMNjEzLjg5OTEyNSwwLjE3Njc0MTA3MSBDNjExLjYwMTQ5MSwwLjE3Njc0MTA3MSA2MTAuMjQ4NzA1LDEuMzIzMTY5NjQgNjA5LjgzNTk5MSwzLjYxNTA3MTQzIEw1ODkuNTE4NDExLDEzMy42MzgyMjMgTDU4OS4yMDUwNTQsMTM0LjI2MzAyNyBDNTg5LjIwNTA1NCwxMzUuMzEwMDk4IDU4OS42MjI1NDUsMTM2LjI5NTA3MSA1OTAuNDU3NTI3LDEzNy4yMzMyMzIgQzU5MS4yODY3NzcsMTM4LjE2OTQ4MiA1OTIuMzMyODkzLDEzOC42Mzg1NjIgNTkzLjU4MTU0NSwxMzguNjM4NTYyIEw2MTQuMjEyNDgyLDEzOC42Mzg1NjIgQzYxOC4xNjU3NSwxMzguNjM4NTYyIDYyMC4zNTQ0NzMsMTM2LjY2Mjg4NCA2MjAuNzc2NzQxLDEzMi43MDEwMTggTDY0MS4wOTI0MTEsNC44NjI3Njc4NiBMNjQxLjA5MjQxMSw0LjU1MjI3Njc5IEM2NDEuMDkxNDU1LDEuNjM1NTcxNDMgNjM5LjczMjkzOCwwLjE3Njc0MTA3MSA2MzcuMDI2NDExLDAuMTc2NzQxMDcxIFoiIGlkPSJTaGFwZSIgZmlsbD0iIzAwOUNERSI+Cg08L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzU3LjU5OTczMiw1MC40OTczMTI1IEMzNTcuNTk5NzMyLDQ5LjQ1Nzg4MzkgMzU3LjE4MDMzLDQ4LjQ2NjIyMzIgMzU2LjM1MjAzNiw0Ny41Mjk5NzMyIEMzNTUuNTE2MDk4LDQ2LjU5Mjc2NzkgMzU0LjU3Njk4Miw0Ni4xMjE3NzY4IDM1My41Mzg1MDksNDYuMTIxNzc2OCBMMzI5LjQ3MTE1Miw0Ni4xMjE3NzY4IEMzMjcuMTc0NDczLDQ2LjEyMTc3NjggMzI1LjMwMDA2Myw0Ny4xNjg4NDgyIDMyMy44NDUwNTQsNDkuMjQ2NzUgTDI5MC43MTQyMjMsOTguMDA4MTc4NiBMMjc2Ljk2MjgxMiw1MS4xMjQwMjY4IEMyNzUuOTE2Njk2LDQ3Ljc5MTc0MTEgMjczLjYyNTc1LDQ2LjEyMTc3NjggMjcwLjA4NjE1Miw0Ni4xMjE3NzY4IEwyNDYuNjQxNjg3LDQ2LjEyMTc3NjggQzI0NS41OTc0ODIsNDYuMTIxNzc2OCAyNDQuNjU5MzIxLDQ2LjU5MTgxMjUgMjQzLjgzMTAyNyw0Ny41Mjk5NzMyIEMyNDIuOTk1MDg5LDQ4LjQ2NjIyMzIgMjQyLjU4MDQ2NCw0OS40NTg4MzkzIDI0Mi41ODA0NjQsNTAuNDk3MzEyNSBDMjQyLjU4MDQ2NCw1MC45MTc2Njk2IDI0NC42MTI1MDksNTcuMDYxNTcxNCAyNDguNjc0Njg3LDY4LjkzODU3MTQgQzI1Mi43MzY4NjYsODAuODE3NDgyMSAyNTcuMTEzMzU3LDkzLjYzMjY0MjkgMjYxLjgwMjI1LDEwNy4zODY5MiBDMjY2LjQ5MTE0MywxMjEuMTM3Mzc1IDI2OC45MzY4NTcsMTI4LjQzNDM5MyAyNjkuMTQ3MDM2LDEyOS4yNjI2ODggQzI1Mi4wNTk1MTgsMTUyLjYwMjA2MyAyNDMuNTE3NjcsMTY1LjEwNDgyMSAyNDMuNTE3NjcsMTY2Ljc2OTA1NCBDMjQzLjUxNzY3LDE2OS40ODAzNTcgMjQ0Ljg3MTQxMSwxNzAuODMzMTQzIDI0Ny41ODA4MDQsMTcwLjgzMzE0MyBMMjcxLjY0ODE2MSwxNzAuODMzMTQzIEMyNzMuOTQwMDYyLDE3MC44MzMxNDMgMjc1LjgxNDQ3MywxNjkuNzkzNzE0IDI3Ny4yNzQyNTksMTY3LjcwOTEyNSBMMzU2Ljk3NjgzOSw1Mi42ODUwODA0IEMzNTcuMzkxNDY0LDUyLjI3MDQ1NTQgMzU3LjU5OTczMiw1MS41NDQzODM5IDM1Ny41OTk3MzIsNTAuNDk3MzEyNSBaIiBpZD0iU2hhcGUiIGZpbGw9IiMwMDMwODciPgoNPC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU4MS43MDQ1NDUsNDYuMTIxNzc2OCBMNTU3Ljk0ODYzNCw0Ni4xMjE3NzY4IEM1NTUuMDMwMDE4LDQ2LjEyMTc3NjggNTUzLjI2MzU2Miw0OS41NjAxMDcxIDU1Mi42Mzg3NTksNTYuNDM2NzY3OSBDNTQ3LjIxNTE5Niw0OC4xMDYwNTM2IDUzNy4zMjM0MjksNDMuOTMzMDUzNiA1MjIuOTQzMzkzLDQzLjkzMzA1MzYgQzUwNy45NDA0NjQsNDMuOTMzMDUzNiA0OTUuMTc0OTgyLDQ5LjU2MDEwNzEgNDg0LjY1NTU0NSw2MC44MTIzMDM2IEM0NzQuMTMxMzMsNzIuMDY1NDU1NCA0NjguODcyMDg5LDg1LjI5OTA2MjUgNDY4Ljg3MjA4OSwxMDAuNTA4MzQ4IEM0NjguODcyMDg5LDExMi44MDQ3NSA0NzIuNDY1MTg3LDEyMi41OTcxNjEgNDc5LjY1MzI5NSwxMjkuODg3NDkxIEM0ODYuODQyMzU3LDEzNy4xODU0NjQgNDk2LjQ3OTA0NSwxNDAuODI3Mjg2IDUwOC41NjgxMzQsMTQwLjgyNzI4NiBDNTE0LjYwODg1NywxNDAuODI3Mjg2IDUyMC43NTU2MjUsMTM5LjU3NDgxMyA1MjcuMDA2NTI3LDEzNy4wNzY1NTQgQzUzMy4yNTgzODQsMTM0LjU3NjM4NCA1MzguMTUwNzY4LDEzMS4yNDQwOTggNTQxLjY5ODk2NCwxMjcuMDc0OTIgQzU0MS42OTg5NjQsMTI3LjI4NDE0MyA1NDEuNDg2ODc1LDEyOC4yMjAzOTMgNTQxLjA3MzIwNSwxMjkuODg2NTM2IEM1NDAuNjUyODQ4LDEzMS41NTY1IDU0MC40NDc0NDYsMTMyLjgwODk3MyA1NDAuNDQ3NDQ2LDEzMy42MzcyNjggQzU0MC40NDc0NDYsMTM2Ljk3NTI4NiA1NDEuNzk4MzIxLDEzOC42Mzc2MDcgNTQ0LjUxMTUzNiwxMzguNjM3NjA3IEw1NjYuMDc5Njc5LDEzOC42Mzc2MDcgQzU3MC4wMzI5NDYsMTM4LjYzNzYwNyA1NzIuMzI4NjcsMTM2LjY2MTkyOSA1NzIuOTUyNTE4LDEzMi43MDAwNjMgTDU4NS43Njg2MzQsNTEuMTIzMDcxNCBDNTg1Ljk3NDAzNiw0OS44NzI1MDg5IDU4NS42NjE2MzQsNDguNzI3OTkxMSA1ODQuODMwNDczLDQ3LjY4NDc0MTEgQzU4My45OTQ1MzYsNDYuNjQ0MzU3MSA1ODIuOTU1MTA3LDQ2LjEyMTc3NjggNTgxLjcwNDU0NSw0Ni4xMjE3NzY4IFogTTU0MC45MTY1MjcsMTA3LjY5NjQ1NSBDNTM1LjYwMjgzLDExMi45MDYwMTggNTI5LjE5NjIwNSwxMTUuNTA5MzY2IDUyMS42OTQ3NDEsMTE1LjUwOTM2NiBDNTE1LjY0OTI0MSwxMTUuNTA5MzY2IDUxMC43NTY4NTcsMTEzLjg0NTEzNCA1MDcuMDA0MjE0LDExMC41MDkwMjcgQzUwMy4yNTI1MjcsMTA3LjE4MDU2MyA1MDEuMzc3MTYxLDEwMi41OTU4MDQgNTAxLjM3NzE2MSw5Ni43NTY2NjA3IEM1MDEuMzc3MTYxLDg5LjA1MTcwNTQgNTAzLjk4MTQ2NCw4Mi41MzYxNjk2IDUwOS4xOTE5ODIsNzcuMjIyNDczMiBDNTE0LjM5NTgxMiw3MS45MDg3NzY4IDUyMC44NjA3MTQsNjkuMjUxOTI4NiA1MjguNTcxNDAyLDY5LjI1MTkyODYgQzUzNC40MDAwMzYsNjkuMjUxOTI4NiA1MzkuMjQ1NjA3LDcwLjk3MTU3MTQgNTQzLjEwNDI5NSw3NC40MDg5NDY0IEM1NDYuOTU2Mjk1LDc3Ljg0NzI3NjggNTQ4Ljg4ODAyNyw4Mi41ODk2Njk2IDU0OC44ODgwMjcsODguNjMyMzAzNiBDNTQ4Ljg4NzA3MSw5Ni4xMzI4MTI1IDU0Ni4yMjkyNjgsMTAyLjQ4OTc1OSA1NDAuOTE2NTI3LDEwNy42OTY0NTUgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMDA5Q0RFIj4KDTwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMjYuNjM5Mzc1LDQ2LjEyMTc3NjggTDIwMi44ODUzNzUsNDYuMTIxNzc2OCBDMTk5Ljk2Mzg5Myw0Ni4xMjE3NzY4IDE5OC4xOTY0ODIsNDkuNTYwMTA3MSAxOTcuNTcwNzIzLDU2LjQzNjc2NzkgQzE5MS45NDQ2MjUsNDguMTA2MDUzNiAxODIuMDQ2MTcsNDMuOTMzMDUzNiAxNjcuODc3MjY4LDQzLjkzMzA1MzYgQzE1Mi44NzQzMzksNDMuOTMzMDUzNiAxNDAuMTA5ODEzLDQ5LjU2MDEwNzEgMTI5LjU4ODQ2NCw2MC44MTIzMDM2IEMxMTkuMDY0MjUsNzIuMDY1NDU1NCAxMTMuODA1MDA5LDg1LjI5OTA2MjUgMTEzLjgwNTAwOSwxMDAuNTA4MzQ4IEMxMTMuODA1MDA5LDExMi44MDQ3NSAxMTcuNDAwMDE4LDEyMi41OTcxNjEgMTI0LjU4OTA4LDEyOS44ODc0OTEgQzEzMS43NzgxNDMsMTM3LjE4NTQ2NCAxNDEuNDEyOTIsMTQwLjgyNzI4NiAxNTMuNTAwMDk4LDE0MC44MjcyODYgQzE1OS4zMzE1OTgsMTQwLjgyNzI4NiAxNjUuMzc4MDU0LDEzOS41NzQ4MTMgMTcxLjYyOCwxMzcuMDc2NTU0IEMxNzcuODc4OTAyLDEzNC41NzYzODQgMTgyLjg4MDE5NiwxMzEuMjQ0MDk4IDE4Ni42MzA5MjksMTI3LjA3NDkyIEMxODUuNzk0OTkxLDEyOS41NzUwODkgMTg1LjM4MDM2NiwxMzEuNzYzODEzIDE4NS4zODAzNjYsMTMzLjYzNzI2OCBDMTg1LjM4MDM2NiwxMzYuOTc1Mjg2IDE4Ni43MzQxMDcsMTM4LjYzNzYwNyAxODkuNDQzNSwxMzguNjM3NjA3IEwyMTEuMDA5NzMyLDEzOC42Mzc2MDcgQzIxNC45NjU4NjYsMTM4LjYzNzYwNyAyMTcuMjYwNjM0LDEzNi42NjE5MjkgMjE3Ljg4NjM5MywxMzIuNzAwMDYzIEwyMzAuNzAwNTk4LDUxLjEyMzA3MTQgQzIzMC45MDYsNDkuODcyNTA4OSAyMzAuNTkzNTk4LDQ4LjcyNzk5MTEgMjI5Ljc2MzM5Myw0Ny42ODQ3NDExIEMyMjguOTI5MzY2LDQ2LjY0NDM1NzEgMjI3Ljg4ODk4Miw0Ni4xMjE3NzY4IDIyNi42MzkzNzUsNDYuMTIxNzc2OCBaIE0xODUuODUwNDAyLDEwNy44NTEyMjMgQzE4MC41MzU3NSwxMTIuOTYyMzg0IDE3NC4wMjExNywxMTUuNTA5MzY2IDE2Ni4zMTYyMTQsMTE1LjUwOTM2NiBDMTYwLjI2OTc1OSwxMTUuNTA5MzY2IDE1NS40MjUxNDMsMTEzLjg0NTEzNCAxNTEuNzgxNDExLDExMC41MDkwMjcgQzE0OC4xMzI5MDIsMTA3LjE4MDU2MyAxNDYuMzExMDM2LDEwMi41OTU4MDQgMTQ2LjMxMTAzNiw5Ni43NTY2NjA3IEMxNDYuMzExMDM2LDg5LjA1MTcwNTQgMTQ4LjkxNDM4NCw4Mi41MzYxNjk2IDE1NC4xMjU4NTcsNzcuMjIyNDczMiBDMTU5LjMzMTU5OCw3MS45MDg3NzY4IDE2NS43OTE3MjMsNjkuMjUxOTI4NiAxNzMuNTA0MzIxLDY5LjI1MTkyODYgQzE3OS4zMzU4MjEsNjkuMjUxOTI4NiAxODQuMTgwNDM3LDcwLjk3MTU3MTQgMTg4LjAzOTEyNSw3NC40MDg5NDY0IEMxOTEuODkxMTI1LDc3Ljg0NzI3NjggMTkzLjgyMDk0Niw4Mi41ODk2Njk2IDE5My44MjA5NDYsODguNjMyMzAzNiBDMTkzLjgyMDk0Niw5Ni4zNDIwMzU3IDE5MS4xNjQwOTgsMTAyLjc1MTUyNyAxODUuODUwNDAyLDEwNy44NTEyMjMgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMDAzMDg3Ij4KDTwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00NjQuMzM3OTY0LDguNDU3Nzc2NzkgQzQ1Ni4zMTQ4NzUsMi45NDE1NDQ2NCA0NDUuODQ2MDcxLDAuMTc2NzQxMDcxIDQzMi45MjY3NzcsMC4xNzY3NDEwNzEgTDM4My4yMzAwNTQsMC4xNzY3NDEwNzEgQzM3OS4wNTk5MiwwLjE3Njc0MTA3MSAzNzYuNzY3MDYyLDIuMTU3MTk2NDMgMzc2LjM1MzM5Myw2LjExMzMzMDM2IEwzNTYuMDM3NzIzLDEzMy42MzcyNjggQzM1NS44MjY1ODksMTM0Ljg4OTc0MSAzNTYuMTM4OTkxLDEzNi4wMzUyMTQgMzU2Ljk3NDkyOSwxMzcuMDc2NTU0IEMzNTcuODAyMjY4LDEzOC4xMTk4MDQgMzU4Ljg0OTMzOSwxMzguNjM4NTYzIDM2MC4wOTk5MDIsMTM4LjYzODU2MyBMMzg1LjcyODMxMiwxMzguNjM4NTYzIEMzODguMjI4NDgyLDEzOC42Mzg1NjMgMzg5Ljg5NDYyNSwxMzcuMjg1Nzc3IDM5MC43Mjk2MDcsMTM0LjU3NjM4NCBMMzk2LjM1NjY2MSw5OC4zMjE1MzU3IEMzOTYuNTYzMDE4LDk2LjY1NTM5MjkgMzk3LjI5MjkxMSw5NS4zMDA2OTY0IDM5OC41NDQ0MjksOTQuMjU3NDQ2NCBDMzk5Ljc5NDk5MSw5My4yMTYxMDcxIDQwMS4zNTYwNDUsOTIuNTM0OTM3NSA0MDMuMjMzMzIxLDkyLjIyMjUzNTcgQzQwNS4xMDc3MzIsOTEuOTEzIDQwNi44NzYwOTgsOTEuNzU3Mjc2OCA0MDguNTQ3MDE4LDkxLjc1NzI3NjggQzQxMC4yMTIyMDUsOTEuNzU3Mjc2OCA0MTIuMTkwNzUsOTEuODYyMzY2MSA0MTQuNDgzNjA3LDkyLjA2OTY3ODYgQzQxNi43NzU1MDksOTIuMjc3OTQ2NCA0MTguMjM4MTYxLDkyLjM3OTIxNDMgNDE4Ljg1OTE0Myw5Mi4zNzkyMTQzIEM0MzYuNzgwNjg3LDkyLjM3OTIxNDMgNDUwLjg0MzU0NSw4Ny4zMzAxNTE4IDQ2MS4wNTUzNTcsNzcuMjIxNTE3OSBDNDcxLjI2NTI1OSw2Ny4xMTY3MDU0IDQ3Ni4zNzA2ODcsNTMuMTA0NDgyMSA0NzYuMzcwNjg3LDM1LjE4MTk4MjEgQzQ3Ni4zNzE2NDMsMjIuODkwMzU3MSA0NzIuMzU4MTg3LDEzLjk4MjYwNzEgNDY0LjMzNzk2NCw4LjQ1Nzc3Njc5IFogTTQzMi4zMDEwMTgsNTkuODc1MDk4MiBDNDI3LjcxNjI1OSw2My4wMDAwNzE0IDQyMC44Mzk1OTgsNjQuNTYyMDgwNCA0MTEuNjcyOTQ2LDY0LjU2MjA4MDQgTDQwMS42NzAzNTcsNjQuODc1NDM3NSBMNDA2Ljk4NTAwOSwzMS40MzEyNSBDNDA3LjM5NzcyMywyOS4xNDEyNTg5IDQwOC43NTE0NjQsMjcuOTk0ODMwNCA0MTEuMDQ3MTg3LDI3Ljk5NDgzMDQgTDQxNi42NzEzNzUsMjcuOTk0ODMwNCBDNDIxLjI1NDIyMywyNy45OTQ4MzA0IDQyNC45MDA4MjEsMjguMjAzMDk4MiA0MjcuNjE0MDM2LDI4LjYxODY3ODYgQzQzMC4zMTg2NTIsMjkuMDM5MDM1NyA0MzIuOTI2Nzc3LDMwLjMzNzM2NjEgNDM1LjQyNjk0NiwzMi41MjUxMzM5IEM0MzcuOTI5MDI3LDM0LjcxMzg1NzEgNDM5LjE3NzY3OSwzNy44OTIzMzA0IDQzOS4xNzc2NzksNDIuMDU5NTk4MiBDNDM5LjE3NzY3OSw1MC44MTA2Njk2IDQzNi44ODI5MTEsNTYuNzQ4MjE0MyA0MzIuMzAxMDE4LDU5Ljg3NTA5ODIgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjMDA5Q0RFIj4KDTwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" },
                { "name": "Stripe", "expertise": "Expert", "badge_url": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAtMTEgNzAgNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjY5IiBoZWlnaHQ9IjQ3IiByeD0iNS41IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjRDlEOUQ5Ii8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM3LjYxMDkgMTYuMjgzOEwzNC4wNTUgMTcuMDQ3VjE0LjE2NEwzNy42MTA5IDEzLjQxNVYxNi4yODM4Wk00NS4wMDU3IDE3Ljg4MDhDNDMuNjE3MyAxNy44ODA4IDQyLjcyNDggMTguNTMwOCA0Mi4yMjkgMTguOTgzMUw0Mi4wNDQ4IDE4LjEwNjlIMzguOTI4MVYzNC41ODQ5TDQyLjQ2OTggMzMuODM1OUw0Mi40ODQgMjkuODM2NUM0Mi45OTQgMzAuMjAzOSA0My43NDQ4IDMwLjcyNjggNDQuOTkxNSAzMC43MjY4QzQ3LjUyNzMgMzAuNzI2OCA0OS44MzY1IDI4LjY5MTggNDkuODM2NSAyNC4yMTE5QzQ5LjgyMjMgMjAuMTEzNiA0Ny40ODQ4IDE3Ljg4MDggNDUuMDA1NyAxNy44ODA4Wk00NC4xNTU2IDI3LjYxNzdDNDMuMzE5OCAyNy42MTc3IDQyLjgyMzkgMjcuMzIxIDQyLjQ4MzkgMjYuOTUzNUw0Mi40Njk4IDIxLjcxMDVDNDIuODM4MSAyMS4zMDA3IDQzLjM0ODEgMjEuMDE4MSA0NC4xNTU2IDIxLjAxODFDNDUuNDQ0OCAyMS4wMTgxIDQ2LjMzNzMgMjIuNDU5NSA0Ni4zMzczIDI0LjMxMDhDNDYuMzM3MyAyNi4yMDQ1IDQ1LjQ1ODkgMjcuNjE3NyA0NC4xNTU2IDI3LjYxNzdaTTYxIDI0LjM1MzJDNjEgMjAuNzM1NCA1OS4yNDMzIDE3Ljg4MDggNTUuODg1OCAxNy44ODA4QzUyLjUxNDIgMTcuODgwOCA1MC40NzQyIDIwLjczNTQgNTAuNDc0MiAyNC4zMjVDNTAuNDc0MiAyOC41Nzg3IDUyLjg4MjUgMzAuNzI2OCA1Ni4zMzkyIDMwLjcyNjhDNTguMDI1IDMwLjcyNjggNTkuMyAzMC4zNDUyIDYwLjI2MzMgMjkuODA4MlYyNi45ODE4QzU5LjMgMjcuNDYyMyA1OC4xOTUgMjcuNzU5MSA1Ni43OTI1IDI3Ljc1OTFDNTUuNDE4MyAyNy43NTkxIDU0LjIgMjcuMjc4NiA1NC4wNDQyIDI1LjYxMUg2MC45NzE3QzYwLjk3MTcgMjUuNTMzMiA2MC45NzY4IDI1LjM1NjUgNjAuOTgyNiAyNS4xNTI4TDYwLjk4MjYgMjUuMTUyNlYyNS4xNTI1VjI1LjE1MjRWMjUuMTUyM1YyNS4xNTIzQzYwLjk5MDYgMjQuODc1MyA2MSAyNC41NDg2IDYxIDI0LjM1MzJaTTU0LjAwMTYgMjMuMDEwN0M1NC4wMDE2IDIxLjQxMzggNTQuOTc5MSAyMC43NDk2IDU1Ljg3MTYgMjAuNzQ5NkM1Ni43MzU4IDIwLjc0OTYgNTcuNjU2NiAyMS40MTM4IDU3LjY1NjYgMjMuMDEwN0g1NC4wMDE2Wk0zNC4wNTQ4IDE4LjEyMUgzNy42MTA3VjMwLjQ4NjZIMzQuMDU0OFYxOC4xMjFaTTMwLjAxNzYgMTguMTIxTDMwLjI0NDMgMTkuMTY2OEMzMS4wODAxIDE3LjY0MDUgMzIuNzM3NiAxNy45NTE0IDMzLjE5MDkgMTguMTIxVjIxLjM3MTRDMzIuNzUxOCAyMS4yMTU5IDMxLjMzNTEgMjEuMDE4MSAzMC40OTkzIDIyLjEwNjNWMzAuNDg2NkgyNi45NTc2VjE4LjEyMUgzMC4wMTc2Wk0yMy4xNjA3IDE1LjA1NDNMMTkuNzA0IDE1Ljc4OTJMMTkuNjg5OSAyNy4xMDlDMTkuNjg5OSAyOS4yMDA1IDIxLjI2MjQgMzAuNzQwOSAyMy4zNTkgMzAuNzQwOUMyNC41MjA3IDMwLjc0MDkgMjUuMzcwNyAzMC41MjkgMjUuODM4MiAzMC4yNzQ2VjI3LjQwNThDMjUuMzg0OSAyNy41ODk1IDIzLjE0NjUgMjguMjM5NiAyMy4xNDY1IDI2LjE0OFYyMS4xMzExSDI1LjgzODJWMTguMTIxSDIzLjE0NjVMMjMuMTYwNyAxNS4wNTQzWk0xNC43ODg0IDIwLjk0NzVDMTQuMDM3NSAyMC45NDc1IDEzLjU4NDIgMjEuMTU5NCAxMy41ODQyIDIxLjcxMDZDMTMuNTg0MiAyMi4zMTI0IDE0LjM2NDQgMjIuNTc3MSAxNS4zMzIzIDIyLjkwNTVDMTYuOTEwMiAyMy40NDA5IDE4Ljk4NzEgMjQuMTQ1NSAxOC45OTU5IDI2Ljc1NTdDMTguOTk1OSAyOS4yODU0IDE2Ljk3IDMwLjc0MSAxNC4wMjM0IDMwLjc0MUMxMi44MDUgMzAuNzQxIDExLjQ3MzMgMzAuNTAwNyAxMC4xNTU4IDI5LjkzNTVWMjYuNTcyQzExLjM0NTggMjcuMjIyMSAxMi44NDc1IDI3LjcwMjYgMTQuMDIzNCAyNy43MDI2QzE0LjgxNjcgMjcuNzAyNiAxNS4zODM0IDI3LjQ5MDYgMTUuMzgzNCAyNi44NDA1QzE1LjM4MzQgMjYuMTc0IDE0LjUzNzYgMjUuODY5MyAxMy41MTY2IDI1LjUwMTVDMTEuOTYxNiAyNC45NDEzIDEwIDI0LjIzNDYgMTAgMjEuODgwMkMxMCAxOS4zNzg4IDExLjkxMjUgMTcuODgwOCAxNC43ODg0IDE3Ljg4MDhDMTUuOTY0MiAxNy44ODA4IDE3LjEyNTkgMTguMDY0NSAxOC4zMDE3IDE4LjUzMDlWMjEuODUxOUMxNy4yMjUgMjEuMjcyNSAxNS44NjUgMjAuOTQ3NSAxNC43ODg0IDIwLjk0NzVaIiBmaWxsPSIjNjQ2MUZDIi8+DQo8L3N2Zz4=" },

            ]
        },
        {
            "category": "Tools & Utilities",
            "items": [
                { "name": "Jira", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
                { "name": "Confluence", "expertise": "Expert", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" },
                { "name": "GitBook", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitbook/gitbook-original.svg" },
                { "name": "Notion", "expertise": "Advanced", "badge_url": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" }
            ]
        },
    ]

}

document.querySelectorAll("[data-content-text]").forEach((val, key) => {
    const eleKey = val.getAttribute('data-content-text')
    if (val.getAttribute('data-typed-items'))
        val.setAttribute('data-typed-items', info[eleKey])
    else
        val.textContent = info[eleKey]

})
document.querySelectorAll("[data-content-link]").forEach((val, key) => {
    const eleKey = val.getAttribute('data-content-link')
    val.setAttribute('href', info[eleKey])
})
document.querySelectorAll("[data-content-html]").forEach((val, key) => {
    const eleKey = val.getAttribute('data-content-html')
    val.innerHTML = info[eleKey]
})
document.querySelectorAll("[data-content-testimonials]").forEach((ele, key) => {
    const eleKey = ele.getAttribute('data-content-testimonials')
    const list = info[eleKey]
    if (!list?.length) return

    ele.innerHTML = '';

    list.forEach(l => {
        ele.innerHTML += `
            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src="${l.image}" class="testimonial-img" alt="">
                <h3>${l.name}</h3>
                <h4>${l.title}</h4>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  ${l.message}
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>`
    })
})
document.querySelectorAll("[data-content-skills]").forEach((ele, key) => {
    const eleKey = ele.getAttribute('data-content-skills')
    const list = info[eleKey]
    if (!list?.length) return

    ele.innerHTML = '';
    const getRatio = (expertise) => {
        if (expertise === "Expert") return 90;
        if (expertise === "Advanced") return 80;
        if (expertise === "Intermediate") return 70;
        if (expertise === "Beginner") return 50;
        if (expertise === "Novice") return 25;
    }
    list.forEach(l => {
        let itemsHtml = l.items?.map(i => {
            const ratio = getRatio(i.expertise)
            return `
              <div class="col-4 mb-2 text-center">
                <div class="skill-image position-relative" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${i.expertise}">
                    <img src="${i.badge_url}" alt="${i.name}">
                     <span class="position-absolute p-1 bg-${i.expertise} border border-light rounded-circle">
                    </span>
                </div>
                <span class="skill-name text-muted">${i.name}</span>
              </div>
         `
        }).join('')

        ele.innerHTML += `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="border-1 border p-0 rounded-3">
                <div class="mb-4 py-2 bg-dark bg-opacity-10 text-center rounded-top">
                    <strong>${l.category}</strong>
                </div>
                <div class="d-flex flex-wrap">
                    ${itemsHtml}
                </div>
            </div>
          </div>`
    })
})
document.querySelectorAll("[data-content-list-container]").forEach((ele, key) => {
    const eleKey = ele.getAttribute('data-content-list-container')
    const list = info[eleKey]
    if (!list?.length) return

    const types = [...new Set(list.map(e => e.type))];
    let filterItemsHtml = `<li data-filter=".filter-${types[0]}" class="filter-active">${types[0]}</li>`;
    delete types[0];
    filterItemsHtml += types.map(x => `<li data-filter=".filter-${x}">${x}</li>`).join('')
    const filterHtml = `
        <ul id="portfolio-flters">
            <!-- <li data-filter="*" class="filter-active">All</li> -->
            ${filterItemsHtml}
        </ul>
    `;
    const filterContainer = ele.querySelector('[data-content-list="filter"')
    filterContainer.innerHTML = filterHtml;


    const itemsContainer = ele.querySelector('[data-content-list="items"')
    itemsContainer.innerHTML = '';
    list.forEach(l => {
        itemsContainer.innerHTML += `
        <div class="col-lg-4 col-md-6 portfolio-item filter-${l.type}">
            <div class="portfolio-wrap">
              <img src="${l.image}" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>${l.title} </h4>
                <p>${l.type}</p>
                <div class="portfolio-links">
                  <a  href="${l.image}" data-gallery="portfolioGallery" class="portfolio-lightbox"
                    title="${l.title}"><i class="bx bx-plus"></i></a>
                  <a href="${l.link}"
                    class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i
                      class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>        `
    })
})


document.querySelectorAll("[data-content-projects]").forEach(async (ele) => {
    const eleKey = ele.getAttribute('data-content-projects');
    const list = info[eleKey];
    if (!list?.length) return;

    ele.innerHTML = '<div class="col-12 text-center p-5"><div class="spinner-border text-primary" role="status"></div><p class="mt-2 text-muted">Curating project masterpieces...</p></div>';

    ele.innerHTML = '';
    list.forEach((project, index) => {
        const techHtml = project.technologies?.map(t => `<span class="tech-tag">${t}</span>`).join('') || '';
        const carouselImages = project.images.length > 0 ? project.images : [project.images];
        const swiperSlides = carouselImages?.map(img => `<div class="swiper-slide"><img src="${img}" alt="${project.title}"></div>`).join('');

        ele.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div class="project-card">
                <div class="project-media">
                    <span class="project-badge">${project.type}</span>
                    <div class="project-carousel swiper" id="swiper-${index}">
                        <div class="swiper-wrapper">
                            ${swiperSlides}
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-meta">
                            <div class="meta-item">
                                <i class="bx bxs-user-detail"></i>
                                <span>${project.client || 'Personal Project'}</span>
                            </div>
                            <div class="meta-item">
                                <i class="bx bx-category"></i>
                                <span>${project.type}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="desc-${index}" class="project-description collapsed">
                        ${project.descriptionHTML}
                    </div>
                    
                    <button class="toggle-desc-btn" onclick="toggleProjectDescription(${index}, this)">
                        <span>Show More</span>
                        <i class="bx bx-chevron-down"></i>
                    </button>

                    <div class="project-tech-stack">
                        ${techHtml}
                    </div>
                </div>
            </div>
        </div>`;
    });

    setTimeout(() => {
        list.forEach((_, index) => {
            new Swiper(`#swiper-${index}`, {
                speed: 600,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                slidesPerView: 'auto',
                pagination: {
                    el: `#swiper-${index} .swiper-pagination`,
                    type: 'bullets',
                    clickable: true
                }
            });
        });
    }, 200);
});

window.toggleProjectDescription = function (index, btn) {
    const desc = document.getElementById(`desc-${index}`);
    const span = btn.querySelector('span');

    if (desc.classList.contains('collapsed')) {
        desc.classList.remove('collapsed');
        desc.classList.add('expanded');
        span.textContent = 'Show Less';
        btn.classList.add('active');
    } else {
        desc.classList.remove('expanded');
        desc.classList.add('collapsed');
        span.textContent = 'Show More';
        btn.classList.remove('active');
    }
}

function init() {
    document.querySelectorAll('.filter-active').forEach(ele => {
        ele.click()
    })
}
document.title = info.name + ' - ' + info.title

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        init()
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }, 1000);
});

