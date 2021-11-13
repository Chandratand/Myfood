import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    paddingVertical: 10,
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    borderRadius: 10,
  }),
  title: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color:
      type === 'secondary'
        ? colors.button.secondary.type
        : colors.button.primary.text,
    textAlign: 'center',
  }),
});
