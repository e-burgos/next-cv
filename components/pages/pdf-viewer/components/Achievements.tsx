/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { IAchievement, IAchievementItem } from '@/data/about/achievements';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '20px',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '10px',
    borderLeft: '5px solid #69b9ff',
    boxSizing: 'border-box',
    padding: '5px',
    width: '100%',
    minHeight: '40px',
    backgroundColor: '#f0f0f0',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '85%',
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 12,
  },
  achievements: {
    fontFamily: 'Lato',
    fontSize: 8,
  },
});

interface IAchievementsEntryProps {
  content: IAchievementItem;
}

const AchievementsEntry: FC<IAchievementsEntryProps> = ({ content }) => (
  <View style={styles.itemContainer}>
    <View style={styles.leftColumn}>
      <Text style={styles.title}>{`+${content.title}`}</Text>
    </View>
    <View style={styles.rightColumn}>
      <Text
        style={styles.achievements}
      >{`${content.subTitle1} ${content.subTitle2}`}</Text>
    </View>
  </View>
);

interface IAchievementsProps {
  content: IAchievement;
  isBreak?: boolean;
}

const Achievements: FC<IAchievementsProps> = ({ content, isBreak }) => (
  <View style={styles.container} break={isBreak}>
    {content.data.map((item, index) => (
      <AchievementsEntry key={index} content={item} />
    ))}
  </View>
);

export default Achievements;
