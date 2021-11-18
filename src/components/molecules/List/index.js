import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Rate} from '../..';
import {colors, fonts} from '../../../utils';

const List = ({image, title, desc, price, rate}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.wrapper}>
        <View style={styles.rateWrapper}>
          <Text style={styles.title}>{title}</Text>
          {rate && <Rate rate={rate} />}
        </View>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default List;

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
    maxWidth: '85%',
  },
  rateWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
