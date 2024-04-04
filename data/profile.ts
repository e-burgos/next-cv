import ImgMobile from '@/public/assets/img/hero/profile-mobile.jpeg';
import { StaticImageData } from 'next/image';
import { ISocialShare } from './social';

export interface IProfileContent {
  profileImage: string;
  profileMobileImage: StaticImageData;
  profileTitleName: string;
  profileDesignation: string;
  profileDescriptions: string;
  profileBtn: ISocialShare[];
}

export const profileBtn: ISocialShare[] = [
  {
    iconName: 'fa fa-linkedin',
    link: 'https://www.linkedin.com/in/estebanburgos/',
    iconLink: 'assets/icons/linkedin.png',
  },
  {
    iconName: 'fa fa-github',
    link: 'https://github.com/e-burgos',
    iconLink: 'assets/icons/github.png',
  },
  {
    iconName: 'fa fa-pencil',
    link: 'https://www.linkedin.com/in/estebanburgos/recent-activity/articles/',
    iconLink: 'assets/icons/blog.png',
  },
  {
    iconName: 'fa fa-whatsapp',
    link: 'https://wa.me/5491126790610',
    iconLink: 'assets/icons/whatsapp.png',
  },
];

export const profileContentEn: IProfileContent = {
  profileImage: '/assets/img/hero/profile.png',
  profileMobileImage: ImgMobile,
  profileTitleName: 'ESTEBAN BURGOS',
  profileDesignation: 'Lead Frontend Engineer',
  profileDescriptions: `I have had 12 years of experience in different technology companies, oriented to the functionality of solutions taking the core ideas of customers to be embodied in productive and profitable software solutions. Throughout my career I acquired great knowledge in different business models applied to the IT & Software industries. My experience is based on various roles allowing a mix of skills in technical, operational, commercial and management areas. Personally I am interested in the continuous learning of new tools, business and ways of working. I consider myself an organized, detail, self-taught and decisive person, my desire is to work in projects that value continuous innovation in all its aspects.`,
  profileBtn: profileBtn,
};

export const profileContentEs: IProfileContent = {
  profileImage: '/assets/img/hero/profile.png',
  profileMobileImage: ImgMobile,
  profileTitleName: 'ESTEBAN BURGOS',
  profileDesignation: 'Lead Frontend Engineer',
  profileDescriptions: `Cuento con 12 años de experiencia en diferentes empresas tecnológicas, orientado a la funcionalidad de soluciones tomando las ideas troncales de clientes para ser materializadas en soluciones de software productivas y rentables. A lo largo de mi carrera adquirí gran conocimiento en diferentes modelos de negocios aplicados a las industrias de IT & Software. Mi experiencia se basó en variados roles permitiendo un mix de habilidades en áreas técnicas, operativas, comerciales y gerenciales. Personalmente me interesa el aprendizaje continuo de nuevas herramientas, negocios y formas de trabajo. Me considero una persona organizada, detallista, autodidacta y resolutiva, mi deseo es trabajar en proyectos que valoren la innovación continua en todos sus aspectos.`,
  profileBtn: profileBtn,
};
