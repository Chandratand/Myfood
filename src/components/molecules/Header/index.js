import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../atoms';
import {IconBackDark} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Header = ({title, onPress, icon}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <TouchableOpacity>
          <IconBackDark onPress={onPress} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {icon && <Gap width={24} />}
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
