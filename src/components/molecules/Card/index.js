import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {colors} from '../../../utils';

const Card = ({card}) => {
  return (
    <View style={styles.container}>
      <Image source={card} style={styles.container} />
    </View>
  );
};
const cardMaxWidth = Dimensions.get('window').width - 32;

export default Card;

const styles = StyleSheet.create({
  container: {
    maxWidth: cardMaxWidth,
    maxHeight: cardMaxWidth / 2.5,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
});
