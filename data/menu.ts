export interface IMenuItem {
  icon: string;
  menuName: string;
  tabIndex: 'home' | 'about-me' | 'portfolio' | 'contact' | 'blog' | 'download';
  url: string;
}

export const menuItemEs: IMenuItem[] = [
  { icon: 'fa-home', menuName: 'Inicio', tabIndex: 'home', url: '/' },
  {
    icon: 'fa-user',
    menuName: 'Sobre Mí',
    tabIndex: 'about-me',
    url: '/about-me',
  },
  {
    icon: 'fa-briefcase',
    menuName: 'Proyectos',
    tabIndex: 'portfolio',
    url: '/portfolio',
  },
  {
    icon: 'fa-download',
    menuName: 'Descargar CV',
    tabIndex: 'download',
    url: '/pdf-viewer',
  },
  // { icon: "fa-envelope-open", menuName: "Contacto", tabIndex: 'contact', url: '/contact'},
  // { icon: "fa-comments", menuName: "Blog", tabIndex: 'blog',   url: '/blog'},
];

export const menuItemEn: IMenuItem[] = [
  { icon: 'fa-home', menuName: 'Home', tabIndex: 'home', url: '/' },
  {
    icon: 'fa-user',
    menuName: 'About',
    tabIndex: 'about-me',
    url: '/about-me',
  },
  {
    icon: 'fa-briefcase',
    menuName: 'Portfolio',
    tabIndex: 'portfolio',
    url: '/portfolio',
  },
  {
    icon: 'fa-download',
    menuName: 'Download CV',
    tabIndex: 'download',
    url: '/pdf-viewer',
  },
  // { icon: "fa-envelope-open", menuName: "Contact", tabIndex: 'contact', url: '/contact'},
  // { icon: "fa-comments", menuName: "Blog", tabIndex: 'blog',  url: '/blog'},
];
