import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rate} from '../..';
import {DummyMenu1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedMenu = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyMenu1} style={styles.image} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Nasi Goreng Spesial</Text>
        <Text style={styles.desc}>Nasi goreng spesial dengan ayam</Text>
        <Text style={styles.price}>Rp 30.000</Text>
      </View>
      <Rate rate="5.0" style={styles.rate} />
    </View>
  );
};

export default RatedMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  wrapper: {flex: 1},
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginBottom: 3,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginBottom: 3,
  },
  price: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
