export interface IAchievementItem {
  title: string;
  subTitle1: string;
  subTitle2: string;
}

export interface IAchievement {
  title: string;
  btnLabel: string;
  data: IAchievementItem[];
}

export const achievementsEn: IAchievement = {
  title: 'Personal Info',
  btnLabel: 'Download CV',
  data: [
    {
      title: '12',
      subTitle1: 'years of experiences in',
      subTitle2: 'IT & Software Companies',
    },
    {
      title: '8',
      subTitle1: 'years of experiences in',
      subTitle2: 'frontend development',
    },
    {
      title: '6',
      subTitle1: 'years of experience in',
      subTitle2: 'leadership positions',
    },
    {
      title: '3',
      subTitle1: 'years of experience as a',
      subTitle2: 'full stack developer',
    },
  ],
};

export const achievementsEs: IAchievement = {
  title: 'Personal Info',
  btnLabel: 'Download CV',
  data: [
    {
      title: '12',
      subTitle1: 'años de experiencia en',
      subTitle2: 'empresas de IT & Software',
    },
    {
      title: '8',
      subTitle1: 'años de experiencia en',
      subTitle2: 'desarrollo frontend',
    },
    {
      title: '6',
      subTitle1: 'años de experiencia en',
      subTitle2: 'posiciones de liderazgo',
    },
    {
      title: '3',
      subTitle1: 'años de experiencia como',
      subTitle2: 'desarrollador full stack',
    },
  ],
};
