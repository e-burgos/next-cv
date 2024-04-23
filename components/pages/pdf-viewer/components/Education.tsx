import React, { FC } from 'react';
import { Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import { IEducation, IEducationItem } from '@/data/about/education';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  entryContainer: {
    marginBottom: '20px',
    padding: '10px',
    borderLeft: '1px solid #3b99d9',
    borderBottom: '1px solid #69b9ff',
    borderBottomLeftRadius: '10px',
    borderTopRightRadius: '20px',
    backgroundColor: '#f7f7f7',
  },
  intitute: {
    padding: '2px 5px',
    borderTopRightRadius: '50%',
    backgroundColor: '#69b9ff',
    color: 'white',
    fontSize: 10,
    fontFamily: 'Lato Bold',
    marginBottom: '10px',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  leftRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '5px',
    marginBottom: '5px',
  },
  column: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  details: {
    fontFamily: 'Lato Italic',
    fontSize: 10,
    lineHeight: 1.5,
  },
});

interface EducationEntryProps {
  content: IEducationItem;
}

const EducationEntry: FC<EducationEntryProps> = ({ content }) => {
  const institution = `${content.institute} - ${content.year}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.column}>
        <Text style={styles.intitute}>{institution}</Text>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.leftRow}>
          <Link style={styles.title} href={content.infoLink}>
            <Text style={styles.title}>{content.degree}</Text>
          </Link>
          {content.certificateLink && <Text style={styles.title}>{`•`}</Text>}
          <Link style={styles.title} href={content.certificateLink}>
            <Text style={styles.title}>
              {content.certificateLabel?.toLocaleUpperCase()}
            </Text>
          </Link>
        </View>
      </View>
      <Text style={styles.details}>{content.details}</Text>
    </View>
  );
};

interface IEducationProps {
  content: IEducation;
}

const Education: FC<IEducationProps> = ({ content }) => {
  return (
    <View style={styles.container}>
      {content.data.map((item, index) => (
        <EducationEntry key={index} content={item} />
      ))}
    </View>
  );
};

export default Education;
