/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import { ISkill, ISkillItem } from '@/data/about/skills';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '15px',
    marginBottom: '45px',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#e4e0e0',
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 8,
  },
});

interface ISkillEntryProps {
  content: ISkillItem;
}

const SkillEntry: FC<ISkillEntryProps> = ({ content }) => (
  <View style={styles.itemContainer}>
    <View style={styles.leftColumn}>
      <Link href={content.link}>
        <Image src={content.image} style={styles.image} />
      </Link>
    </View>
    <View style={styles.rightColumn}>
      <Text style={styles.title}>{content.skillName}</Text>
      <Text
        style={styles.skills}
      >{`${content.skillPercent}% (${content.frecuency})`}</Text>
    </View>
  </View>
);

interface ISkillProps {
  content: ISkill;
  isBreak?: boolean;
}

const Skills: FC<ISkillProps> = ({ content, isBreak }) => (
  <View style={styles.container} break={isBreak}>
    {content.data.map((item, index) => (
      <SkillEntry key={index} content={item} />
    ))}
  </View>
);

export default Skills;
