import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Rate} from '../../components';
import {colors, fonts} from '../../utils';

const Detail = ({navigation, route}) => {
  const dataMenu = route.params;
  return (
    <View style={styles.page}>
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={{uri: dataMenu.image}}
          style={styles.image}
          imageStyle={{borderRadius: 20}}>
          <Button
            type="icon-only"
            icon="back-bg"
            onPress={() => navigation.goBack()}
          />
        </ImageBackground>
      </View>
      <Gap height={16} />
      <View style={styles.container}>
        <View>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{dataMenu.title}</Text>
            <Gap width={5} />
            <Rate rate={dataMenu.rate} />
          </View>
          <Text style={styles.price}>{dataMenu.price}</Text>
          <Text style={styles.desc}>{dataMenu.full_desc}</Text>
        </View>
        <Button title="Pesan" />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageWrapper: {paddingHorizontal: 15, paddingTop: 25},
  image: {
    height: 220,
    paddingTop: 10,
    paddingLeft: 10,
  },
  container: {
    paddingHorizontal: 26,
    marginBottom: 30,
    flex: 1,
    justifyContent: 'space-between',
  },
  titleWrapper: {flexDirection: 'row', marginBottom: 6},
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
  price: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.tertiary,
    marginBottom: 6,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 16,
    color: colors.text.secondary,
  },
});
