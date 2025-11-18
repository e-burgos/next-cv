import MicrofrontImg from '@/public/assets/img/portfolio/microfront.png';
import CharmingImg from '@/public/assets/img/portfolio/charming.png';
import BanduTiendaImg from '@/public/assets/img/portfolio/bandu-tienda.png';
import BanduLandingImg from '@/public/assets/img/portfolio/bandu-landing.png';
import GmeImg from '@/public/assets/img/portfolio/gme.png';
import PinblackImg from '@/public/assets/img/portfolio/pinblack.png';
import MovistarImg from '@/public/assets/img/portfolio/mi-movistar.png';
import CryptoConversorWebImg from '@/public/assets/img/portfolio/cripto-conversor-web.png';
import DrinkIng from '@/public/assets/img/portfolio/drinks.png';
import MernTasks from '@/public/assets/img/portfolio/merntasks.png';
import NodeSend from '@/public/assets/img/portfolio/nodesend.png';
import CvGastby from '@/public/assets/img/portfolio/cv-gatsby.png';
import Animated from '@/public/assets/img/portfolio/animated.gif';
import WeatherApp from '@/public/assets/img/portfolio/weather-app.png';
import WeatherWeb from '@/public/assets/img/portfolio/weather-web.png';
import MascotasApp from '@/public/assets/img/portfolio/mascotas-app.jpeg';
import CryptoApp from '@/public/assets/img/portfolio/crypto-app.jpeg';
import Blocklit from '@/public/assets/img/portfolio/blocklit.png';
import GoGrow from '@/public/assets/img/portfolio/gogrow.png';
import Coolco from '@/public/assets/img/portfolio/coolco.png';
import SugarLanding from '@/public/assets/img/portfolio/sugar-landing.png';
import SugarGame from '@/public/assets/img/portfolio/sugar-game.png';
import SugarStaking from '@/public/assets/img/portfolio/sugar-staking.png';
import Quiz from '@/public/assets/img/portfolio/quiz.png';
import Quiz2 from '@/public/assets/img/portfolio/quiz2.png';
import MembraneLabs from '@/public/assets/img/portfolio/membrane.jpeg';
import Celesi from '@/public/assets/img/portfolio/celesi.png';
import CustomStorybook from '@/public/assets/img/portfolio/custom-storybook.png';
import OversoftStorybook from '@/public/assets/img/portfolio/oversoft-storybook.png';
import Santander from '@/public/assets/img/portfolio/santander.png';
import NxMf from '@/public/assets/img/portfolio/nx-mf.png';
import TokenManager from '@/public/assets/img/portfolio/defi-token.png';
import TucuUi from '@/public/assets/img/portfolio/tucu-ui.png';

import { StaticImageData } from 'next/image';

export type ITag =
  | 'Todos'
  | 'All'
  | 'Destacados'
  | 'Featured'
  | 'Microfrontends'
  | 'Nx'
  | 'React JS'
  | 'UI/UX'
  | 'Storybook'
  | 'React Native'
  | 'Wordpress'
  | 'E-commerce'
  | 'Landing Page'
  | 'WebApp'
  | 'Mobile App'
  | 'DApp'
  | 'Next JS'
  | 'Gatsby JS'
  | 'Node JS'
  | 'Web3/Blockchain'
  | 'GraphQL'
  | 'Mongo DB'
  | 'Vite JS'
  | 'MUI'
  | 'Categories'
  | 'Technologies'
  | 'Categorías'
  | 'Tecnologías'
  | 'Tailwind CSS';

export type IModalType = 'image' | 'youtube' | 'video' | 'slider';

export interface IPortfolio {
  title: string;
  title2?: string;
  subtitle: string;
  tabs?: ITag[];
  filterTabs?: ITag[];
  data: IPortfolioData[];
}

export interface IPortfolioData {
  id: number;
  type: string;
  image: StaticImageData;
  tag: ITag[];
  modalType?: IModalType;
  delayAnimation: string;
  videoLink?: string;
  sliderImages?: StaticImageData[];
  modalDetails: {
    project: string;
    client: string;
    language: string;
    preview: string;
    link: string;
    repoLink?: string;
    repoBackLink?: string;
    accessType?: 'public' | 'restricted';
    details?: string;
  }[];
}

