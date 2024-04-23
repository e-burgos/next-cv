/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { StyleSheet, View, Text, Image, Link } from '@react-pdf/renderer';

import { IMainContent } from '@/data/main';
import Achievements from './Achievements';
import List, { Item } from './List';

const styles = StyleSheet.create({
  rowPage: {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  leftColumn: {
    flexDirection: 'column',
    width: '30%',
    paddingTop: '30px',
    '@media max-width: 400': {
      width: '100%',
    },
    '@media orientation: landscape': {
      width: '30%',
    },
  },
  rightColumn: {
    flexDirection: 'column',
    width: '70%',
    paddingTop: '30px',
    '@media max-width: 400': {
      width: '100%',
    },
    '@media orientation: landscape': {
      width: '70%',
    },
  },
  image: {
    borderRadius: '50%',
    marginBottom: '15px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '10px',
    gap: '5px',
    paddingLeft: '5px',
    borderLeft: '4px solid #69b9ff',
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Lato',
  },
  blackText: {
    fontSize: 10,
    fontFamily: 'Lato Bold',
  },
  separator: {
    height: 1,
    marginBottom: '20px',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    alignItems: 'center',
    width: '100%',
    height: '30px',
    marginTop: '20px',
  },
  socialItem: {
    height: '100%',
    border: '4px solid #fff',
    borderRadius: '50%',
  },
});

interface Props {
  content: IMainContent;
}

const AboutMe: FC<Props> = ({ content }) => {
  return (
    <View style={styles.rowPage}>
      <View style={styles.leftColumn}>
        <Image src={content.profile.profileImage} style={styles.image} />
        <Achievements content={content.about.achievements} />
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.row}>
          <Text
            style={styles.title}
          >{`${content.about.title} ${content.about.title2}`}</Text>
        </View>
        <Text style={styles.text}>{content.profile.profileDescriptions}</Text>

        <View style={styles.separator} />
        <View style={styles.row}>
          <Text
            style={styles.title}
          >{`${content.about.personalInfo.title.toLocaleUpperCase()}`}</Text>
        </View>
        <List>
          {content.about.personalInfo.data.map((item, index) => (
            <Item key={index}>
              <Text style={styles.blackText}>{`${item.meta}: `}</Text>
              {item.metaInfo}
            </Item>
          ))}
        </List>
        <View style={styles.socialIcons}>
          {content.profile.profileBtn.map((btn) => (
            <Link key={btn.iconName} src={btn.link}>
              <Image style={styles.socialItem} src={btn.iconLink} />
            </Link>
          ))}
        </View>
      </View>
    </View>
  );
};

export default AboutMe;
