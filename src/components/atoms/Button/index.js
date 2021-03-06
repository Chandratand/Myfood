import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
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
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },

  title: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color:
      type === 'secondary'
        ? colors.button.secondary.type
        : colors.button.primary.text,
    textAlign: 'center',
  }),
  disableText: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.button.disable.text,
  },
});
