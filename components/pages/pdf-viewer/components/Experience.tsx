/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { Text, View, StyleSheet, Link, Image } from '@react-pdf/renderer';
import { IExperience, IExperienceItem } from '@/data/about/experience';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  entryContainer: {
    marginBottom: '20px',
    padding: '10px',
    borderLeft: '3px solid #69b9ff',
    position: 'relative',

    borderTopRightRadius: '20px',
    backgroundColor: '#f7f7f7',
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
    marginBottom: '5px',
  },
  details: {
    fontSize: 10,
    fontFamily: 'Lato',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '90%',
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  experienceText: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
    lineHeight: 1.5,
  },
  icon: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '20px',
  },
});

interface ExperienceEntryProps {
  content: IExperienceItem;
}

const ExperienceEntry: FC<ExperienceEntryProps> = ({ content }) => {
  const title =
    `${content.companyName} | ${content.position}`?.toLocaleUpperCase();
  return (
    <View style={styles.entryContainer}>
      <Image src="assets/img/job-icon.png" style={styles.icon} />
      <View style={styles.rightColumn}>
        <Text style={styles.date}>{content.year}</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Link style={styles.title} href={content.link}>
            <Text style={styles.title}>{title}</Text>
          </Link>
        </View>
      </View>
      <Text style={styles.experienceText}>{content.details}</Text>
    </View>
  );
};

interface IExperienceProps {
  content: IExperience;
}

const Experience: FC<IExperienceProps> = ({ content }) => {
  return (
    <View style={styles.container}>
      {content.data.map((item, index) => (
        <ExperienceEntry key={index} content={item} />
      ))}
    </View>
  );
};

export default Experience;
