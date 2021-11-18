import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconNext,
  IconRateUs,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const MiniList = ({icon, name, desc, type}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    if (icon === 'rate-us') {
      return <IconRateUs />;
    }
    return <IconEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Icon />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default MiniList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },

  content: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
