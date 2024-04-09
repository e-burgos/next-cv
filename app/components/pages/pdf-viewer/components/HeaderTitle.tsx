import React, { FC } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#3b99d9',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    marginTop: '-20px',
    marginBottom: '20px',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  socialRow: {
    flexDirection: 'row',
    flexGrow: 2,
    alignSelf: 'flex-end',
    gap: '5px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '25px',
    marginBottom: 5,
  },
  socialImage: {
    height: '100%',
    border: '4px solid #fff',
    borderRadius: '50%',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

interface IHeaderTitleProps {
  title: string;
  subTitle?: string;
  text?: string;
  isBreak?: boolean;
}

const HeaderTitle: FC<IHeaderTitleProps> = ({
  title,
  subTitle,
  text,
  isBreak,
}) => (
  <View break={isBreak} style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{title}</Text>
      {subTitle && <Text style={styles.subtitle}>{subTitle}</Text>}
    </View>
    {text && (
      <View style={styles.socialRow}>
        <Text style={styles.link}>{text}</Text>
      </View>
    )}
  </View>
);

export default HeaderTitle;
