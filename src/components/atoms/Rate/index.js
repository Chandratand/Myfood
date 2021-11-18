import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '..';
import {IconRate} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Rate = ({rate}) => {
  return (
    <View style={styles.container}>
      <IconRate />
      <Text style={styles.text}>{rate}</Text>
      <Gap width={14} />
    </View>
  );
};

export default Rate;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
