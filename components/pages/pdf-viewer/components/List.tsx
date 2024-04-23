/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: '10px',
    gap: '5px',
    alignItems: 'center',
  },
  bulletPoint: {
    width: '10px',
    height: '10px',
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Lato',
  },
});

interface IProps {
  children: React.ReactNode;
}

const List: FC<IProps> = ({ children }) => children;

export const Item: FC<IProps> = ({ children }) => (
  <View style={styles.item}>
    <Image src="assets/img/blue-bullet.png" style={styles.bulletPoint} />
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

export default List;
