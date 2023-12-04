import { IAbout, aboutContentEn, aboutContentEs } from "./about";
import { IMenuItem, menuItemEn, menuItemEs } from "./menu";
import { profileContentEs, profileContentEn, IProfileContent } from "./profile";
import { ISocialShare, socialShare } from "./social";

export interface IMainContent {
  menu: IMenuItem[];
  profile: IProfileContent;
  about: IAbout;
  portfolio: {};
  contact: {};
  blog: {};
  social: ISocialShare[];
}

export const mainContent = {
  en: {
    menu: menuItemEn,
    profile: profileContentEn,
    about: aboutContentEn,
    portfolio: {},
    contact: {},
    blog: {},
    social: socialShare,
  },
  es: {
    menu: menuItemEs,
    profile: profileContentEs,
    about: aboutContentEs,
    portfolio: {},
    contact: {},
    blog: {},
    social: socialShare,
  },
};
