export interface IMenuItem {
  icon: string;
  menuName: string;
}

export const menuItemEs: IMenuItem[] = [
  { icon: "fa-home", menuName: "Inicio" },
  { icon: "fa-user", menuName: "Sobre Mí" },
  { icon: "fa-briefcase", menuName: "Proyectos" },
  { icon: "fa-envelope-open", menuName: "Contacto" },
  { icon: "fa-comments", menuName: "Blog" },
];

export const menuItemEn: IMenuItem[] = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  { icon: "fa-comments", menuName: "Blog" },
];