export const PortfolioDataEs: IPortfolioData[] = [
  {
    id: 0,
    type: 'TUCU UI',
    image: TucuUi,
    tag: ['Destacados', 'Todos', 'Tailwind CSS', 'UI/UX', 'React JS'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Librería de Componentes',
        client: 'Proyecto Personal',
        language:
          'Typescript, Tailwind CSS, Nx, Vite JS, Headless UI, Swiper, React JS, React Router Dom, Zustand',
        preview: 'Tucu UI',
        link: 'https://tucu-ui.netlify.app/',
        repoLink: 'https://github.com/e-burgos/tucu-ui',
        accessType: 'public',
        details: `Moderna librería de componentes de UI/UX para React JS construida con TypeScript y Tailwind CSS v4. Cuenta con un sistema de temas avanzado con 31+ presets de color, arquitectura de color multi-capa y opciones de control granulares. Diseñada para desarrolladores que necesitan componentes listos para producción con capacidades de temas sofisticadas.`,
      },
    ],
  },
  {
    id: 1,
    type: 'Microfrontends con React Query',
    image: MicrofrontImg,
    tag: ['Todos', 'Microfrontends', 'React JS', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack Website',
        client: 'POC',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, Tailwind CSS, React Query, Webpack 5, Module Federation Plugin',
        preview: 'Demo',
        link: 'https://react-query-mf.vercel.app/',
        repoLink: 'https://github.com/e-burgos/react-query-mf',
        accessType: 'public',
        details: `Les presento un proyecto reutilizable haciendo uso de Tailwind CSS y react query para el manejo de contextos y peticiones. Para este ejemplo haré uso varias herramientas que nos permitirán establecer diferentes aplicaciones autónomas que se comporten como una sola o un todo, las cuales consumirán y expondrán diferentes Componentes/Pages de cualquier microfrontend que conforme este proyecto. La idea es dimensionar las posibilidades y estabilidad que nos ofrece Webpack 5 al hacer uso de su plugin ModuleFederationPlugin.`,
      },
    ],
  },
  {
    id: 2,
    type: 'MI MOVISTAR',
    image: MovistarImg,
    tag: [
      'Destacados',
      'Todos',
      'Next JS',
      'Node JS',
      'React Native',
      'WebApp',
    ],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack Website',
        client: 'Telefonica',
        language:
          'Typescript, Next JS, Zustand, React Query, Webpack 5, React Native, Node JS, Storybook',
        preview: 'Mi Movistar',
        link: 'https://app.movistar.com.ar/',
        repoLink: '#',
        accessType: 'restricted',
        details: `Mi Movistar es un proyecto interno de Telefonica en el cual se desarrollo tanto frontend con NextJS y backend con NodeJS como tecnologíass principales. También se utilizo React Native para la parte mobile.`,
      },
    ],
  },
  {
    id: 3,
    type: 'Membrane Labs',
    image: MembraneLabs,
    tag: ['Destacados', 'Todos', 'Vite JS', 'Web3/Blockchain', 'DApp', 'MUI'],
    delayAnimation: '200',
    modalType: 'youtube',
    videoLink: 'https://www.youtube.com/embed/7wmCDboQhOo?si=Iias1ZtC0-34qjyU',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Membrane Labs',
        language:
          'Typescript, Vite JS, Material UI, Responsive Design, Web3, Blockchain, React Query, Zustand, Jira, Git, Github, Metodologías Ágiles, Figma.',
        preview: 'Website',
        link: 'https://membranelabs.com/',
        accessType: 'restricted',
        details: `Membrane Labs ofrece servicios institucionales de activos digitales para transacciones OTC. Soy miembro del equipo encargado de diseñar y desarrollar servicios de liquidación e integraciones externas.`,
      },
    ],
  },
  {
    id: 4,
    type: 'Celesi',
    image: Celesi,
    tag: ['Todos', 'Next JS', 'WebApp', 'E-commerce'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebApp',
        client: 'Celesi, Capstone Side',
        language:
          'Typescript, Next JS, Module CSS, Responsive Design, React Query, Zustand, Jira, Git, Github, Metodologías Ágiles, Figma.',
        preview: 'Website',
        link: 'https://gazeta-next-alpha.vercel.app/',
        accessType: 'restricted',
        details: `Celesi es el portal de páginas amarillas lider de Albania. Este desarrollo cuenta con un sistema de administración de contenido, manejo de avisos publicitarios, e-commerce y multi-idioma entre otras funcionalidades.`,
      },
    ],
  },
  {
    id: 5,
    type: 'Coolco',
    image: Coolco,
    tag: ['Todos', 'Next JS', 'Web3/Blockchain', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebaApp',
        client: 'Coolco',
        language:
          'Typescript, Next JS, React Query, Zustand, Module CSS, Responsive Design, Web3, Blockchain',
        preview: 'Website',
        link: 'https://www.coolco.io/',
        accessType: 'restricted',
        details: `Sitio desarrollado para compañía de entretenimiento CoolCo, en cual consiste en un sistema de emisión de boletos basado en blockchain, con reventa segura y venta de NFT a usuarios que no son de Web3 y con métodos de pago tradicionales.
        Para lograrlo, la firma utiliza su propia plataforma para "desbloquear experiencias digitales y contenido exclusivo".
        `,
      },
    ],
  },
  {
    id: 6,
    type: 'Sugar Kingdom Odyssey Landing Page',
    image: SugarLanding,
    tag: ['Todos', 'React JS', 'MUI', 'Web3/Blockchain', 'Landing Page'],
    delayAnimation: '200',
    modalType: 'youtube',
    videoLink:
      'https://www.youtube.com/embed/LRJvudUP_2M?si=sPXOU_W0_a4dV_JA??autoplay=1&cc_load_policy=1&enablejsapi=1&loop=1&start=1',
    modalDetails: [
      {
        project: 'Landing Page',
        client: 'Apes International Group',
        language:
          'Typescript, React JS, MUI, Responsive Design, Lottie, React Scroll, React Router',
        preview: 'Website',
        link: 'https://www.sugarkingdom.io/',
        repoLink:
          'https://github.com/Apes-International-Group/sugar-kingdom-odyssey-landing-page',
        accessType: 'restricted',
        details: `Sitio informativo desarrollado para la empresa Apes International Group, se trata de un juego de estrategia en el que los jugadores pueden ganar premios en criptomonedas.`,
      },
    ],
  },
  {
    id: 7,
    type: 'Sugar Kingdom Odyssey Game DApp',
    image: SugarGame,
    tag: ['Todos', 'React JS', 'Web3/Blockchain', 'Vite JS', 'DApp'],
    delayAnimation: '200',
    modalType: 'youtube',
    videoLink:
      'https://www.youtube.com/embed/LRJvudUP_2M?si=sPXOU_W0_a4dV_JA??autoplay=1&cc_load_policy=1&enablejsapi=1&loop=1&start=1',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Apes International Group',
        language:
          'Typescript, Vite JS, Ethers JS, Zustand, React Query, Xerial Wallet SDK, Responsive Design, Unity, Web3, Blockchain',
        preview: 'Game',
        link: 'https://game.sugarkingdom.io/',
        repoLink:
          'https://github.com/Apes-International-Group/sugar-kingdom-odyssey-webapp',
        accessType: 'restricted',
        details: `La plataforma de juegos de Apes International Group, Sugar Kingdom Odyssey, es un juego de estrategia en el que los jugadores pueden ganar premios en criptomonedas. El juego esta desarrollado en Unity y la webapp en Vite JS.`,
      },
    ],
  },
  {
    id: 8,
    type: 'Sugar Kingdom Odyssey Staking Dapp',
    image: SugarStaking,
    tag: ['Todos', 'Next JS', 'Web3/Blockchain', 'DApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Apes International Group',
        language:
          'Typescript, Next JS, Tailwind CSS, Responsive Design, Web3, Blockchain, Ethers JS, Team Finance',
        preview: 'Staking Page',
        link: 'https://staking.sugarkingdom.io/',
        repoLink:
          'https://github.com/Apes-International-Group/sugar-kingdom-odyssey-staking-webapp/tree/main',
        accessType: 'restricted',
        details: `La plataforma de juegos de Apes International Group, Sugar Kingdom Odyssey, es un juego de estrategia en el que los jugadores pueden ganar premios en criptomonedas. 
        Este proyecto es la página de staking en la cual los usuarios pueden hacer stake de sus tokens y ganar recompensas.
        `,
      },
    ],
  },
  {
    id: 9,
    type: 'PERSONAL CV',
    image: CvGastby,
    tag: ['Todos', 'Gatsby JS', 'Node JS', 'GraphQL', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, Gatsby JS, Strapi, GraphQL, Heroku, Netlify',
        preview: 'Demo',
        link: 'https://eburgos-gatsby-cv.netlify.app/',
        repoLink: 'https://github.com/e-burgos/cv-gatsby',
        repoBackLink: 'https://github.com/e-burgos/cv-strapi',
        accessType: 'public',
        details: `Proyecto de CV personal utilizando GatsbyJS y Strapi Headless CMS.
        `,
      },
    ],
  },
  {
    id: 10,
    type: 'OPTICA PINBLACK',
    image: PinblackImg,
    tag: ['Todos', 'E-commerce', 'Wordpress'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'E-commerce',
        client: 'OPTICA PINBLACK',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Woocommerce, Elementor, Google Analytics, Google Tag Manager, Google Search Console, Google My Business, Google Merchant Center, Google Ads, Facebook Business, Instagram Business, Mercado Pago, SSL Certificate',
        preview: 'Website',
        link: 'https://opticapinblack.com.ar/',
        accessType: 'restricted',
        details: `Tienda virtual dedicada al rubro óptica. Responsive Design. Sitios auto-administrable. Gestión de ventas de productos y manejo stock. Backend de gestión de pedidos y clientes. Conexión con redes sociales. Sincronización de productos con Facebook e Instagram. Analíticas de tráfico y visitas. Integración con Mercado Pago. Integración de certificado SSL (Pago seguro) Integración con aplicación móvil para manejo de pedidos y productos.`,
      },
    ],
  },
  {
    id: 11,
    type: 'BLOCKLIT',
    image: Blocklit,
    tag: ['Todos', 'React JS', 'Landing Page'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Landing Page',
        client: 'BLOCKLIT',
        language: 'HTML, CSS, Javascript, React JS',
        preview: 'Website',
        link: 'https://block-lit.com/',
        accessType: 'restricted',
        details: `Sitio web desarrollado en ReactJS para la empresa Blocklit.
        `,
      },
    ],
  },
  {
    id: 12,
    type: 'Gogrow Challenge',
    image: GoGrow,
    tag: ['Todos', 'React JS', 'Landing Page'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Landing Page',
        client: 'Gogrow',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, Styled Components, Responsive Design',
        preview: 'Website',
        link: 'https://gogrow-challenge.netlify.app',
        repoLink: 'https://github.com/e-burgos/gogrow-challenge/',
        accessType: 'public',
        details: `Challenge desarrollado en ReactJS para la empresa Gogrow. El desafío consiste en desarrollar una aplicación web que permita a los usuarios registrarse (Mock).
        `,
      },
    ],
  },
  {
    id: 13,
    type: 'NextJS Challenge Sample Survey Web3',
    image: Quiz,
    tag: ['Todos', 'Next JS', 'Web3/Blockchain', 'DApp', 'MUI'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Rather Labs',
        language:
          'Typescript, Next JS, Material UI, Responsive Design, Web3, Blockchain, Ethers JS, Web3Modal',
        preview: 'Challenge',
        link: 'https://blockchain-nextjs-quiz.vercel.app/',
        repoLink: 'https://github.com/e-burgos/blockchain-quiz',
        accessType: 'public',
        details: `Proyecto de encuesta en el cual se utiliza Web3 para interactuar con la blockchain de Ethereum.
        The web should behave as follows:
        Connect Metamask wallet
        Ensure user is connected to Goerli and if not show a button to switch networks automatically.
        Show balance of $QUIZ token (address below).
        Once the page is loaded, present the title of the daily trivia with its picture and a button that allows you to begin answering.
        Once the survey starts, display the current question, which will be available for the amount of seconds in the lifetimeSeconds property.
        Answered or not it should move onto the next question.
        Once all the questions are finished, show an overview with all the answers.
        Show a button to submit the questions to the validator contract
        Refresh the balance of $QUIZ`,
      },
    ],
  },
  {
    id: 14,
    type: 'ViteJS Challenge Sample Survey Web3',
    image: Quiz2,
    tag: ['Todos', 'Vite JS', 'Web3/Blockchain', 'DApp', 'MUI'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Rather Labs',
        language:
          'Typescript, Vite JS, Material UI, Responsive Design, Web3, Blockchain, Ethers JS, Web3Modal',
        preview: 'Challenge',
        link: 'https://membrane-frontend-cc-eburgos.vercel.app/',
        repoLink: 'https://github.com/e-burgos/membrane-frontend-cc',
        accessType: 'public',
        details: `Proyecto de encuesta en el cual se utiliza Web3 para interactuar con la blockchain de Ethereum.
        The web should behave as follows:
        Connect Metamask wallet
        Ensure user is connected to Goerli and if not show a button to switch networks automatically.
        Show balance of $QUIZ token (address below).
        Once the page is loaded, present the title of the daily trivia with its picture and a button that allows you to begin answering.
        Once the survey starts, display the current question, which will be available for the amount of seconds in the lifetimeSeconds property.
        Answered or not it should move onto the next question.
        Once all the questions are finished, show an overview with all the answers.
        Show a button to submit the questions to the validator contract
        Refresh the balance of $QUIZ`,
      },
    ],
  },
  {
    id: 15,
    type: 'CHARMING STEP',
    image: CharmingImg,
    tag: ['Todos', 'E-commerce', 'Wordpress'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'E-commerce',
        client: 'CHARMING STEP',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Woocommerce, Elementor, Google Analytics, Google Tag Manager, Google Search Console, Google My Business, Google Merchant Center, Google Ads, Facebook Business, Instagram Business, Mercado Pago, SSL Certificate',
        preview: 'Website',
        link: 'https://www.charmingstep.com.ar/',
        accessType: 'restricted',
        details: `Tienda de Zapatos de Baile. Algunos Desarrollos: Responsive Design. Sitios auto-administrable. Gestión de ventas de productos y manejo stock. Backend de gestión de pedidos y clientes. Conexión con redes sociales. Sincronización de productos con Facebook e Instagram. Analíticas de tráfico y visitas. Integración con Mercado Pago. Integración de certificado SSL (Pago seguro). Integración con aplicación móvil para manejo de pedidos y productos.`,
      },
    ],
  },
  {
    id: 16,
    type: 'BANDURRIA DECO',
    image: BanduTiendaImg,
    tag: ['Todos', 'E-commerce', 'Wordpress'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'E-commerce',
        client: 'BANDURRIA DECO',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Woocommerce, Elementor, Google Analytics, Google Tag Manager, Google Search Console, Google My Business, Google Merchant Center, Google Ads, Facebook Business, Instagram Business, Mercado Pago, SSL Certificate',
        preview: 'Website',
        link: 'https://bandurriadeco.com.ar/tienda/',
        accessType: 'restricted',
        details: `Tienda de decoración y gráfica. Algunos Desarrollos: Responsive Design. Sitios auto-administrable. Gestión de ventas de productos y manejo stock. Backend de gestión de pedidos y clientes. Conexión con redes sociales. Sincronización de productos con Facebook e Instagram. Analíticas de tráfico y visitas. Integración con Mercado Pago. Integración de certificado SSL (Pago seguro). Integración con aplicación móvil para manejo de pedidos y productos.`,
      },
    ],
  },
  {
    id: 17,
    type: 'BANDURRIA DECO INSTITUCIONAL',
    image: BanduLandingImg,
    tag: ['Todos', 'Wordpress', 'Landing Page'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Landing Page',
        client: 'BANDURRIA DECO',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Elementor, Google Analytics, Google Tag Manager, Google Search Console, Facebook Business, Instagram Business, SSL Certificate',
        preview: 'Website',
        link: 'https://bandurriadeco.com.ar',
        accessType: 'restricted',
        details: `Web institucional de decoración y gráfica. Algunos Desarrollos: Responsive Design. Sitios auto-administrable. Conexión con redes sociales. Sincronización de productos con Facebook e Instagram. Analíticas de tráfico y visitas. Integración de certificado SSL.`,
      },
    ],
  },
  {
    id: 18,
    type: 'GME ALLIANCE',
    image: GmeImg,
    tag: ['Todos', 'Wordpress', 'Landing Page'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Website',
        client: 'GME ALLIANCE',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Elementor, Google Analytics, Google Maps, SSL Certificate',
        preview: 'Website',
        link: 'https://gmealliance.com/',
        accessType: 'restricted',
        details: `Sitio Institucional, Algunos Desarrollos: Responsive Design. Auto-administración de contenido. Manejo de idiomas. Blog de noticias. Conexión con redes sociales. Integración de certificado SSL. Integración con formulario de contacto. Integración Google Maps para mostrar sitios de telecomunicaciones.`,
      },
    ],
  },
  {
    id: 19,
    type: 'CONVERSOR DE CRIPTOMONEDAS',
    image: CryptoConversorWebImg,
    tag: ['Todos', 'React JS', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, API REST, Axios, Styled Components',
        preview: 'Demo',
        link: 'https://criptomonedas-eburgos.netlify.app/',
        repoLink: 'https://github.com/e-burgos/cotizador-criptomonedas',
        accessType: 'public',
        details: `Conversor de monedas tradicionales a criptomonedas consultando una API externa.
        `,
      },
    ],
  },
  {
    id: 20,
    type: 'Bucador de Recetas de Bebidas',
    image: DrinkIng,
    tag: ['Todos', 'React JS', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, API REST, Axios, Styled Components',
        preview: 'Demo',
        link: 'https://tragos-eburgos.netlify.app/',
        repoLink: 'https://github.com/e-burgos/bebidas',
        accessType: 'public',
        details: `Buscador de recetas de bebidas consultando una API externa.
        `,
      },
    ],
  },
  {
    id: 21,
    type: 'MERN TASKS',
    image: MernTasks,
    tag: ['Todos', 'React JS', 'Node JS', 'Mongo DB', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, Node JS, Express JS, MongoDB, Heroku, Netlify',
        preview: 'Demo',
        link: 'https://merntasks-eburgos.netlify.app/',
        repoLink: 'https://github.com/e-burgos/mern-tasks-react',
        repoBackLink: 'https://github.com/e-burgos/mern-tasks-node',
        accessType: 'public',
        details: `MERN-Tasks es un proyecto de tipo MERN (MongoDB, Expressjs, Reactjs, Nodejs), en cual básicamente es una herramienta que administra proyectos y tareas dentro de los mismos. Backend desarrollado en Nodejs utilizando como framework Expressjs. Herramientas y dependencias utilizadas: cors, dotenv, mongoose, expressjs, jwt-authentication, express-validator, bcryptjs. DB utilizada: MongoDB. Sevicio de alojamiento: Heroku Cloud Services. Frontend desarrollado con la libreria Reactjs. Algunas dependencias y hooks utilizados: uuid jwt-authentication react-router-dom usereducer-hooks usecontext-hook usestate-hook. Ambiente: create-react-app. Serverless platform: Netlify.
        `,
      },
    ],
  },
  {
    id: 22,
    type: 'NODESEND',
    image: NodeSend,
    tag: ['Todos', 'React JS', 'Node JS', 'Mongo DB', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, Node JS, Express JS, MongoDB, Heroku, Netlify, Multer, JWT, bcrypt',
        preview: 'Demo',
        link: 'https://nodesend-next.vercel.app/',
        repoLink: 'https://github.com/e-burgos/nodesend-next',
        repoBackLink: 'https://github.com/e-burgos/nodesend-node',
        accessType: 'public',
        details: `NodeSend es un clon del famoso FirefoxSend el cual tiene la funcionalidad de subir archivos a la nube para ser compartidos mediante links, beneficiando a usuarios registrados con otras características de subida. Backend desarrollado con Nodejs utilizando el framework de Expressjs. Herramientas y dependencias utilizadas: dotenv mongoose fs bcrypt jsonwebtoken multer express-js express-validator shortid custom-middleware DB utilizada: MongoDB. Sevicio de alojamiento: Heroku Cloud Services. Frontend desarrollado con la libreria Reactjs. Algunas dependencias y hooks utilizados: uuid jwt-authentication react-router-dom usereducer-hooks usecontext-hook usestate-hook. Ambiente: create-react-app. Serverless platform: Netlify.`,
      },
    ],
  },
  {
    id: 23,
    type: 'ANIMATED APP',
    image: Animated,
    tag: ['Todos', 'React Native', 'Mobile App'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Aplicación Móvil',
        client: 'Demo',
        language:
          'Typescript, React Native, Android, iOS, Animated, Lottie, React Navigation, React Native Paper',
        preview: 'Demo',
        link: 'https://github.com/e-burgos/react-native-animated/tree/master/apk',
        repoLink: 'https://github.com/e-burgos/react-native-animated',
        accessType: 'public',
        details: `App demostrativa de algunas de las animaciones que ofrece la librería Animated de React Native.`,
      },
    ],
  },
  {
    id: 24,
    type: 'WEATHER APP',
    image: WeatherApp,
    tag: ['Todos', 'React Native', 'Mobile App'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Aplicación Móvil',
        client: 'Demo',
        language:
          'Typescript, React Native, Android, iOS, Animated, Lottie, React Navigation, React Native Paper',
        preview: 'Demo',
        link: 'https://github.com/e-burgos/react-native-weather/tree/master/apk',
        repoLink: 'https://github.com/e-burgos/react-native-weather',
        accessType: 'public',
        details: `Ejemplo de app en react native que consulta información de la api de openweathermap.org.`,
      },
    ],
  },
  {
    id: 25,
    type: 'WEATHER WEB',
    image: WeatherWeb,
    tag: ['Todos', 'React JS', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebApp',
        client: 'Demo',
        language: 'Typescript, React JS, API REST, Axios, Styled Components',
        preview: 'Demo',
        link: 'https://clima-eburgos.netlify.app/',
        repoLink: 'https://github.com/e-burgos/react-native-weather',
        accessType: 'public',
        details: `Ejemplo de webapp que consulta información de la api de openweathermap.org.`,
      },
    ],
  },
  {
    id: 26,
    type: 'MASCOTAS APP',
    image: MascotasApp,
    tag: ['Todos', 'React Native', 'Mobile App'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Aplicación Móvil',
        client: 'Demo',
        language:
          'Typescript, React Native, Android, iOS, Animated, React Navigation, React Native Paper',
        preview: 'Demo',
        link: 'https://github.com/e-burgos/react-native-citas/tree/master/apk',
        repoLink: 'https://github.com/e-burgos/react-native-citas',
        accessType: 'public',
        details: `Simple ejemplo en react native para listar citas de mascotas y almacenarlas en el almacenamiento interno del equipo móvil.`,
      },
    ],
  },
  {
    id: 27,
    type: 'CRYPTO APP',
    image: CryptoApp,
    tag: ['Todos', 'React Native', 'Mobile App'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Aplicación Móvil',
        client: 'Demo',
        language:
          'Typescript, React Native, Android, iOS, Animated, React Navigation, React Native Paper, Axios, API REST',
        preview: 'Demo',
        link: 'https://github.com/e-burgos/react-native-criptomonedas/tree/master/apk',
        repoLink: 'https://github.com/e-burgos/react-native-criptomonedas',
        accessType: 'public',
        details: `Simple ejemplo en react native del consumo de una API de criptomonedas.`,
      },
    ],
  },
  {
    id: 28,
    type: 'CUSTOM STORYBOOK',
    image: CustomStorybook,
    tag: ['Todos', 'UI/UX', 'Storybook'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Librería de Componentes',
        client: 'Santander Río',
        language:
          'Typescript, Storybook, React JS, Jest Testing Library, Styled Components, Cromatic',
        preview: 'Cromatic',
        link: 'https://63152ba2c41e0fd827079fb4-vagoymxsgw.chromatic.com',
        repoLink: 'https://github.com/e-burgos/custom-storybook',
        accessType: 'public',
        details: `Librería de componentes demostrativa desarrollada para el banco Santander Río. La misma fue desarrollada con Storybook, Styled Components y Jest Testing Library. Se utilizó Chromatic para la revisión visual de los componentes.`,
      },
    ],
  },
  {
    id: 29,
    type: 'OVERSOFT STORYBOOK',
    image: OversoftStorybook,
    tag: ['Todos', 'UI/UX', 'Storybook'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Librería de Componentes',
        client: 'Oversoft SA',
        language:
          'Typescript, Storybook, React JS, Jest Testing Library, Styled Components, Cromatic',
        preview: 'Cromatic',
        link: 'https://64a6dbac61ad3a417c9476a7-lbluasacmt.chromatic.com',
        repoLink: 'https://github.com/e-burgos/storybook-oversoft',
        accessType: 'public',
        details: `Librería de componentes inicial desarrollada para la empresa Oversoft. La misma fue desarrollada con Storybook, Styled Components y Jest Testing Library. Se utilizó Chromatic para la revisión visual de los componentes.`,
      },
    ],
  },
  {
    id: 30,
    type: 'BANCO SANTANDER RIO',
    image: Santander,
    tag: ['Destacados', 'Todos', 'WebApp', 'React JS', 'Next JS'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Sistemas de gestión',
        client: 'Santander Río',
        language:
          'Typescript, Next JS, React JS, Jest Testing Library, Styled Components, MUI, React Query, Zustand, Axios, Typescript',
        preview: 'Website',
        link: 'https://www.santander.com.ar/personas',
        accessType: 'restricted',
        details: `Desarrollo de sistemas internos de gestión para el banco Santander Río. Sistema de tickets y sistema de gestión de usuarios. Colaboración en el desarrollo de la web institucional del banco. Desarrollo de una propia UI.`,
      },
    ],
  },
  {
    id: 31,
    type: 'POC: NX MONOREPO CON MODULE FEDERATION',
    image: NxMf,
    tag: ['Todos', 'Microfrontends', 'Nx'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Infraestructura de Microfrontends',
        client: 'Membrane Labs',
        language: 'Typescript, Nx, Webpack 5, Module Federation, React JS',
        preview: 'Repository',
        link: 'https://github.com/e-burgos/nx-with-module-federation',
        repoLink: 'https://github.com/e-burgos/nx-with-module-federation',
        accessType: 'public',
        details: `Prueba de concepto de un monorepo con Nx y Module Federation de Webpack 5. Se crearon 9 aplicaciones independientes que se comunican entre sí. La aplicación host consume el resto de las apps mediante Module Federation.`,
      },
    ],
  },
  {
    id: 32,
    type: 'POC: NX CON MONOREPO INTEGRADO',
    image: NxMf,
    tag: ['Destacados', 'Todos', 'Microfrontends', 'Nx'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Infraestructura de Microfrontends',
        client: 'Membrane Labs',
        language: 'Typescript, Nx, Vite JS, React JS, React Query, Zustand',
        preview: 'Preview',
        link: 'https://nx-with-integrated-repos.vercel.app',
        repoLink: 'https://github.com/e-burgos/nx-with-integrated-repos',
        accessType: 'public',
        details: `Infraestructura de Microfrontends con estados de servidor y cliente compartidos. Prueba de concepto de un monorepo con Nx y Vite JS. La idea es crear una arquitectura escalable y mantenible para el desarrollo de microfrontends. La aplicación host es la aplicación principal que importará otras aplicaciones y funcionará como orquestador. Esta aplicación será el punto de entrada principal del proyecto.
        `,
      },
    ],
  },
  {
    id: 33,
    type: 'DeFi Token Manager',
    image: TokenManager,
    tag: [
      'Destacados',
      'Featured',
      'All',
      'Todos',
      'Vite JS',
      'Web3/Blockchain',
      'DApp',
      'Tailwind CSS',
    ],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'DeFi Application',
        client: 'Wonderland',
        language:
          'Wagmi, Typescript, Vite JS, Tailwind CSS, React Query, Zustand, WalletConnect, Metamask',
        preview: 'Preview',
        link: 'https://defi-token-manager.netlify.app',
        repoLink: 'https://github.com/e-burgos/defi-token-manager',
        accessType: 'public',
        details: `Token manager es una plataforma DeFi para la gestión de tokens. El proposito de este proyecto es crear una plataforma intuitiva y fácil de usar para demostrar la transferencia, aprobación y distribución de tokens.`,
      },
    ],
  },
];

