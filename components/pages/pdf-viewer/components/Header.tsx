/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { Link, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { IProfileContent } from '@/data/profile';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#3b99d9',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
    marginTop: '-20px',
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
    fontSize: 24,
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

interface IHeaderProps {
  content: IProfileContent;
}

const Header: FC<IHeaderProps> = ({ content }) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{content.profileTitleName}</Text>
      <Text style={styles.subtitle}>{content.profileDesignation}</Text>
    </View>
    <View style={styles.socialRow}>
      <Text style={styles.subtitle}>{'WEB2 / WEB3'}</Text>

      {/* {content.profileBtn.map((btn) => (
        <Link key={btn.iconName} src={btn.link}>
          <Image style={styles.socialImage} src={btn.iconLink} />
        </Link>
      ))} */}
    </View>
  </View>
);

export default Header;
