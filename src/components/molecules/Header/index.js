import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../..';
import {IconBackDark} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.title}>Daftar Akun</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
