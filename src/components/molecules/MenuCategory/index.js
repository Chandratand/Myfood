import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {ILCatNasi} from '../../../assets';
import {colors, fonts} from '../../../utils';

const windowWidth = Dimensions.get('window').width;

const MenuCategory = () => {
  return (
    <View style={styles.container}>
      <ILCatNasi style={styles.illustration} />
      <Text style={styles.category}>Nasi</Text>
    </View>
  );
};

export default MenuCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
    paddingHorizontal: 23,
    paddingVertical: 17,
    width: (windowWidth - 60) / 3,
    height: (windowWidth - 60) / 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    marginBottom: 10,
  },
  category: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
