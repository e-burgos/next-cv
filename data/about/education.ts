export interface IEducationItem {
  year: string;
  degree: string;
  institute: string;
  infoLabel?: string;
  certificateLabel?: string;
  infoLink?: string;
  certificateLink?: string;
  details: string;
  btn1?: string;
  btn2?: string;
}

export interface IEducation {
  title: string;
  subtitle: string;
  btnLabel: string;
  data: IEducationItem[];
}

export const educationEs: IEducation = {
  title: 'EDUCACIÓN',
  subtitle: 'ACADÉMICA',
  btnLabel: 'Download CV',
  data: [
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2004-02-24').toLocaleDateString()} • ${new Date(
        '2011-12-17'
      ).toLocaleDateString()}`,
      degree: 'INGENIERO EN SISTEMAS DE INFORMACIÓN',
      institute: 'UNIVERSIDAD TECNOLÓGICA NACIONAL',
      infoLabel: 'Información del Curso',
      infoLink:
        'https://www.linkedin.com/school/universidad-tecnologica-nacional/',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://drive.google.com/file/d/1NMNQmy123M7_TSm3h8rZRTiucOXS0Knr/view',
      details: `
      • Título Universitario
      • Promedio 8
      • Especialización en Desarrollo de Software, Redes y Seguridad Informática.
      `,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2022-01-13').toLocaleDateString()} • ${new Date(
        '2021-08-20'
      ).toLocaleDateString()}`,
      degree: 'CONVIÉRTETE EN DESARROLLADOR BLOCKCHAIN CON ETHEREUM',
      institute: 'UDEMY',
      infoLabel: 'Información del Curso',
      infoLink:
        'https://www.udemy.com/course/bootcamp-blockchain-cero-experto/?couponCode=GENAISALE24',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://www.udemy.com/certificate/UC-8b99ba60-0e7d-4071-ad4d-eb2f67bff0df/',
      details: `Adquirirás destreza con las herramientas JavaScript mas importantes del ecosistema Ethereum como web3, solc, truffle, ganache, hdwallet, metamask, infura, etc. Desplegarás Smart Contracts en la red pública de Ethereum para que sean accesibles por todos los usuarios.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2022-01-17').toLocaleDateString()} • ${new Date(
        '2021-08-25'
      ).toLocaleDateString()}`,
      degree: 'TYPESCRIPT: TU COMPLETA GUÍA Y MANUAL DE MANO',
      institute: 'UDEMY',
      infoLabel: 'Información del Curso',
      infoLink: 'https://www.udemy.com/course/typescript-guia-completa/',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://www.udemy.com/certificate/UC-13e46e4f-b50d-43cf-a974-7cd800fd19b4/',
      details: `Tener una base sólida de TypeScript. Tener la confianza de saber usar TypeScript en tus proyectos web. Saber utilizar TypeScript para mejorar la manera de programar en la web. Tener el conocimiento para utilizar importadores de módulos. Crear programas con una única importación de un sólo archivo de JavaScript. No cometer errores en jQuery, utilizando TypeScript.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2021-07-19').toLocaleDateString()} • ${new Date(
        '2021-08-30'
      ).toLocaleDateString()}`,
      degree: 'ARQUITECTURA AVANZADA EN NODE JS',
      institute: 'EDUCACION IT',
      infoLabel: 'Información del Curso',
      infoLink: 'https://www.educacionit.com/curso-de-nodejs-arquitectura',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://api.educacionit.com/pdf/certificados/Esteban-Edgardo-Burgos-662402/50442',
      details: `Aprende las mejores técnicas para diseñar aplicaciones complejas en Node.JS. Domina los procesos para manejar grandes volúmenes de datos y escalar con AWS.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2021-05-16').toLocaleDateString()} • ${new Date(
        '2021-05-26'
      ).toLocaleDateString()}`,
      degree: 'JAVASCRIPT AVANZADO: BUENAS PRÁCTICAS',
      institute: 'LINKEDIN',
      infoLabel: 'Información del Curso',
      infoLink:
        'https://www.linkedin.com/learning/javascript-avanzado-buenas-practicas',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/b748079fb731af8bd1ba7d8b5fc6b29c46922516ffe8c32489652dce6bf4ec3b?trk=share_certificate',
      details: `Las buenas prácticas son un conjunto de recomendaciones basadas en las rutinas de otros desarrolladores y gracias a ellas, tu trabajo será más comprensible, mejor organizado y tendrá un mejor rendimiento. En este curso conocerás las buenas prácticas más populares y eficaces, que harán que tu trabajo como desarrollador usando JavaScript mejore y sea más práctico al trabajar en una nueva aplicación web. Estas buenas prácticas se convertirán en el set de acciones que incorporarás en cada proyecto web y que ayudarán a que tu código sea mejor.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2021-05-02').toLocaleDateString()} • ${new Date(
        '2021-05-25'
      ).toLocaleDateString()}`,
      degree: 'JAVASCRIPT ESENCIAL',
      institute: 'LINKEDIN',
      infoLabel: 'Información del Curso',
      infoLink: 'https://www.linkedin.com/learning/javascript-esencial',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/d7be08d429a23dcddd1b3ca89b61aadf3fa4ee89179b7e86a9bee3c1a034fba6?trk=share_certificate',
      details: `Conoce JavaScript, sus clases y elementos, desde sus conceptos más básicos hasta las herramientas más avanzadas. Este curso esencial de JavaScript, el lenguaje que rige la web, considera la nueva especificación del lenguaje ES6 y te enseña desde los fundamentos hasta un nivel intermedio, de un lenguaje utilizado en distintas áreas, como web, aplicaciones móviles y aplicaciones escritorio. Esto hace de JavaScript uno de los lenguajes más estudiados y demandados.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2021-05-29').toLocaleDateString()} • En curso`,
      degree: 'DESARROLLADOR REACT NATIVE',
      institute: 'UDEMY',
      infoLabel: 'Información del Curso',
      infoLink:
        'https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/?couponCode=GENAISALE24',
      details: `Curso orientado a la creación de Apps para Android y iOS. Se promueve el uso de Frameworks UI para React Native como NativeBase y React Paper. Herramientas y temáticas del curso: GraphQL, Apollo Server con React, React Navigation v5, Firebase con React Native, Estilos a tus Apps y los diferentes componentes de React Native Consumir API's y mostrar sus resultados en React Native, Temas Intermedios de React Native como API's Storage Frameworks UI, Temas Avanzados de React como Apollo, MongoDB, Autenticación y más.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2020-12-30').toLocaleDateString()} • ${new Date(
        '2021-05-30'
      ).toLocaleDateString()}`,
      degree: 'DESARROLLADOR REACT FULL STACK',
      institute: 'UDEMY',
      infoLabel: 'Información del Curso',
      infoLink:
        'https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://www.udemy.com/certificate/UC-297d2ab0-8dfc-4932-a02e-397f74163e9a/',
      details: `Completo curso desde las bases de React hasta las conceptos más avanzados de esta librería. El curso abarca temáticas como React Hooks, Gatsby, GraphQL, Firestore, Redux, Context, MERN, Next.js, Styled Components, Testing Cypress, entre otras.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2020-12-30').toLocaleDateString()} • ${new Date(
        '2021-05-30'
      ).toLocaleDateString()}`,
      degree: 'CONCEPTOS BÁSICOS DE RUBY & RUBY ON RAILS',
      institute: 'UDEMY',
      infoLabel: 'Información del Curso',
      infoLink: 'https://www.udemy.com/course/ruby-y-ruby-on-rails',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://www.udemy.com/certificate/UC-ece46f07-868b-42a1-bdfe-c3359204051e/',
      details: `Aprendizaje: Entender y programar aplicaciones en lenguaje Ruby, desarrollar proyectos web con el framework Ruby on Rails, diseño de aplicaciones MVC.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `${new Date('2020-09-28').toLocaleDateString()} • ${new Date(
        '2021-04-28'
      ).toLocaleDateString()}`,
      degree: 'DESARROLLADOR WEB FULL STACK',
      institute: 'DIGITAL HOUSE',
      infoLabel: 'Información del Curso',
      infoLink:
        'https://www.digitalhouse.com/ar/productos/programcion/programacion-web-full-stack',
      certificateLabel: 'Certificación',
      certificateLink:
        'https://drive.google.com/file/d/1kt4RuhKY6HWJexJIEY4xhemuft7s5vAS/view',
      details: `Fundamentos de la programación orientada a objetos y principios de desarrollo web Git, IDE y consola de texto. Sistemas escalables con arquitectura Cliente/Servidor, Manejador de dependencias NPM y Event Loop. Lenguajes más utilizados: HTML, CSS, JavaScript, NodeJS. Frameworks: Express.js, Librerías: React.js`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `2011`,
      degree: 'Curso de Posgrado en Telecomunicaciones'.toLocaleUpperCase(),
      institute: 'UNIVERSIDAD TECNOLÓGICA NACIONAL',
      infoLabel: 'Información del Curso',
      infoLink: 'https://frt.cvg.utn.edu.ar/course/index.php?categoryid=36',
      details: `El proposito del Curso es incentivar la capacidad de resolver problemas en el área de Telecomunicaciones de: diseño, planificación y asesoramientos, capacidad de adaptación a las nuevas tecnologías, generando la capacidad de poder realizar cambios en las mismas.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `2012`,
      degree:
        'Curso de Posgrado en Arquitectura de Redes de Telecomunicaciones Avanzadas'.toLocaleUpperCase(),
      institute: 'UNIVERSIDAD TECNOLÓGICA NACIONAL',
      infoLabel: 'Información del Curso',
      infoLink: 'https://frt.cvg.utn.edu.ar/course/index.php?categoryid=36',
      details: `El Curso de Posgrado desarrolla conocimientos tecnológicos completando e integrando la formación del grado en áreas como ser: el análisis de arquitecturas de redes de alta complejidad, protocolos de redes de nueva generación y nuevas tecnologías IP, facilitando la comprensión de problemáticas en redes de telecomunicaciones de todo tipo, cubriendo aspectos de planificación, proyecto y gestión.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `2012`,
      degree: 'ADMINISTRADOR DE BASE DE DATOS ORACLE 10g I: FUNDAMENTOS DE SQL',
      institute: 'UNIVERSIDAD TECNOLÓGICA NACIONAL - PROYDESA',
      infoLabel: 'Información del Curso',
      infoLink:
        'https://learn.oracle.com/pls/web_prod-plq-dad/view_pdf?c_org_id=51&c_lang=E&c_id=D17218CS30',
      details: `Obtendrá los conocimientos fundamentales de SQL y PL/SQL mediante SQL Developer en Linux. Este curso ofrece a los estudiantes una introducción a la tecnología de la base de datos Oracle Database 10g. En esta clase, los estudiantes aprenden los conceptos relativos a las bases de datos relacionales y el potente lenguaje de programación SQL. 
      Este curso proporciona los conocimientos de SQL esenciales que permiten a los desarrolladores escribir consultas en una o varias tablas, manipular los datos de las tablas, crear objetos de base de datos y realizar consultas de metadatos.
      Además, el curso ofrece una introducción a PL/SQL y ayuda a que los estudiantes comprendan las ventajas de este potente lenguaje de programación. En la clase, los estudiantes aprenderán a crear bloques PL/SQL de código de aplicación que se pueden compartir en varias pantallas, informes y aplicaciones de gestión de datos. 
      Los estudiantes aprenderán a crear bloques PL/SQL anónimos y se les presentarán las funciones y los procedimientos almacenados. 
      Aprenderán a declarar variables y detectar excepciones, así como a declarar y controlar cursores. Este curso es una combinación de los cursos Oracle Database 10g: Conceptos Fundamentales de SQL I y Oracle Database 10g: Conceptos Fundamentales de PL/SQL.`,
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `2013`,
      degree:
        'ADMINISTRADOR DE BASE DE DATOS ORACLE 10g II: ADMINISTRATION WORKSHOP II',
      institute: 'UNIVERSIDAD TECNOLÓGICA NACIONAL - PROYDESA',
      infoLabel: 'Información del Curso',
      infoLink:
        'https://www.proydesa.org/portal/index.php?option=com_content&view=article&id=75&Itemid=68',
      details:
        'DATA MODELING/WAREHOUSING AND DATABASE ADMINISTRATION. Los egresados de este módulo están en condiciones de desempeñarse en diferentes puestos que requieran las habilidades básicas para crear, mantener e instalar una Base de Datos Oracle 10g. La capacitación está indicada para perfiles de Consultores de Ventas, Ingenieros de Soporte, Project Managers, Diseñadores y Administradores de Bases de Datos y Consultores Técnicos.',
    },
    {
      btn1: 'Ver más',
      btn2: 'Ver menos',
      year: `2013`,
      degree:
        'CCNA1: EXPLORATION - COMPUTER SYSTEMS NETWORKING AND TELECOMMUNICATIONS',
      institute: 'UNIVERSIDAD TECNOLÓGICA NACIONAL - PROYDESA',
      infoLabel: 'Información del Curso',
      infoLink: 'https://www.proydesa.org/portal/index.php/carreras/redes',
      details: `Las tecnologías de la información y de la comunicación (TICs) son la usina de la sociedad del conocimiento.
      En este contexto, las redes informáticas son determinantes para romper el aislamiento tecnológico, permitiendo el intercambio de información en todo el planeta.
      Con independencia de su tamaño o del sector productivo al que pertenezcan, las organizaciones adoptan las ventajas que las redes de datos —combinadas con el uso de Internet— brindan para la gestión eficiente de la información y las comunicaciones. 
      Las carreras de redes de la Red Proydesa brindan las competencias necesarias para diseñar, implementar, administrar y segurizar distintas tipologías de redes cableadas e inalámbricas (wireless).`,
    },
  ],
};

export const educationEn: IEducation = {
  title: 'EDUCATION',
  subtitle: 'ACADEMIC',
  btnLabel: 'Download CV',
  data: [
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2004-02-24').toLocaleDateString()} • ${new Date(
        '2011-12-17'
      ).toLocaleDateString()}`,
      degree: 'INFORMATION SYSTEMS ENGINEER',
      institute: 'NATIONAL TECHNOLOGICAL UNIVERSITY',
      infoLabel: 'Course Information',
      infoLink:
        'https://www.linkedin.com/school/universidad-tecnologica-nacional/',
      certificateLabel: 'Certification',
      certificateLink:
        'https://drive.google.com/file/d/1NMNQmy123M7_TSm3h8rZRTiucOXS0Knr/view',
      details: `University Degree • Average 8 • Specialization in Software Development, Networks and Information Security.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2022-01-13').toLocaleDateString()} • ${new Date(
        '2021-08-20'
      ).toLocaleDateString()}`,
      degree: 'BECOME A BLOCKCHAIN DEVELOPER WITH ETHEREUM',
      institute: 'UDEMY',
      infoLabel: 'Course Information',
      infoLink:
        'https://www.udemy.com/course/bootcamp-blockchain-cero-experto/?couponCode=GENAISALE24',
      certificateLabel: 'Certification',
      certificateLink:
        'https://www.udemy.com/certificate/UC-8b99ba60-0e7d-4071-ad4d-eb2f67bff0df/',
      details: `You will acquire skill with the most important JavaScript tools in the Ethereum ecosystem such as web3, solc, truffle, ganache, hdwallet, metamask, infura, etc. You will deploy Smart Contracts on the public Ethereum network so that they are accessible to all users.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2022-01-17').toLocaleDateString()} • ${new Date(
        '2021-08-25'
      ).toLocaleDateString()}`,
      degree: 'TYPESCRIPT: YOUR COMPLETE GUIDE AND HAND MANUAL',
      institute: 'UDEMY',
      infoLabel: 'Course Information',
      infoLink: 'https://www.udemy.com/course/typescript-guia-completa/',
      certificateLabel: 'Certification',
      certificateLink:
        'https://www.udemy.com/certificate/UC-13e46e4f-b50d-43cf-a974-7cd800fd19b4/',
      details: `Have a solid foundation of TypeScript. Have the confidence to know how to use TypeScript in your web projects. Know how to use TypeScript to improve the way you program on the web. Have the knowledge to use module importers. Create programs with a single import of a single JavaScript file. Do not make mistakes in jQuery, using TypeScript.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2021-07-19').toLocaleDateString()} • ${new Date(
        '2021-08-30'
      ).toLocaleDateString()}`,
      degree: 'ADVANCED ARCHITECTURE IN NODE JS',
      institute: 'EDUCACION IT',
      infoLabel: 'Course Information',
      infoLink: 'https://www.educacionit.com/curso-de-nodejs-arquitectura',
      certificateLabel: 'Certification',
      certificateLink:
        'https://api.educacionit.com/pdf/certificados/Esteban-Edgardo-Burgos-662402/50442',
      details: `Learn the best techniques to design complex applications in Node.JS. Master the processes to handle large volumes of data and scale with AWS.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2021-05-16').toLocaleDateString()} • ${new Date(
        '2021-05-26'
      ).toLocaleDateString()}`,
      degree: 'ADVANCED JAVASCRIPT: GOOD PRACTICES',
      institute: 'LINKEDIN',
      infoLabel: 'Course Information',
      infoLink:
        'https://www.linkedin.com/learning/javascript-avanzado-buenas-practicas',
      certificateLabel: 'Certification',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/b748079fb731af8bd1ba7d8b5fc6b29c46922516ffe8c32489652dce6bf4ec3b?trk=share_certificate',
      details: `Good practices are a set of recommendations based on the routines of other developers and thanks to them, your work will be more understandable, better organized and will have better performance. In this course you will learn the most popular and effective good practices, which will make your work as a developer using JavaScript better and more practical when working on a new web application. These good practices will become the set of actions that you will incorporate into each web project and that will help your code be better.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2021-05-02').toLocaleDateString()} • ${new Date(
        '2021-05-25'
      ).toLocaleDateString()}`,
      degree: 'ESSENTIAL JAVASCRIPT',
      institute: 'LINKEDIN',
      infoLabel: '  Course Information',
      infoLink: 'https://www.linkedin.com/learning/javascript-esencial',
      certificateLabel: 'Certification',
      certificateLink:
        'https://www.linkedin.com/learning/certificates/d7be08d429a23dcddd1b3ca89b61aadf3fa4ee89179b7e86a9bee3c1a034fba6?trk=share_certificate',
      details: `Know JavaScript, its classes and elements, from its most basic concepts to the most advanced tools. This essential JavaScript course, the language that governs the web, considers the new ES6 language specification and teaches you from the basics to an intermediate level, of a language used in different areas, such as web, mobile applications and desktop applications. This makes JavaScript one of the most studied and demanded languages.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2021-05-29').toLocaleDateString()} • In progress`,
      degree: 'REACT NATIVE DEVELOPER',
      institute: 'UDEMY',
      infoLabel: 'Course Information',
      infoLink:
        'https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/?couponCode=GENAISALE24',
      details: `Course oriented to the creation of Apps for Android and iOS. The use of UI Frameworks for React Native such as NativeBase and React Paper is promoted. Tools and course topics: GraphQL, Apollo Server with React, React Navigation v5, Firebase with React Native, Styles for your Apps and the different components of React Native Consuming API's and showing their results in React Native, Intermediate React Native Topics such as API's Storage UI Frameworks, Advanced React Topics such as Apollo, MongoDB, Authentication and more.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2020-12-30').toLocaleDateString()} • ${new Date(
        '2021-05-30'
      ).toLocaleDateString()}`,
      degree: 'FULL STACK REACT DEVELOPER',
      institute: 'UDEMY',
      infoLabel: 'Course Information',
      infoLink:
        'https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones',
      certificateLabel: 'Certification',
      certificateLink:
        'https://www.udemy.com/certificate/UC-297d2ab0-8dfc-4932-a02e-397f74163e9a/',
      details: `Complete course from the basics of React to the most advanced concepts of this library. The course covers topics such as React Hooks, Gatsby, GraphQL, Firestore, Redux, Context, MERN, Next.js, Styled Components, Testing Cypress, among others.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2020-12-30').toLocaleDateString()} • ${new Date(
        '2021-05-30'
      ).toLocaleDateString()}`,
      degree: 'BASIC CONCEPTS OF RUBY & RUBY ON RAILS',
      institute: 'UDEMY',
      infoLabel: 'Course Information',
      infoLink: 'https://www.udemy.com/course/ruby-y-ruby-on-rails',
      certificateLabel: 'Certification',
      certificateLink:
        'https://www.udemy.com/certificate/UC-ece46f07-868b-42a1-bdfe-c3359204051e/',
      details: `Learning: Understand and program applications in Ruby language, develop web projects with the Ruby on Rails framework, design MVC applications.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `${new Date('2020-09-28').toLocaleDateString()} • ${new Date(
        '2021-04-28'
      ).toLocaleDateString()}`,
      degree: 'FULL STACK WEB DEVELOPER',
      institute: 'DIGITAL HOUSE',
      infoLabel: 'Course Information',
      infoLink:
        'https://www.digitalhouse.com/ar/productos/programcion/programacion-web-full-stack',
      certificateLabel: 'Certification',
      certificateLink:
        'https://drive.google.com/file/d/1kt4RuhKY6HWJexJIEY4xhemuft7s5vAS/view',
      details: `Fundamentals of object-oriented programming and web development principles Git, IDE and text console. Scalable systems with Client/Server architecture, NPM dependency manager and Event Loop. Most used languages: HTML, CSS, JavaScript, NodeJS. Frameworks: Express.js, Libraries: React.js`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `2011`,
      degree: 'Postgraduate Course in Telecommunications'.toLocaleUpperCase(),
      institute: 'NATIONAL TECHNOLOGICAL UNIVERSITY',
      infoLabel: 'Course Information',
      infoLink: 'https://frt.cvg.utn.edu.ar/course/index.php?categoryid=36',
      details: `The purpose of the Course is to encourage the ability to solve problems in the area of Telecommunications: design, planning and advice, ability to adapt to new technologies, generating the ability to make changes in them.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `2012`,
      degree:
        'Postgraduate Course in Advanced Telecommunications Network Architecture'.toLocaleUpperCase(),
      institute: 'NATIONAL TECHNOLOGICAL UNIVERSITY',
      infoLabel: 'Course Information',
      infoLink: 'https://frt.cvg.utn.edu.ar/course/index.php?categoryid=36',
      details: `The Postgraduate Course develops technological knowledge by completing and integrating the training of the degree in areas such as: analysis of architectures of highly complex networks, new generation network protocols and new IP technologies, facilitating the understanding of problems in telecommunications networks of all kinds, covering aspects of planning, project and management.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `2012`,
      degree: 'ORACLE DATABASE ADMINISTRATOR 10g I: SQL FUNDAMENTALS',
      institute: 'NATIONAL TECHNOLOGICAL UNIVERSITY - PROYDESA',
      infoLabel: 'Course Information',
      infoLink:
        'https://learn.oracle.com/pls/web_prod-plq-dad/view_pdf?c_org_id=51&c_lang=E&c_id=D17218CS30',
      details: `You will obtain the fundamental knowledge of SQL and PL/SQL through SQL Developer in Linux. This course offers students an introduction to Oracle Database 10g technology. In this class, students learn concepts related to relational databases and the powerful SQL programming language. This course provides the essential SQL knowledge that allows developers to write queries in one or more tables, manipulate table data, create database objects, and perform metadata queries. In addition, the course offers an introduction to PL/SQL and helps students understand the advantages of this powerful programming
      language. In the class, students will learn to create PL/SQL application code blocks that can be shared across multiple screens, reports, and data management applications. Students will learn to create anonymous PL/SQL blocks and will be introduced to stored functions and procedures. They will learn to declare variables and detect exceptions, as well as declare and control cursors. This course is a combination of the Oracle Database 10g courses: SQL Fundamentals I and Oracle Database 10g: PL/SQL Fundamentals.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `2013`,
      degree:
        'ORACLE DATABASE ADMINISTRATOR 10g II: ADMINISTRATION WORKSHOP II',
      institute: 'NATIONAL TECHNOLOGICAL UNIVERSITY - PROYDESA',
      infoLabel: 'Course Information',
      infoLink:
        'https://www.proydesa.org/portal/index.php?option=com_content&view=article&id=75&Itemid=68',
      details: `DATA MODELING/WAREHOUSING AND DATABASE ADMINISTRATION. Graduates of this module are able to perform in different positions that require the basic skills to create, maintain and install an Oracle 10g Database. The training is indicated for Sales Consultants, Support Engineers, Project Managers, Designers and Database Administrators and Technical Consultants.`,
    },
    {
      btn1: 'See more',
      btn2: 'See less',
      year: `2013`,
      degree:
        'CCNA1: EXPLORATION - COMPUTER SYSTEMS NETWORKING AND TELECOMMUNICATIONS',
      institute: 'NATIONAL TECHNOLOGICAL UNIVERSITY - PROYDESA',
      infoLabel: 'Course Information',
      infoLink: 'https://www.proydesa.org/portal/index.php/carreras/redes',
      details: `Information and communication technologies (ICTs) are the powerhouse of the knowledge society. In this context, computer networks are decisive for breaking technological isolation, allowing the exchange of information worldwide. Regardless of their size or the productive sector to which they belong, organizations adopt the advantages that data networks—combined with the use of the Internet—provide for efficient information and communication management. The network careers of the Proydesa Network provide the necessary competencies to design, implement, administer and secure different types of wired and wireless networks (wireless).`,
    },
  ],
};
