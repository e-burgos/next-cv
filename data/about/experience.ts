export interface IExperienceItem {
  year: string;
  position: string;
  companyName: string;
  link: string;
  details: string;
  btn1?: string;
  btn2?: string;
}

export interface IExperience {
  title: string;
  subtitle: string;
  btnLabel: string;
  data: IExperienceItem[];
}

export const experienceEs: IExperience = {
  title: 'EXPERIENCIAS',
  subtitle: 'LABORALES',
  btnLabel: 'Ver más',
  data: [
    {
      year: '2025 • november 2025 - (actualidad)',
      position: 'Sr. Web3 Frontend Engineer',
      companyName: 'Obinex · Jornada parcial',
      link: 'https://www.linkedin.com/company/obinex',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Liderando y gestionando equipos de desarrollo frontend Web3. 
      • Experto en tecnologías como Wagmi, Ethers, RainbowKit, Typescript, React, Vite, ReactQuery, Nx, Tailwind CSS, Jira, Git, Github, Metodologías Ágiles, Figma. 
      • Responsable de la construcción y mantenimiento de microfrontends y arquitecturas frontend. 
      • Responsable de la coordinación de la resolución de incidentes, brindar orientación técnica, y asegurar la integración fluida de la interfaz de usuario en colaboración con otros equipos. 
      • Comprometido con la mejora continua y la optimización del rendimiento del frontend.`,
    },
    {
      year: '2024 • enero de 2024 - noviembre de 2025 (1 año 11 meses)',
      position: 'Frontend Developer web3',
      companyName: 'Membrane Labs · Jornada completa',
      link: 'https://www.linkedin.com/company/membranelabs/mycompany/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Desarrollo de interfaces frontend para servicios institucionales de activos digitales y transacciones OTC.
• Diseño e implementación de servicios de liquidación y sistemas de integraciones externas.
• Desarrollo de aplicaciones React con TypeScript utilizando arquitecturas modernas y escalables.
• Implementación de gestión de estado con MobX y manejo de datos con ReactQuery.
• Creación de componentes de interfaz utilizando Material-UI (MUI) siguiendo principios de diseño.
• Configuración y optimización de herramientas de build con Vite para desarrollo ágil.
• Colaboración en metodologías ágiles utilizando Jira para gestión de proyectos.
• Trabajo con equipos multidisciplinarios usando Git/GitHub y herramientas de diseño como Figma.`,
    },
    {
      year: '2024 • enero de 2024 - (actualidad)',
      position: 'Frontend Blockchain Developer',
      companyName: 'Rather Labs, Inc · Contrato',
      link: 'https://www.linkedin.com/company/ratherlabs/mycompany/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Crear interfaces intuitivas y atractivas. 
      • Conectar la interfaz con la blockchain.
      • Mostrar información clara de la blockchain.
      • Implementar sistemas seguros de autenticación.
      • Integrar soluciones de manejo de identidad descentralizadas.
      • Desarrollar gráficos y visualizaciones en tiempo real.
      • Mejorar la eficiencia y minimizar tiempos de carga.
      • Implementar medidas de seguridad para proteger la información.
      • Realizar pruebas exhaustivas y resolver problemas de integración.
      • Crear documentación clara y completa.
      • Realizar actualizaciones y mejoras constantes.`,
    },
    {
      year: '2023 • julio de 2023 - enero de 2024 · (6 meses)',
      position: 'Lead Frontend Engineer',
      companyName: 'Oversoft · Jornada completa',
      link: 'https://www.linkedin.com/company/oversoft-sa/mycompany/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Dirigir y supervisar a un equipo de desarrolladores frontend.
      • Establecer y promover las mejores prácticas de desarrollo frontend para garantizar la calidad y eficiencia del código producido.
      • Colaborar estrechamente con otros equipos y líderes técnicos para lograr una integración sin problemas entre el frontend y el backend.
      • Tomar decisiones técnicas clave y resolver problemas técnicos complejos para mantener el desarrollo fluido del proyecto.
      • Liderar la planificación y estimación de proyectos, asegurando el cumplimiento efectivo de los plazos y objetivos.
      • Realizar revisiones exhaustivas de código para garantizar la calidad y consistencia del trabajo realizado por el equipo.
      • Brindar orientación y apoyo continuo al equipo de desarrolladores frontend, fomentando su crecimiento y desarrollo profesional.
      • Siempre estar actualizado sobre las últimas tecnologías y tendencias en el desarrollo frontend, permitiendo la adopción de enfoques innovadores y eficientes.`,
    },
    {
      year: '2023 • mayo de 2023 - enero de 2024 · (8 meses)',
      position: 'Desarrollador de front-end',
      companyName: 'Startech Software Factory · Profesional independiente',
      link: 'https://www.linkedin.com/company/startech-software-factory/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Desarrollo de interfaces de usuario modernas y responsivas utilizando React.js, TypeScript y CSS.
• Implementación de componentes reutilizables y mantenibles siguiendo las mejores prácticas de desarrollo.
• Colaboración con equipos multidisciplinarios para crear soluciones personalizadas para startups y corporaciones.
• Optimización de rendimiento frontend y experiencia de usuario en aplicaciones web complejas.
• Integración con APIs RESTful y servicios backend para funcionalidades dinámicas.
• Participación en revisiones de código y mentorías técnicas para mantener estándares de calidad.`,
    },
    {
      year: '2022 • agosto de 2022 - enero de 2024 · (1 año 6 meses)',
      position: 'Front End Support Manager',
      companyName: 'Capstone',
      link: 'https://www.linkedin.com/company/capstoneside/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Liderazgo y gestión de equipos de desarrollo Frontend especializados en tecnologías React.
• Coordinación de resolución de incidencias técnicas y soporte a equipos de desarrollo.
• Implementación de mejores prácticas en HTML, CSS, JavaScript y frameworks modernos.
• Asegurar la integración fluida entre interfaces de usuario y sistemas backend.
• Optimización continua del rendimiento web y experiencia de usuario.
• Gestión de problemas técnicos complejos y implementación de nuevas tecnologías.
• Atención especializada a clientes en consultas técnicas y resolución de problemas.
• Mentorías técnicas y desarrollo profesional del equipo Frontend.`,
    },
    {
      year: '2022 • enero de 2022 - junio de 2023 · (1 año 6 meses)',
      position: 'React Software Engineer',
      companyName: 'Santander Tecnología Argentina · Jornada completa',
      link: 'https://www.linkedin.com/company/santandertec/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Desarrollo de aplicaciones React.js para el proyecto B2C más grande de la industria tecnológica en Argentina.
• Implementación de interfaces de usuario modernas para servicios financieros digitales.
• Aplicación de estándares web y mejores prácticas en desarrollo frontend con TypeScript.
• Desarrollo Full Stack utilizando Node.js, Express.js y bases de datos MySQL.
• Implementación de pruebas unitarias y aseguramiento de calidad del código.
• Configuración y optimización de Webpack para mejorar el rendimiento de aplicaciones.
• Definición de requisitos técnicos y colaboración en metodologías ágiles (Scrum).
• Trabajo en equipo multidisciplinario para transformar la industria financiera tradicional.`,
    },
    {
      year: '2021 • junio de 2021 - enero de 2022 · (8 meses)',
      position: 'Lead Engineer - Full Stack Developer',
      companyName: 'NTT DATA Europe & LATAM · Jornada completa',
      link: 'https://www.linkedin.com/company/ntt-data-europe-latam/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Liderazgo y gestión de equipos de desarrollo Full Stack en proyectos empresariales de gran escala.
• Desarrollo de aplicaciones web robustas utilizando React.js, TypeScript, JavaScript, HTML y CSS.
• Implementación de arquitecturas Full Stack con Node.js, Express.js y bases de datos MySQL.
• Desarrollo de aplicaciones móviles híbridas con React Native.
• Configuración y optimización de herramientas de build como Webpack para mejorar el rendimiento.
• Aplicación de metodologías ágiles (Scrum) para la gestión eficiente de proyectos.
• Gestión de control de versiones con Git y colaboración en equipos multidisciplinarios.
• Responsable de la mentoría técnica y el desarrollo profesional del equipo.`,
    },
    {
      year: '2021 • enero de 2020 - enero de 2022 · (2 años 1 mes)',
      position: 'Full Stack Developer',
      companyName: 'Upwork · Profesional independiente',
      link: 'https://www.linkedin.com/company/upwork/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
• Desarrollo de aplicaciones web robustas y seguras siguiendo las mejores prácticas actuales del sector.
• Experiencia Full Stack con tecnologías frontend (React.js, JavaScript, TypeScript, HTML, CSS) y backend (Node.js, Express.js).
• Implementación de APIs RESTful y integración con bases de datos (MongoDB, MySQL, Firebase).
• Desarrollo de aplicaciones móviles híbridas con React Native y diseño web responsivo.
• Experiencia con tecnologías complementarias: JWT, AWS, Bootstrap, Tailwind CSS, Sequelize.js, Mongoose, Ruby on Rails, WordPress.
• Despliegue y testing de aplicaciones en plataformas cloud (Heroku, Netlify, Vercel).
• Gestión de proyectos con herramientas de colaboración (Git, Trello, Slack, Discord, G-Suite).
• Desarrollo de soluciones blockchain y aplicaciones web3 con tecnologías emergentes.
• Enfoque en proyectos desafiantes que requieren aprendizaje continuo y resolución de problemas complejos.`,
    },
    {
      year: '2016 - 2021 • enero de 2016 - abril de 2021 · (5 años 4 meses)',
      position: 'Gerente general de sistemas',
      companyName: 'GME Alliance · Jornada completa',
      link: 'https://www.linkedin.com/company/gme-alliance/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      GME brinda la posibilidad de desempeñar un mix funcional dentro del área comercial & IT abocándome dentro de la compañía a diferentes roles:
      • Técnico Comercial: elaboramos estrategias comerciales con clientes del medio, logrando ajustar metas de adquisición de sitios, seguimiento de operaciones y documentación al día.
      • Negociaciones: generamos estrategias de negociación en el entorno gubernamental, buscando el interés de municipios y entidades del estado para la instalación de nuestras torres, incentivando la brecha digital existente y la necesidad de la comunidad en cuanto a la baja calidad del servicio.
      • Análisis Legal: junto al equipo legal nos aseguramos de que las ordenanzas de municipales de cada año cumplan con la posibilidad de instalación de nuestras torres, de no ser así, trabajamos en argumentos legales que lleguen a una negociación conjunta.
      • Operaciones: estoy encargado del desarrollo y manejo de software propio, con el mismo establecemos de forma automatizada las diferentes responsabilidades de cada uno de nuestros colaboradores, haciendo el seguimiento y el reporte de avances del proyecto mucho más llevadero.
      • Contenido digital: elaboraciones y difusión de medios sociales (web, redes, presentaciones, etc) brindando información de nuestras competencias a la comunidad y al entorno.`,
    },
    {
      year: '2016 - 2020 • marzo de 2016 - diciembre de 2020 (4 años 10 meses)',
      position: 'Product Owner',
      companyName: 'GME Alliance · Jornada parcial',
      link: 'https://www.linkedin.com/company/gme-alliance/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Elaboración y gestión del Product Backlog con definición de prioridades y requisitos del proyecto.
• Gestión de presupuesto y determinación de requisitos generales para actividades iniciales.
• Representación de usuarios del producto y aseguramiento de recursos financieros necesarios.
• Análisis de viabilidad del emprendimiento para garantizar la entrega exitosa del producto.
• Desarrollo y establecimiento de criterios de aceptación para historias de usuario.
• Aprobación y validación de entregables del producto según estándares de calidad establecidos.`,
    },
    {
      year: '2019 - 2020 • marzo de 2019 - marzo de 2020 (1 año 1 mes)',
      position: 'Gestor de proyecto y responsable de Scrum',
      companyName: 'Digital Boomeran · Jornada parcial',
      link: 'https://www.linkedin.com/company/digital-boomeran/?viewAsMember=true',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Asesoría y organización de equipos de trabajo aplicando metodologías ágiles Scrum.
• Eliminación de impedimentos para asegurar el cumplimiento de objetivos en tiempo y forma.
• Facilitación de presentaciones de sprints ante stakeholders y equipos directivos.
• Conducción de daily standups y ceremonias ágiles para mantener la comunicación del equipo.
• Administración y gestión del Product Backlog con priorización de funcionalidades.
• Coaching del equipo en prácticas ágiles y mejora continua de procesos.`,
    },
    {
      year: '2017 - 2019 • marzo de 2017 - marzo de 2019 (2 años 1 mes)',
      position: 'General Product Manager',
      companyName: 'Digital Boomeran · Jornada parcial',
      link: 'https://www.linkedin.com/company/digital-boomeran/?viewAsMember=true',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Identificación y análisis de oportunidades de negocio para el desarrollo de nuevos productos.
• Creación, evaluación y clasificación de ideas innovadoras para el portafolio de productos.
• Co-diseño de productos colaborando con equipos de desarrollo, UX/UI y marketing.
• Implementación de optimizaciones y mejoras continuas basadas en feedback de usuarios.
• Liderazgo de equipos multidisciplinarios para el desarrollo y lanzamiento de productos.
• Establecimiento de buenas prácticas para lanzamientos exitosos y gestión del ciclo de vida del producto.`,
    },
    {
      year: '2014 - 2016 • febrero de 2014 - enero de 2016 (2 años)',
      position: 'Gerente IT',
      companyName: 'NMS Towers · Jornada completa',
      link: '',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      • Gestión y supervisión del correcto funcionamiento de redes y sistemas de software corporativos.
• Establecimiento y mantenimiento de relaciones con clientes para negociaciones de infraestructura.
• Implementación continua de nuevas tecnologías en el campo de las telecomunicaciones.
• Desarrollo de sistemas cooperativos en tiempo real integrando todos los actores de la empresa.
• Liderazgo en la adopción de tecnologías web, aplicaciones móviles e Internet de las Cosas (IoT).
• Optimización de procesos IT para generar valor agregado y ventajas competitivas para los clientes.`,
    },
    {
      year: '2013 - 2014 • marzo de 2013 - enero de 2014 (11 meses)',
      position: 'Ingeniero de Cuentas',
      companyName: 'CodeLive · Jornada completa',
      link: '',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      CodeLive ofrece a sus clientes aplicaciones y soluciones seguras y personalizadas a sus necesidades para realizar su negocio en Internet. 
      Estas soluciones se diseñan de forma que se facilite la integración de las mismas con los otros sistemas de información que la empresa dispone para su gestión empresarial.`,
    },
    {
      year: '2013 • enero de 2013 - diciembre de 2013 (1 año)',
      position: 'IT Support',
      companyName: 'Universidad de San Pablo - Tucumán · Jornada completa',
      link: 'https://www.linkedin.com/company/universidad-de-san-pablo-tucuman/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      Mi trabajo se centra en la internetworking de la USPT y el soporte a los inconvenientes cotidianos que se presenten en la misma, resolviendo contingencias de configuración, mantenimiento y desarrollo de Infraestructura de red, servidores, equipos finales, etc.`,
    },
    {
      year: '2021 • ago. 2021 - actualidad',
      position: 'Desarrollador de Aplicaciones GIS',
      companyName: 'RIDES - Red de Información para el Desarrollo Productivo',
      link: 'http://rides.producciontucuman.gov.ar/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      Area Tecnología, Gobierno de la provincia, Argentina Desarrollo de aplicaciones en .NET, Silverlight, API ArcGis for Silverlight, ArcGis Viewer for Silverlight`,
    },
    {
      year: '2008 - 2012 • abril de 2008 - abril de 2012 (4 años 1 mes)',
      position: 'Socio fundador',
      companyName: 'Ingenieria Celular · Jornada completa',
      link: '',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      Diseño del sistema, administración general del negocio, compras, ventas, atención al cliente, reparaciones exclusiva de telefonía celular, asesoramiento técnico integral, software y hardware de equipos multimarca. Área Tecnología, en industria Telecomunicaciones, Argentina.`,
    },
    {
      year: '2006 - 2008 • abril de 2006 - marzo de 2008 (2 años)',
      position: 'Administrador del sistema informático',
      companyName: 'Juarez Frenos y Embragues S.H. · Jornada completa',
      link: 'https://www.facebook.com/todosporttucuman/videos/juarez-frenos-y-embragues/152553996101977/',
      btn1: 'Ver más',
      btn2: 'Ver menos',
      details: `
      Mantenimiento de equipos, diseño y mantenimiento de red lan interna, manejo de inventario y compras, administración de cuentas corrientes. área Administración, en industria Automotriz, Argentina`,
    },
  ],
};

export const experienceEn: IExperience = {
  title: 'EXPERIENCE',
  subtitle: 'WORK',
  btnLabel: 'See more',
  data: [
    {
      year: '2025 • november 2025 - (current)',
      position: 'Sr. Web3 Frontend Engineer',
      companyName: 'Obinex · Part time',
      link: 'https://www.linkedin.com/company/obinex',
      btn1: 'See more',
      btn2: 'See less',
      details: `
      • Leading and managing Web3 frontend development teams. 
      • Expert in technologies such as Wagmi, Ethers, RainbowKit, Typescript, React, Vite, ReactQuery, Nx, Tailwind CSS, Jira, Git, Github, Agile Methodologies, Figma. 
      • Responsible for building and maintaining microfrontends and frontend architectures. 
      • Responsible for coordinating incident resolution, providing technical guidance, and ensuring smooth integration of the user interface in collaboration with other teams. 
      • Committed to continuous improvement and optimizing frontend performance.`,
    },
    {
      year: '2024 • january 2024 - november 2025 (1 year 11 months)',
      position: 'Sr. Frontend Developer web3',
      companyName: 'Membrane Labs · Full time',
      link: 'https://www.linkedin.com/company/membranelabs/mycompany/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Development of frontend interfaces for institutional digital asset services and OTC transactions.
• Design and implementation of settlement services and external integration systems.
• Development of React applications with TypeScript using modern and scalable architectures.
• Implementation of state management with MobX and data handling with ReactQuery.
• Creation of interface components using Material-UI (MUI) following design principles.
• Configuration and optimization of build tools with Vite for agile development.
• Collaboration in agile methodologies using Jira for project management.
• Work with multidisciplinary teams using Git/GitHub and design tools like Figma.`,
    },
    {
      year: '2024 • january 2024 - (current)',
      position: 'Frontend Blockchain Developer',
      companyName: 'Rather Labs, Inc · Contract',
      link: 'https://www.linkedin.com/company/ratherlabs/mycompany/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
      • Create intuitive and attractive interfaces.
      • Connect the interface with the blockchain.
      • Display clear information from the blockchain.
      • Implement secure authentication systems.
      • Integrate decentralized identity management solutions.
      • Develop real-time graphics and visualizations.
      • Improve efficiency and minimize loading times.
      • Implement security measures to protect information.
      • Perform thorough testing and resolve integration issues.
      • Create clear and comprehensive documentation.
      • Make constant updates and improvements.`,
    },
    {
      year: '2023 • july 2023 - january 2024 · (6 months)',
      position: 'Lead Frontend Engineer',
      companyName: 'Oversoft · Full time',
      link: 'https://www.linkedin.com/company/oversoft-sa/mycompany/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
      • Lead and supervise a team of frontend developers.
      • Establish and promote best frontend development practices to ensure the quality and efficiency of the code produced.
      • Collaborate closely with other teams and technical leaders to achieve seamless integration between frontend and backend.
      • Make key technical decisions and solve complex technical problems to maintain the smooth development of the project.
      • Lead project planning and estimation, ensuring effective compliance with deadlines and objectives.
      • Perform thorough code reviews to ensure the quality and consistency of the work performed by the team.
      • Provide ongoing guidance and support to the frontend developer team, fostering their growth and professional development.
      • Always be up to date on the latest technologies and trends in frontend development, allowing the adoption of innovative and efficient approaches.`,
    },
    {
      year: '2023 • may 2023 - january 2024 · (8 months)',
      position: 'Front End Developer',
      companyName: 'Startech Software Factory · Freelance',
      link: 'https://www.linkedin.com/company/startech-software-factory/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Development of modern and responsive user interfaces using React.js, TypeScript, and CSS.
• Implementation of reusable and maintainable components following development best practices.
• Collaboration with multidisciplinary teams to create customized solutions for startups and corporations.
• Frontend performance optimization and user experience in complex web applications.
• Integration with RESTful APIs and backend services for dynamic functionalities.
• Participation in code reviews and technical mentoring to maintain quality standards.`,
    },
    {
      year: '2022 • august 2022 - january 2024 · (1 year 6 months)',
      position: 'Front End Support Manager',
      companyName: 'Capstone',
      link: 'https://www.linkedin.com/company/capstoneside/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Leadership and management of Frontend development teams specialized in React technologies.
• Coordination of technical incident resolution and support for development teams.
• Implementation of best practices in HTML, CSS, JavaScript, and modern frameworks.
• Ensuring smooth integration between user interfaces and backend systems.
• Continuous optimization of web performance and user experience.
• Management of complex technical problems and implementation of new technologies.
• Specialized customer service for technical inquiries and problem resolution.
• Technical mentoring and professional development of Frontend team members.`,
    },
    {
      year: '2022 • january 2022 - june 2023 · (1 year 6 months)',
      position: 'React Software Engineer',
      companyName: 'Santander Tecnología Argentina · Full time',
      link: 'https://www.linkedin.com/company/santandertec/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Development of React.js applications for the largest B2C project in Argentina's technology industry.
• Implementation of modern user interfaces for digital financial services.
• Application of web standards and best practices in frontend development with TypeScript.
• Full Stack development using Node.js, Express.js, and MySQL databases.
• Implementation of unit testing and code quality assurance.
• Configuration and optimization of Webpack to improve application performance.
• Technical requirements definition and collaboration in agile methodologies (Scrum).
• Multidisciplinary teamwork to transform the traditional financial industry.`,
    },
    {
      year: '2021 • june 2021 - january 2022 · (8 months)',
      position: 'Lead Engineer - Full Stack Developer',
      companyName: 'NTT DATA Europe & LATAM · Full time',
      link: 'https://www.linkedin.com/company/ntt-data-europe-latam/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Leadership and management of Full Stack development teams in large-scale enterprise projects.
• Development of robust web applications using React.js, TypeScript, JavaScript, HTML, and CSS.
• Implementation of Full Stack architectures with Node.js, Express.js, and MySQL databases.
• Development of hybrid mobile applications with React Native.
• Configuration and optimization of build tools like Webpack to improve performance.
• Application of agile methodologies (Scrum) for efficient project management.
• Version control management with Git and collaboration in multidisciplinary teams.
• Responsible for technical mentoring and professional development of the team.`,
    },
    {
      year: '2021 • january 2020 - january 2022 · (2 years 1 month)',
      position: 'Full Stack Developer',
      companyName: 'Upwork · Freelance',
      link: 'https://www.linkedin.com/company/upwork/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Development of robust and secure web applications following current industry best practices.
• Full Stack experience with frontend technologies (React.js, JavaScript, TypeScript, HTML, CSS) and backend (Node.js, Express.js).
• Implementation of RESTful APIs and integration with databases (MongoDB, MySQL, Firebase).
• Development of hybrid mobile applications with React Native and responsive web design.
• Experience with complementary technologies: JWT, AWS, Bootstrap, Tailwind CSS, Sequelize.js, Mongoose, Ruby on Rails, WordPress.
• Deployment and testing of applications on cloud platforms (Heroku, Netlify, Vercel).
• Project management with collaboration tools (Git, Trello, Slack, Discord, G-Suite).
• Development of blockchain solutions and web3 applications with emerging technologies.
• Focus on challenging projects requiring continuous learning and complex problem solving.`,
    },
    {
      year: '2016 - 2021 • january 2016 - april 2021 · (5 years 4 months)',
      position: 'General Manager of Systems',
      companyName: 'GME Alliance · Full time',
      link: 'https://www.linkedin.com/company/gme-alliance/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Commercial Technician: Development of commercial strategies with medium-sized clients, achieving site acquisition goals and operational follow-up.
• Negotiations: Generation of negotiation strategies in governmental environments with municipalities and state entities for tower installations.
• Legal Analysis: Collaboration with legal teams to ensure municipal ordinances comply with tower installation requirements.
• Operations: Development and management of proprietary software for automated responsibility assignment and project progress tracking.
• Digital Content: Creation and dissemination of social media content (web, networks, presentations) to inform the community about company capabilities.
• Strategic Planning: Coordination of multifunctional roles within commercial and IT areas to optimize business operations.`,
    },
    {
      year: '2016 - 2020 • march 2016 - december 2020 (4 years 10 months)',
      position: 'Product Owner',
      companyName: 'GME Alliance · Part time',
      link: 'https://www.linkedin.com/company/gme-alliance/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Elaboration and management of Product Backlog with priority definition and project requirements.
• Budget management and determination of general requirements for initial project activities.
• Product user representation and ensuring necessary financial resources for project development.
• Viability analysis of entrepreneurship initiatives to guarantee successful product delivery.
• Development and establishment of acceptance criteria for user stories.
• Product deliverable approval and validation according to established quality standards.`,
    },
    {
      year: '2019 - 2020 • march 2019 - march 2020 (1 year 1 month)',
      position: 'Project Manager and Scrum Master',
      companyName: 'Digital Boomeran · Part time',
      link: 'https://www.linkedin.com/company/digital-boomeran/?viewAsMember=true',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Advisory and organization of work teams applying Scrum agile methodologies.
• Elimination of impediments to ensure objective compliance within established timeframes.
• Facilitation of sprint presentations before stakeholders and executive teams.
• Conducting daily standups and agile ceremonies to maintain team communication.
• Administration and management of Product Backlog with functionality prioritization.
• Team coaching in agile practices and continuous process improvement.`,
    },
    {
      year: '2017 - 2019 • march 2017 - march 2019 (2 years 1 month)',
      position: 'General Product Manager',
      companyName: 'Digital Boomeran · Part time',
      link: 'https://www.linkedin.com/company/digital-boomeran/?viewAsMember=true',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Identification and analysis of business opportunities for new product development.
• Creation, evaluation, and classification of innovative ideas for the product portfolio.
• Product co-design collaborating with development, UX/UI, and marketing teams.
• Implementation of continuous optimizations and improvements based on user feedback.
• Leadership of multidisciplinary teams for product development and launch.
• Establishment of best practices for successful launches and product lifecycle management.`,
    },
    {
      year: '2014 - 2016 • february 2014 - january 2016 (2 years)',
      position: 'IT Manager',
      companyName: 'NMS Towers · Full time',
      link: '',
      btn1: 'See more',
      btn2: 'See less',
      details: `
• Management and supervision of proper functioning of corporate networks and software systems.
• Establishment and maintenance of client relationships for infrastructure negotiations.
• Continuous implementation of new technologies in the telecommunications field.
• Development of real-time cooperative systems integrating all company stakeholders.
• Leadership in the adoption of web technologies, mobile applications, and Internet of Things (IoT).
• IT process optimization to generate added value and competitive advantages for clients.`,
    },
    {
      year: '2013 - 2014 • march 2013 - january 2014 (11 months)',
      position: 'Account Engineer',
      companyName: 'CodeLive · Full time',
      link: '',
      btn1: 'See more',
      btn2: 'See less',
      details: `
      CodeLive offers its customers secure applications and
      customized to your needs to do your business on the Internet. These
      solutions are designed so that the integration of the same
      with the other information systems that the company has for its management
      business.`,
    },
    {
      year: '2013 • january 2013 - december 2013 (1 year)',
      position: 'IT Support',
      companyName: 'Universidad de San Pablo - Tucumán · Full time',
      link: 'https://www.linkedin.com/company/universidad-de-san-pablo-tucuman/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
      My work focuses on the internetworking of the USPT and the support to the
      daily inconveniences that arise in it, solving
      configuration contingencies, maintenance and development of Infrastructure
      network, servers, final equipment, etc.`,
    },
    {
      year: '2021 • aug. 2021 - current',
      position: 'GIS Application Developer',
      companyName: 'RIDES - Red de Información para el Desarrollo Productivo',
      link: 'http://rides.producciontucuman.gov.ar/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
      Technology Area, Government of the province, Argentina
        Application development in .NET, Silverlight, API ArcGis for Silverlight,
        ArcGis Viewer for Silverlight`,
    },
    {
      year: '2008 - 2012 • april 2008 - april 2012 (4 years 1 month)',
      position: 'Founding partner',
      companyName: 'Ingenieria Celular · Full time',
      link: '',
      btn1: 'See more',
      btn2: 'See less',
      details: `
      System design, general business administration, purchases, sales,
      customer service, exclusive repairs of cell phones, advice
      comprehensive technique, software and hardware of multi-brand equipment.
      Technology Area, in Telecommunications industry, Argentina.`,
    },
    {
      year: '2006 - 2008 • april 2006 - march 2008 (2 years)',
      position: 'Administrator of the computer system',
      companyName: 'Juarez Frenos y Embragues S.H. · Full time',
      link: 'https://www.facebook.com/todosporttucuman/videos/juarez-frenos-y-embragues/152553996101977/',
      btn1: 'See more',
      btn2: 'See less',
      details: `
      Equipment maintenance, design and maintenance
      internal lan network, inventory management and purchases, administration of
      current accounts.
      Administration area, in Automotive industry, Argentina`,
    },
  ],
};
