import React, { FC } from 'react';
import {
  Text,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
  PageProps,
} from '@react-pdf/renderer';
import { IMainContent } from '@/data/main';

import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import HeaderTitle from './components/HeaderTitle';
import AboutMe from './components/AboutMe';

const styles = StyleSheet.create({
  page: {
    paddingTop: '50px',
    paddingBottom: '60px',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: '30px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
});

Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

interface Props extends PageProps {
  content: IMainContent;
}

const Resume: FC<Props> = (props) => (
  <Page {...props} style={styles.page}>
    <Header content={props.content.profile} />
    <View style={styles.container}>
      <AboutMe content={props.content} />
    </View>
    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      fixed
    />
  </Page>
);

const ExperienceResume: FC<Props> = (props) => (
  <Page {...props} style={styles.page}>
    <HeaderTitle
      title={`${props.content.about.experience.title}`}
      subTitle={props.content.about.experience.subtitle}
    />
    <View style={styles.container}>
      <Experience content={props.content.about.experience} />
    </View>
    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      fixed
    />
  </Page>
);

const EducationResume: FC<Props> = (props) => (
  <Page {...props} style={styles.page}>
    <HeaderTitle
      title={`${props.content.about.education.title}`}
      subTitle={props.content.about.education.subtitle}
    />
    <View style={styles.container}>
      <Education content={props.content.about.education} />
    </View>
    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      fixed
    />
  </Page>
);

const SkillsResume: FC<Props> = (props) => (
  <Page {...props} style={styles.page}>
    <HeaderTitle
      title={props.content.about.skills.title}
      subTitle={props.content.about.skills.subtitle}
    />
    <Skills content={props.content.about.skills} />

    <HeaderTitle
      title={props.content.about.skillsCollaborativeTools.title}
      subTitle={props.content.about.skillsCollaborativeTools.subtitle}
    />
    <Skills content={props.content.about.skillsCollaborativeTools} />

    <HeaderTitle
      title={props.content.about.skillsBlockchain.title}
      subTitle={props.content.about.skillsBlockchain.subtitle}
      isBreak
    />
    <Skills content={props.content.about.skillsBlockchain} />

    <HeaderTitle
      title={props.content.about.skillsDB.title}
      subTitle={props.content.about.skillsDB.subtitle}
    />
    <Skills content={props.content.about.skillsDB} />

    <HeaderTitle
      title={props.content.about.skillsDesignTools.title}
      subTitle={props.content.about.skillsDesignTools.subtitle}
    />
    <Skills content={props.content.about.skillsDesignTools} />

    <Text
      style={styles.pageNumber}
      render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      fixed
    />
  </Page>
);

interface IResumeProps {
  content: IMainContent;
}

const MainResume: FC<IResumeProps> = ({ content }) => (
  <Document
    author={content.profile.profileTitleName}
    keywords="resume, developer, software, engineer, react, javascript, typescript, nodejs, frontend, backend, fullstack, web, mobile, app, mobileapp, webapp, portfolio, cv, curriculum, vitae, esteban, burgos, estebanburgos, esteban-burgos, esteban_burgos, esteban-burgos-cv, esteban_burgos_cv, esteban-burgos-resume, esteban_burgos_resume, esteban-burgos-portfolio, esteban_burgos_portfolio, esteban-burgos-cv-resume, esteban_burgos_cv_resume, esteban-burgos-portfolio-cv, esteban_burgos_portfolio_cv, esteban-burgos-portfolio-resume, esteban_burgos_portfolio_resume, esteban-burgos-cv-portfolio, esteban_burgos_cv_portfolio, esteban-burgos-resume-portfolio, esteban_burgos_resume_portfolio"
    subject={content.profile.profileDesignation}
    title={content.profile.profileTitleName}
  >
    {/* <Resume size="A4" content={content} />
    <Resume orientation="landscape" size="A4" content={content} /> */}
    <Resume size="EXECUTIVE" content={content} />
    <ExperienceResume size="EXECUTIVE" content={content} />
    <EducationResume size="EXECUTIVE" content={content} />
    <SkillsResume size="EXECUTIVE" content={content} />
  </Document>
);

export default MainResume;