export const PortfolioDataEn: IPortfolioData[] = [
  {
    id: 0,
    type: 'TUCU UI',
    image: TucuUi,
    tag: ['Featured', 'All', 'Tailwind CSS', 'UI/UX', 'React JS'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Component Library',
        client: 'Project Personal',
        language:
          'Typescript, Tailwind CSS, Nx, Vite JS, Headless UI, Swiper, React JS, React Router Dom, Zustand',
        preview: 'Tucu UI',
        link: 'https://tucu-ui.netlify.app/',
        repoLink: 'https://github.com/e-burgos/tucu-ui',
        accessType: 'public',
        details: `A modern, comprehensive React component library built with TypeScript and Tailwind CSS v4. Features an advanced theming system with 31+ color presets, multi-layered color architecture, and granular control options. Designed for developers who need production-ready components with sophisticated theming capabilities.`,
      },
    ],
  },
  {
    id: 1,
    type: 'Microfrontends with React Query',
    image: MicrofrontImg,
    tag: ['All', 'Microfrontends', 'React JS', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack Website',
        client: 'POC',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, Tailwind CSS, React Query, Webpack 5, Module Federation Plugin',
        preview: 'Demo',
        link: 'https://react-query-mf.vercel.app/',
        repoLink: 'https://github.com/e-burgos/react-query-mf',
        accessType: 'public',
        details: `I present a reusable project using Tailwind CSS and react query for context and request management. For this example I will use several tools that will allow us to establish different autonomous applications that behave as one or a whole, which will consume and expose different Components/Pages of any microfrontend that makes up this project. The idea is to dimension the possibilities and stability that Webpack 5 offers us when using its ModuleFederationPlugin plugin.`,
      },
    ],
  },
  {
    id: 2,
    type: 'MI MOVISTAR',
    image: MovistarImg,
    tag: ['Featured', 'All', 'Next JS', 'Node JS', 'React Native', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack Website',
        client: 'Telefonica',
        language:
          'Typescript, Next JS, Zustand, React Query, Webpack 5, React Native, Node JS, Storybook',
        preview: 'Mi Movistar',
        link: 'https://app.movistar.com.ar/',
        repoLink: '#',
        accessType: 'restricted',
        details: `Mi Movistar is an internal project of Telefonica in which both frontend with NextJS and backend with NodeJS were developed as main technologies. React Native was also used for the mobile part.`,
      },
    ],
  },
  {
    id: 3,
    type: 'Membrane Labs',
    image: MembraneLabs,
    tag: ['Featured', 'All', 'Vite JS', 'Web3/Blockchain', 'DApp', 'MUI'],
    delayAnimation: '200',
    modalType: 'youtube',
    videoLink: 'https://www.youtube.com/embed/7wmCDboQhOo?si=Iias1ZtC0-34qjyU',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Membrane Labs',
        language:
          'Typescript, Vite JS, Material UI, Responsive Design, Web3, Blockchain, React Query, Zustand, Jira, Git, Github, Agile Methodologies, Figma.',
        preview: 'Website',
        link: 'https://membranelabs.com/',
        accessType: 'restricted',
        details: `Membrane Labs offers institutional digital asset services for OTC transactions. I am a member of the team responsible for designing and developing liquidation services and external integrations.`,
      },
    ],
  },
  {
    id: 4,
    type: 'Celesi',
    image: Celesi,
    tag: ['All', 'Next JS', 'WebApp', 'E-commerce'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebApp',
        client: 'Celesi, Capstone Side',
        language:
          'Typescript, Next JS, Module CSS, Responsive Design, React Query, Zustand, Jira, Git, Github, Agile Methodologies, Figma.',
        preview: 'Website',
        link: 'https://gazeta-next-alpha.vercel.app/',
        accessType: 'restricted',
        details: `Celesi is the leading yellow pages portal in Albania. This development has a content management system, management of advertising notices, e-commerce and multi-language among other functionalities.`,
      },
    ],
  },
  {
    id: 5,
    type: 'Coolco',
    image: Coolco,
    tag: ['All', 'Next JS', 'Web3/Blockchain', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebaApp',
        client: 'Coolco',
        language:
          'Typescript, Next JS, React Query, Zustand, Module CSS, Responsive Design, Web3, Blockchain',
        preview: 'Website',
        link: 'https://www.coolco.io/',
        accessType: 'restricted',
        details: `Site developed for entertainment company CoolCo, which consists of a blockchain-based ticket issuance system, with secure resale and NFT sales to non-Web3 users and with traditional payment methods.
        To achieve this, the company uses its own platform to "unlock digital experiences and exclusive content".
        `,
      },
    ],
  },
  {
    id: 6,
    type: 'Sugar Kingdom Odyssey Landing Page',
    image: SugarLanding,
    tag: ['All', 'React JS', 'MUI', 'Web3/Blockchain', 'Landing Page'],
    delayAnimation: '200',
    modalType: 'youtube',
    videoLink:
      'https://www.youtube.com/embed/LRJvudUP_2M?si=sPXOU_W0_a4dV_JA??autoplay=1&cc_load_policy=1&enablejsapi=1&loop=1&start=1',
    modalDetails: [
      {
        project: 'Landing Page',
        client: 'Apes International Group',
        language:
          'Typescript, React JS, MUI, Responsive Design, Lottie, React Scroll, React Router',
        preview: 'Website',
        link: 'https://www.sugarkingdom.io/',
        repoLink: '',
        accessType: 'restricted',
        details: `Informative site developed for the company Apes International Group, it is a strategy game in which players can win cryptocurrency prizes.`,
      },
    ],
  },
  {
    id: 7,
    type: 'Sugar Kingdom Odyssey Game DApp',
    image: SugarGame,
    tag: ['All', 'React JS', 'Web3/Blockchain', 'Vite JS', 'DApp'],
    delayAnimation: '200',
    modalType: 'youtube',
    videoLink:
      'https://www.youtube.com/embed/LRJvudUP_2M?si=sPXOU_W0_a4dV_JA??autoplay=1&cc_load_policy=1&enablejsapi=1&loop=1&start=1',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Apes International Group',
        language:
          'Typescript, Vite JS, Ethers JS, Zustand, React Query, Xerial Wallet SDK, Responsive Design, Unity, Web3, Blockchain',
        preview: 'Game',
        link: 'https://game.sugarkingdom.io/',
        repoLink: '',
        accessType: 'restricted',
        details: `The Apes International Group gaming platform, Sugar Kingdom Odyssey, is a strategy game in which players can win cryptocurrency prizes. The game is developed in Unity and the webapp in Vite JS.`,
      },
    ],
  },
  {
    id: 8,
    type: 'Sugar Kingdom Odyssey Staking Dapp',
    image: SugarStaking,
    tag: ['All', 'Next JS', 'Web3/Blockchain', 'DApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Apes International Group',
        language:
          'Typescript, Next JS, Tailwind CSS, Responsive Design, Web3, Blockchain, Ethers JS, Team Finance',
        preview: 'Staking Page',
        link: 'https://staking.sugarkingdom.io/',
        repoLink: '',
        accessType: 'restricted',
        details: `The Apes International Group gaming platform, Sugar Kingdom Odyssey, is a strategy game in which players can win cryptocurrency prizes.
        This project is the staking page where users can stake their tokens and earn rewards.
        `,
      },
    ],
  },
  {
    id: 9,
    type: 'PERSONAL CV',
    image: CvGastby,
    tag: ['All', 'Gatsby JS', 'Node JS', 'GraphQL', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, Gatsby JS, Strapi, GraphQL, Heroku, Netlify',
        preview: 'Demo',
        link: 'https://eburgos-gatsby-cv.netlify.app/',
        repoLink: 'https://github.com/e-burgos/cv-gatsby',
        repoBackLink: 'https://github.com/e-burgos/cv-strapi',
        accessType: 'public',
        details: `Personal CV project using GatsbyJS and Strapi Headless CMS.
        `,
      },
    ],
  },
  {
    id: 10,
    type: 'OPTICA PINBLACK',
    image: PinblackImg,
    tag: ['Todos', 'E-commerce', 'Wordpress'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'E-commerce',
        client: 'OPTICA PINBLACK',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Woocommerce, Elementor, Google Analytics, Google Tag Manager, Google Search Console, Google My Business, Google Merchant Center, Google Ads, Facebook Business, Instagram Business, Mercado Pago, SSL Certificate',
        preview: 'Website',
        link: 'https://opticapinblack.com.ar/',
        accessType: 'restricted',
        details: `Virtual store dedicated to the optics sector. Responsive Design. Self-administered sites. Product sales management and stock management. Backend order and customer management. Connection with social networks. Product synchronization with Facebook and Instagram. Traffic and visit analytics. Integration with Mercado Pago. SSL certificate integration (Secure payment) Integration with mobile application for order and product management.`,
      },
    ],
  },
  {
    id: 11,
    type: 'BLOCKLIT',
    image: Blocklit,
    tag: ['All', 'React JS', 'Landing Page'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Landing Page',
        client: 'BLOCKLIT',
        language: 'HTML, CSS, Javascript, React JS',
        preview: 'Website',
        link: 'https://block-lit.com/',
        accessType: 'restricted',
        details: `Website developed in ReactJS for the company Blocklit.
        `,
      },
    ],
  },
  {
    id: 12,
    type: 'Gogrow Challenge',
    image: GoGrow,
    tag: ['All', 'React JS', 'Landing Page'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Landing Page',
        client: 'Gogrow',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, Styled Components, Responsive Design',
        preview: 'Website',
        link: 'https://gogrow-challenge.netlify.app',
        repoLink: 'https://github.com/e-burgos/gogrow-challenge/',
        accessType: 'public',
        details: `Challenge developed in ReactJS for the company Gogrow. The challenge is to develop a web application that allows users to register (Mock).
        `,
      },
    ],
  },

  {
    id: 13,
    type: 'NextJS Challenge Sample Survey Web3',
    image: Quiz,
    tag: ['All', 'Next JS', 'Web3/Blockchain', 'DApp', 'MUI'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Rather Labs',
        language:
          'Typescript, Next JS, Material UI, Responsive Design, Web3, Blockchain, Ethers JS, Web3Modal',
        preview: 'Challenge',
        link: 'https://blockchain-nextjs-quiz.vercel.app/',
        repoLink: 'https://github.com/e-burgos/blockchain-quiz',
        accessType: 'public',
        details: `Survey project in which Web3 is used to interact with the Ethereum blockchain.
        The web should behave as follows:
        Connect Metamask wallet
        Ensure user is connected to Goerli and if not show a button to switch networks automatically.
        Show balance of $QUIZ token (address below).
        Once the page is loaded, present the title of the daily trivia with its picture and a button that allows you to begin answering.
        Once the survey starts, display the current question, which will be available for the amount of seconds in the lifetimeSeconds property.
        Answered or not it should move onto the next question.
        Once all the questions are finished, show an overview with all the answers.
        Show a button to submit the questions to the validator contract
        Refresh the balance of $QUIZ`,
      },
    ],
  },
  {
    id: 14,
    type: 'ViteJS Challenge Sample Survey Web3',
    image: Quiz2,
    tag: ['All', 'Vite JS', 'Web3/Blockchain', 'DApp', 'MUI'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'DApp / WebApp',
        client: 'Rather Labs',
        language:
          'Typescript, Vite JS, Material UI, Responsive Design, Web3, Blockchain, Ethers JS, Web3Modal',
        preview: 'Challenge',
        link: 'https://membrane-frontend-cc-eburgos.vercel.app/',
        repoLink: 'https://github.com/e-burgos/membrane-frontend-cc',
        accessType: 'public',
        details: `Survey project in which Web3 is used to interact with the Ethereum blockchain.
        The web should behave as follows:
        Connect Metamask wallet
        Ensure user is connected to Goerli and if not show a button to switch networks automatically.
        Show balance of $QUIZ token (address below).
        Once the page is loaded, present the title of the daily trivia with its picture and a button that allows you to begin answering.
        Once the survey starts, display the current question, which will be available for the amount of seconds in the lifetimeSeconds property.
        Answered or not it should move onto the next question.
        Once all the questions are finished, show an overview with all the answers.
        Show a button to submit the questions to the validator contract
        Refresh the balance of $QUIZ`,
      },
    ],
  },

  {
    id: 15,
    type: 'CHARMING STEP',
    image: CharmingImg,
    tag: ['All', 'E-commerce', 'Wordpress'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'E-commerce',
        client: 'CHARMING STEP',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Woocommerce, Elementor, Google Analytics, Google Tag Manager, Google Search Console, Google My Business, Google Merchant Center, Google Ads, Facebook Business, Instagram Business, Mercado Pago, SSL Certificate',
        preview: 'Website',
        link: 'https://www.charmingstep.com.ar/',
        accessType: 'restricted',
        details: `Dance Shoes Store. Some Developments: Responsive Design. Self-administered sites. Product sales management and stock management. Backend order and customer management. Connection with social networks. Product synchronization with Facebook and Instagram. Traffic and visit analytics. Integration with Mercado Pago. SSL certificate integration (Secure payment). Integration with mobile application for order and product management.`,
      },
    ],
  },
  {
    id: 16,
    type: 'BANDURRIA DECO',
    image: BanduTiendaImg,
    tag: ['All', 'E-commerce', 'Wordpress'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'E-commerce',
        client: 'BANDURRIA DECO',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Woocommerce, Elementor, Google Analytics, Google Tag Manager, Google Search Console, Google My Business, Google Merchant Center, Google Ads, Facebook Business, Instagram Business, Mercado Pago, SSL Certificate',
        preview: 'Website',
        link: 'https://bandurriadeco.com.ar/tienda/',
        accessType: 'restricted',
        details: `Decoration and graphic store. Some Developments: Responsive Design. Self-administered sites. Product sales management and stock management. Backend order and customer management. Connection with social networks. Product synchronization with Facebook and Instagram. Traffic and visit analytics. Integration with Mercado Pago. SSL certificate integration (Secure payment). Integration with mobile application for order and product management.`,
      },
    ],
  },

  {
    id: 17,
    type: 'BANDURRIA DECO INSTITUCIONAL',
    image: BanduLandingImg,
    tag: ['All', 'Wordpress', 'Landing Page'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Landing Page',
        client: 'BANDURRIA DECO',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Elementor, Google Analytics, Google Tag Manager, Google Search Console, Facebook Business, Instagram Business, SSL Certificate',
        preview: 'Website',
        link: 'https://bandurriadeco.com.ar',
        accessType: 'restricted',
        details: `Decoration and graphic institutional website. Some Developments: Responsive Design. Self-administered sites. Connection with social networks. Product synchronization with Facebook and Instagram. Traffic and visit analytics. SSL certificate integration.`,
      },
    ],
  },
  {
    id: 18,
    type: 'GME ALLIANCE',
    image: GmeImg,
    tag: ['All', 'Wordpress', 'Landing Page'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Website',
        client: 'GME ALLIANCE',
        language:
          'HTML, CSS, Javascript, PHP, Wordpress, Elementor, Google Analytics, Google Maps, SSL Certificate',
        preview: 'Website',
        link: 'https://gmealliance.com/',
        accessType: 'restricted',
        details: `Institutional site, Some Developments: Responsive Design. Content self-management. Language management. News blog. Connection with social networks. SSL certificate integration. Integration with contact form. Google Maps integration to show telecommunications sites.`,
      },
    ],
  },
  {
    id: 19,
    type: 'CONVERSOR DE CRIPTOMONEDAS',
    image: CryptoConversorWebImg,
    tag: ['All', 'React JS', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, API REST, Axios, Styled Components',
        preview: 'Demo',
        link: 'https://criptomonedas-eburgos.netlify.app/',
        repoLink: 'https://github.com/e-burgos/cotizador-criptomonedas',
        accessType: 'public',
        details: `Traditional currency to cryptocurrency converter by consulting an external API.
        `,
      },
    ],
  },
  {
    id: 20,
    type: 'Bucador de Recetas de Bebidas',
    image: DrinkIng,
    tag: ['All', 'React JS', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, API REST, Axios, Styled Components',
        preview: 'Demo',
        link: 'https://tragos-eburgos.netlify.app/',
        repoLink: 'https://github.com/e-burgos/bebidas',
        accessType: 'public',
        details: `Drink recipe search by consulting an external API.
        `,
      },
    ],
  },
  {
    id: 21,
    type: 'MERN TASKS',
    image: MernTasks,
    tag: ['All', 'React JS', 'Node JS', 'Mongo DB', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, Node JS, Express JS, MongoDB, Heroku, Netlify',
        preview: 'Demo',
        link: 'https://merntasks-eburgos.netlify.app/',
        repoLink: 'https://github.com/e-burgos/mern-tasks-react',
        repoBackLink: 'https://github.com/e-burgos/mern-tasks-node',
        accessType: 'public',
        details: `MERN-Tasks is a MERN-type project (MongoDB, Expressjs, Reactjs, Nodejs), which is basically a tool that manages projects and tasks within them. Backend developed in Nodejs using Expressjs as a framework. Tools and dependencies used: cors, dotenv, mongoose, expressjs, jwt-authentication, express-validator, bcryptjs. DB used: MongoDB. Hosting service: Heroku Cloud Services. Frontend developed with the Reactjs library. Some dependencies and hooks used: uuid jwt-authentication react-router-dom usereducer-hooks usecontext-hook usestate-hook. Environment: create-react-app. Serverless platform: Netlify.
        `,
      },
    ],
  },
  {
    id: 22,
    type: 'NODESEND',
    image: NodeSend,
    tag: ['All', 'React JS', 'Node JS', 'Mongo DB', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'FullStack WebApp',
        client: 'Demo',
        language:
          'Typescript, HTML, CSS, Javascript, React JS, Node JS, Express JS, MongoDB, Heroku, Netlify, Multer, JWT, bcrypt',
        preview: 'Demo',
        link: 'https://nodesend-next.vercel.app/',
        repoLink: 'https://github.com/e-burgos/nodesend-next',
        repoBackLink: 'https://github.com/e-burgos/nodesend-node',
        accessType: 'public',
        details: `NodeSend is a clone of the famous FirefoxSend which has the functionality of uploading files to the cloud to be shared via links, benefiting registered users with other upload features. Backend developed with Nodejs using the Expressjs framework. Tools and dependencies used: dotenv mongoose fs bcrypt jsonwebtoken multer express-js express-validator shortid custom-middleware DB used: MongoDB. Hosting service: Heroku Cloud Services. Frontend developed with the Reactjs library. Some dependencies and hooks used: uuid jwt-authentication react-router-dom usereducer-hooks usecontext-hook usestate-hook. Environment: create-react-app. Serverless platform: Netlify.`,
      },
    ],
  },
  {
    id: 23,
    type: 'ANIMATED APP',
    image: Animated,
    tag: ['All', 'React Native', 'Mobile App'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Mobile App',
        client: 'Demo',
        language:
          'Typescript, React Native, Android, iOS, Animated, Lottie, React Navigation, React Native Paper',
        preview: 'Demo',
        link: 'https://github.com/e-burgos/react-native-animated/tree/master/apk',
        repoLink: 'https://github.com/e-burgos/react-native-animated',
        accessType: 'public',
        details: `Demonstrative app of some of the animations offered by the Animated library of React Native.
        `,
      },
    ],
  },

  {
    id: 24,
    type: 'WEATHER APP',
    image: WeatherApp,
    tag: ['All', 'React Native', 'Mobile App'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Mobile App',
        client: 'Demo',
        language:
          'Typescript, React Native, Android, iOS, Animated, Lottie, React Navigation, React Native Paper',
        preview: 'Demo',
        link: 'https://github.com/e-burgos/react-native-weather/tree/master/apk',
        repoLink: 'https://github.com/e-burgos/react-native-weather',
        accessType: 'public',
        details: `Example of app in react native that consults information from the openweathermap.org api
        `,
      },
    ],
  },
  {
    id: 25,
    type: 'WEATHER WEB',
    image: WeatherWeb,
    tag: ['All', 'React JS', 'WebApp'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'WebApp',
        client: 'Demo',
        language: 'Typescript, React JS, API REST, Axios, Styled Components',
        preview: 'Demo',
        link: 'https://clima-eburgos.netlify.app/',
        repoLink: 'https://github.com/e-burgos/react-native-weather',
        accessType: 'public',
        details: `Example of webapp that consults information from the openweathermap.org api
        `,
      },
    ],
  },
  {
    id: 26,
    type: 'MASCOTAS APP',
    image: MascotasApp,
    tag: ['All', 'React Native', 'Mobile App'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Mobile App',
        client: 'Demo',
        language:
          'Typescript, React Native, Android, iOS, Animated, React Navigation, React Native Paper',
        preview: 'Demo',
        link: 'https://github.com/e-burgos/react-native-citas/tree/master/apk',
        repoLink: 'https://github.com/e-burgos/react-native-citas',
        accessType: 'public',
        details: `Simple example in react native to list pet appointments and store them in the internal storage of the mobile device.
        `,
      },
    ],
  },
  {
    id: 27,
    type: 'CRYPTO APP',
    image: CryptoApp,
    tag: ['All', 'React Native', 'Mobile App'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Mobile App',
        client: 'Demo',
        language:
          'Typescript, React Native, Android, iOS, Animated, React Navigation, React Native Paper, Axios, API REST',
        preview: 'Demo',
        link: 'https://github.com/e-burgos/react-native-criptomonedas/tree/master/apk',
        repoLink: 'https://github.com/e-burgos/react-native-criptomonedas',
        accessType: 'public',
        details: `Simple example in react native of the consumption of a cryptocurrency API.
        `,
      },
    ],
  },
  {
    id: 28,
    type: 'CUSTOM STORYBOOK',
    image: CustomStorybook,
    tag: ['All', 'UI/UX', 'Storybook'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Component Library',
        client: 'Santander Río',
        language:
          'Typescript, Storybook, React JS, Jest Testing Library, Styled Components, Cromatic',
        preview: 'Cromatic',
        link: 'https://63152ba2c41e0fd827079fb4-vagoymxsgw.chromatic.com',
        repoLink: 'https://github.com/e-burgos/custom-storybook',
        accessType: 'public',
        details: `Demonstrative component library developed for Santander Río bank. It was developed with Storybook, Styled Components and Jest Testing Library. Chromatic was used for visual review of components.
        `,
      },
    ],
  },
  {
    id: 29,
    type: 'OVERSOFT STORYBOOK',
    image: OversoftStorybook,
    tag: ['All', 'Todos', 'UI/UX', 'Storybook'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Component Library',
        client: 'Oversoft SA',
        language:
          'Typescript, Storybook, React JS, Jest Testing Library, Styled Components, Cromatic',
        preview: 'Cromatic',
        link: 'https://64a6dbac61ad3a417c9476a7-lbluasacmt.chromatic.com',
        repoLink: 'https://github.com/e-burgos/storybook-oversoft',
        accessType: 'public',
        details: `Initial component library developed for the company Oversoft. It was developed with Storybook, Styled Components and Jest Testing Library. Chromatic was used for visual review of components.
        `,
      },
    ],
  },
  {
    id: 30,
    type: 'BANCO SANTANDER RIO',
    image: Santander,
    tag: ['Featured', 'All', 'WebApp', 'React JS', 'Next JS'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Management Systems',
        client: 'Santander Río',
        language:
          'Typescript, Next JS, React JS, Jest Testing Library, Styled Components, MUI, React Query, Zustand, Axios, Typescript',
        preview: 'Website',
        link: 'https://www.santander.com.ar/personas',
        accessType: 'restricted',
        details: `Development of internal management systems for Santander Río bank. Ticket system and user management system. Collaboration in the development of the bank's institutional website. Development of a custom UI.
        `,
      },
    ],
  },
  {
    id: 31,
    type: 'POC: NX MONOREPO WITH MODULE FEDERATION',
    image: NxMf,
    tag: ['All', 'Microfrontends', 'Nx'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Frontend Infrastructure',
        client: 'Membrane Labs',
        language: 'Typescript, Nx, Webpack 5, Module Federation, React JS',
        preview: 'Repository',
        link: 'https://github.com/e-burgos/nx-with-module-federation',
        repoLink: 'https://github.com/e-burgos/nx-with-module-federation',
        accessType: 'public',
        details: `Proof of concept of a monorepo with Nx and Module Federation. The idea is to create a scalable and maintainable architecture for the development of microfrontends. The host application consumes the rest of the apps through Module Federation.
        `,
      },
    ],
  },
  {
    id: 32,
    type: 'POC: NX WITH INTEGRATED MONOREPO',
    image: NxMf,
    tag: ['Featured', 'All', 'Microfrontends', 'Nx'],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Microfrontends Infrastructure',
        client: 'Membrane Labs',
        language: 'Typescript, Nx, Vite JS, React JS, React Query, Zustand',
        preview: 'Preview',
        link: 'https://nx-with-integrated-repos.vercel.app',
        repoLink: 'https://github.com/e-burgos/nx-with-integrated-repos',
        accessType: 'public',
        details: `Microfrontends infrastructure with shared server and client states. Proof of concept of a monorepo with Nx and Vite JS. The idea is to create a scalable and maintainable architecture for the development of microfrontends. Host application is the main application that will import others applications and works as orchestrator. This app will be the main entry point of the project.
        `,
      },
    ],
  },
  {
    id: 33,
    type: 'DeFi Token Manager',
    image: TokenManager,
    tag: [
      'Featured',
      'All',
      'Vite JS',
      'Web3/Blockchain',
      'DApp',
      'Tailwind CSS',
      'Nx',
    ],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'DeFi Application',
        client: 'Wonderland',
        language:
          'Wagmi, Typescript, Vite JS, Tailwind CSS, React Query, Zustand, WalletConnect, Metamask',
        preview: 'Preview',
        link: 'https://defi-token-manager.netlify.app',
        repoLink: 'https://github.com/e-burgos/defi-token-manager',
        accessType: 'public',
        details: `Token manager is a DeFi platform for token management. The purpose of this project is to create an intuitive and easy-to-use platform to demonstrate the transfer, approval and distribution of tokens.`,
      },
    ],
  },
];

