import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  ILCatDessert,
  ILCatFastFood,
  ILCatJuiceAndSoda,
  ILCatMie,
  ILCatNasi,
  ILCatTeaAndCoffee,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const windowWidth = Dimensions.get('window').width;

const MenuCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'nasi') {
      return <ILCatNasi />;
    }
    if (category === 'mie') {
      return <ILCatMie />;
    }
    if (category === 'fastfood') {
      return <ILCatFastFood />;
    }
    if (category === 'dessert') {
      return <ILCatDessert />;
    }
    if (category === 'tea and coffee') {
      return <ILCatTeaAndCoffee />;
    }
    if (category === 'juice and soda') {
      return <ILCatJuiceAndSoda />;
    }
    return <ILCatNasi />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon style={styles.illustration} />
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default MenuCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
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
    paddingHorizontal: -23,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
});
