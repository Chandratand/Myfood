import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyMenu4} from '../../assets';
import {Button, Gap, Rate} from '../../components';
import {colors, fonts} from '../../utils';

const Detail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.imageWrapper}>
        <ImageBackground
          source={DummyMenu4}
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
            <Text style={styles.title}>Nasi Goreng Special</Text>
            <Gap width={5} />
            <Rate rate="5.0" />
          </View>
          <Text style={styles.price}>Rp20.000</Text>
          <Text style={styles.desc}>
            Lorem Ipsum is simply dummy text of the printing and ty setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </Text>
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
