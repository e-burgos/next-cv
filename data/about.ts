import {
  IAchievement,
  achievementsEn,
  achievementsEs,
} from "./about/achievements";
import { IEducation, educationEn, educationEs } from "./about/education";
import { IExperience, experienceEn, experienceEs } from "./about/experience";
import {
  IPersonalInfo,
  personalInfoEn,
  personalInfoEs,
} from "./about/personal";
import {
  ISkill,
  skillsBockchainToolsEn,
  skillsBockchainToolsEs,
  skillsCollaborativeToolsEn,
  skillsCollaborativeToolsEs,
  skillsDBToolsEn,
  skillsDBToolsEs,
  skillsDesignToolsEn,
  skillsDesignToolsEs,
  skillsSoftwareToolsEn,
  skillsSoftwareToolsEs,
} from "./about/skills";

export interface IAbout {
  title: string;
  title2: string;
  subtitle: string;
  personalInfo: IPersonalInfo;
  achievements: IAchievement;
  education: IEducation;
  experience: IExperience;
  skills: ISkill;
  skillsDB: ISkill;
  skillsCollaborativeTools: ISkill;
  skillsDesignTools: ISkill;
  skillsBlockchain: ISkill;
}

export const aboutContentEn: IAbout = {
  title: "ABOUT",
  title2: "ME",
  subtitle: "resume",
  personalInfo: personalInfoEn,
  achievements: achievementsEn,
  education: educationEn,
  experience: experienceEn,
  skills: skillsSoftwareToolsEn,
  skillsDB: skillsDBToolsEn,
  skillsCollaborativeTools: skillsCollaborativeToolsEn,
  skillsDesignTools: skillsDesignToolsEn,
  skillsBlockchain: skillsBockchainToolsEn,
};

export const aboutContentEs: IAbout = {
  title: "SOBRE",
  title2: "MI",
  subtitle: "resumen",
  personalInfo: personalInfoEs,
  achievements: achievementsEs,
  education: educationEs,
  experience: experienceEs,
  skills: skillsSoftwareToolsEs,
  skillsDB: skillsDBToolsEs,
  skillsCollaborativeTools: skillsCollaborativeToolsEs,
  skillsDesignTools: skillsDesignToolsEs,
  skillsBlockchain: skillsBockchainToolsEs,
};