export const PortfolioContentEs: IPortfolio = {
  title: 'Mis',
  title2: 'Proyectos',
  subtitle: 'Proyectos',
  filterTabs: ['Categorías', 'Tecnologías', 'Todos'],
  tabs: [
    'Destacados',
    'Microfrontends',
    'Nx',
    'React JS',
    'UI/UX',
    'Storybook',
    'React Native',
    'Wordpress',
    'E-commerce',
    'Landing Page',
    'Next JS',
    'Gatsby JS',
    'Node JS',
    'Web3/Blockchain',
    'GraphQL',
    'Mongo DB',
    'Vite JS',
    'MUI',
    'DApp',
    'WebApp',
    'Mobile App',
    'Todos',
  ],
  data: PortfolioDataEs,
};

export const PortfolioContentEn: IPortfolio = {
  title: 'My',
  title2: 'Portfolio',
  subtitle: 'works',
  filterTabs: ['Categories', 'Technologies', 'All'],
  tabs: [
    'Featured',
    'Microfrontends',
    'Nx',
    'React JS',
    'UI/UX',
    'Storybook',
    'React Native',
    'Wordpress',
    'E-commerce',
    'Landing Page',
    'Next JS',
    'Gatsby JS',
    'Node JS',
    'Web3/Blockchain',
    'GraphQL',
    'Mongo DB',
    'Vite JS',
    'MUI',
    'DApp',
    'WebApp',
    'Mobile App',
    'All',
  ],
  data: PortfolioDataEn,
};
