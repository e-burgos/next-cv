import ImgMobileDark from '@/public/assets/img/hero/profile-dark.jpeg';
import ImgMobileLight from '@/public/assets/img/hero/profile-light.jpeg';
import ImgBlue from '@/public/assets/img/hero/profile-blue.jpeg';
import { StaticImageData } from 'next/image';
import { ISocialShare } from './social';

export interface IProfileContent {
  profileImage: string;
  profileMobileImageDark: StaticImageData;
  profileMobileImageLight: StaticImageData;
  profileImageStatic: StaticImageData;
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
  profileImage: '/assets/img/hero/profile-blue.jpeg',
  profileMobileImageDark: ImgMobileDark,
  profileMobileImageLight: ImgMobileLight,
  profileImageStatic: ImgBlue,
  profileTitleName: 'ESTEBAN BURGOS',
  profileDesignation: 'Lead Frontend Engineer',
  profileDescriptions: `I’m a tech professional with over 12 years of experience in the industry, specialized in turning core business ideas into functional, innovative, and profitable software solutions. Throughout my career, I’ve held technical, operational, commercial, and managerial roles, which have given me a comprehensive understanding of digital product development and IT & Software business models.
I consider myself a self-taught, organized, and solution-oriented person, with a sharp eye for detail and a deep passion for continuous learning. Naturally curious, I’m a crypto enthusiast and a firm believer in the transformative power of blockchain technology.
Currently, I’m focused on frontend development while exploring the fascinating world of web3. Born in Argentina, Taurus by sign, amateur basketball player, and salsa music lover in all its styles. I see challenges as opportunities for growth and innovation as a driving force for meaningful change.`,
  profileBtn: profileBtn,
};

export const profileContentEs: IProfileContent = {
  profileImage: '/assets/img/hero/profile-blue.jpeg',
  profileMobileImageDark: ImgMobileDark,
  profileMobileImageLight: ImgMobileLight,
  profileImageStatic: ImgBlue,
  profileTitleName: 'ESTEBAN BURGOS',
  profileDesignation: 'Lead Frontend Engineer',
  profileDescriptions: `Soy un profesional con más de 12 años de experiencia en empresas tecnológicas, especializado en convertir ideas clave de negocio en soluciones de software funcionales, innovadoras y rentables. A lo largo de mi carrera ocupé roles técnicos, operativos, comerciales y de gestión, lo que me permitió desarrollar una visión integral del desarrollo de productos digitales y los modelos de negocio en el sector IT & Software.
Me considero una persona autodidacta, organizada y resolutiva, con una fuerte atención al detalle y una profunda vocación por el aprendizaje continuo. Curioso por naturaleza, entusiasta del ecosistema cripto y firme creyente en el potencial transformador de la blockchain.
Actualmente estoy enfocado en el desarrollo frontend y explorando el fascinante universo de web3. Argentino, taurino, jugador amateur de básquet y amante de la salsa en todos sus estilos. Creo en los desafíos como camino de crecimiento y en la innovación como motor de cambio.`,
  profileBtn: profileBtn,
};
