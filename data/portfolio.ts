import Image10 from '@/public/assets/img/portfolio/project-1.jpg';
import Image2 from '@/public/assets/img/portfolio/project-2.jpg';
import Image3 from '@/public/assets/img/portfolio/project-3.jpg';
import Image4 from '@/public/assets/img/portfolio/project-4.jpg';
import Image5 from '@/public/assets/img/portfolio/project-5.jpg';
import Image6 from '@/public/assets/img/portfolio/project-6.jpg';
import Image7 from '@/public/assets/img/portfolio/project-7.jpg';
import Image8 from '@/public/assets/img/portfolio/project-8.jpg';
import Image9 from '@/public/assets/img/portfolio/project-9.jpg';
import Image1 from '@/public/assets/img/portfolio/microfront.png';

import { StaticImageData } from 'next/image';

export type ITag = 'Todos' | 'All' | 'MICROFONTENDS' | 'React JS';

export type IModalType = 'image' | 'youtube' | 'video' | 'slider';

export interface IPortfolio {
  title: string;
  title2?: string;
  subtitle: string;
  tabs?: ITag[];
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
    details?: string;
  }[];
}

export const PortfolioDataEs: IPortfolioData[] = [
  {
    id: 1,
    type: 'MICROFONTENDS CON REACT QUERY',
    image: Image1,
    tag: ['MICROFONTENDS', 'React JS'],
    delayAnimation: '0',
    modalDetails: [
      {
        project: 'Website',
        client: 'POC',
        language:
          'HTML, CSS, Javascript, React JS, Tailwind CSS, React Query, Webpack 5, Module Federation Plugin',
        preview: 'Demo',
        link: 'https://react-query-mf.vercel.app/',
        details: `Les presento un proyecto reutilizable haciendo uso de Tailwind CSS y react query para el manejo de contextos y peticiones. Para este ejemplo haré uso varias herramientas que nos permitirán establecer diferentes aplicaciones autónomas que se comporten como una sola o un todo, las cuales consumirán y expondrán diferentes Componentes/Pages de cualquier microfrontend que conforme este proyecto. La idea es dimensionar las posibilidades y estabilidad que nos ofrece Webpack 5 al hacer uso de su plugin ModuleFederationPlugin.`,
      },
    ],
  },
  {
    id: 2,
    type: 'youtube project',
    image: Image2,
    tag: ['React JS'],
    delayAnimation: '100',
    modalType: 'youtube',
    videoLink: 'https://www.youtube.com/embed/nVjEBZHvmrk',
    modalDetails: [
      {
        project: 'video',
        client: 'Videohive',
        language: ' Adobe After Effects',
        preview: 'www.videohive.net',
        link: 'https://www.videohive.net',
      },
    ],
  },
  {
    id: 3,
    type: 'slider project',
    image: Image3,
    tag: [],
    delayAnimation: '200',
    modalType: 'slider',
    sliderImages: [Image10, Image2, Image3],
    modalDetails: [
      {
        project: 'Website',
        client: 'Themeforest',
        language: ' HTML, CSS, Javascript',
        preview: 'www.envato.com',
        link: 'https://www.envato.com',
      },
    ],
  },
  {
    id: 4,
    type: 'local project',
    image: Image4,
    tag: ['React JS'],
    delayAnimation: '0',
    modalDetails: [
      {
        project: 'video',
        client: 'Videohive',
        language: ' Adobe After Effects',
        preview: 'www.videohive.net',
        link: 'https://www.videohive.net',
      },
    ],
  },
  {
    id: 5,
    type: 'saas project',
    image: Image5,
    tag: [],
    delayAnimation: '100',
    modalDetails: [
      {
        project: 'Web Application',
        client: 'Themeforest',
        language: 'HTML, CSS, ReactJS',
        preview: 'www.envato.com',
        link: 'https://themeforest.net/item/deski-saas-software-react-template/33799794',
      },
    ],
  },
  {
    id: 6,
    type: 'mockup project',
    image: Image6,
    tag: [],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Website',
        client: 'Themeforest',
        language: 'HTML, CSS, Javascript',
        preview: 'www.pexels.com',
        link: 'https://www.pexels.com',
      },
    ],
  },
  {
    id: 7,
    type: 'facebook project',
    image: Image7,
    tag: [],
    delayAnimation: '0',
    modalDetails: [
      {
        project: 'Website',
        client: 'Facebook',
        language: 'HTML, CSS, Javascript',
        preview: 'www.facebook.com',
        link: 'https://www.facebook.com/ibthemes',
      },
    ],
  },
  {
    id: 8,
    type: 'dribble project',
    image: Image8,
    tag: [],
    delayAnimation: '100',
    modalDetails: [
      {
        project: 'Website',
        client: 'Dribbble',
        language: 'HTML, CSS, Javascript',
        preview: 'www.dribbble.com',
        link: 'https://dribbble.com/ib-themes',
      },
    ],
  },
  {
    id: 9,
    type: 'behence project',
    image: Image9,
    tag: [],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Website',
        client: 'Behance',
        language: 'HTML, CSS, Javascript',
        preview: 'www.behance.com',
        link: 'https://www.behance.net/ib-themes',
      },
    ],
  },
];

export const PortfolioDataEn: IPortfolioData[] = [
  {
    id: 1,
    type: 'MICROFONTENDS WITH REACT QUERY',
    image: Image1,
    tag: ['MICROFONTENDS', 'React JS'],
    delayAnimation: '300',
    modalDetails: [
      {
        project: 'Website',
        client: 'POC',
        language:
          'HTML, CSS, Javascript, React JS, Tailwind CSS, React Query, Webpack 5, Module Federation Plugin',
        preview: 'Demo',
        link: 'https://react-query-mf.vercel.app/',
        details: `I present a reusable project using Tailwind CSS and react query for context and request management. For this example, I will use several tools that will allow us to establish different autonomous applications that behave as one or a whole, which will consume and expose different Components/Pages of any microfrontend that makes up this project. The idea is to dimension the possibilities and stability that Webpack 5 offers us when using its ModuleFederationPlugin plugin.`,
      },
    ],
  },
  {
    id: 2,
    type: 'youtube project',
    image: Image2,
    tag: ['React JS'],
    delayAnimation: '100',
    modalDetails: [
      {
        project: 'video',
        client: 'Videohive',
        language: ' Adobe After Effects',
        preview: 'www.videohive.net',
        link: 'https://www.videohive.net',
      },
    ],
  },
  {
    id: 3,
    type: 'slider project',
    image: Image3,
    tag: [],
    delayAnimation: '200',
    modalDetails: [
      {
        project: 'Website',
        client: 'Themeforest',
        language: ' HTML, CSS, Javascript',
        preview: 'www.envato.com',
        link: 'https://www.envato.com',
      },
    ],
  },
];

export const PortfolioContentEs: IPortfolio = {
  title: 'Mis',
  title2: 'Proyectos',
  subtitle: 'trabajos',
  tabs: ['Todos', 'MICROFONTENDS', 'React JS'],
  data: PortfolioDataEs,
};

export const PortfolioContentEn: IPortfolio = {
  title: 'My',
  title2: 'Portfolio',
  subtitle: 'works',
  tabs: ['All', 'MICROFONTENDS', 'React JS'],
  data: PortfolioDataEn,
};
