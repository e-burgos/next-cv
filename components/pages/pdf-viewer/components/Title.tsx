import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

interface IProps {
  children: React.ReactNode;
}

const Title = ({ children }: IProps) => (
  <Text style={styles.title}>{children}</Text>
);

export default Title;
