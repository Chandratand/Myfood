import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const index = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  title: (size, align) => ({
    fontSize: size,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
