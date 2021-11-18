import React from 'react';
import {Text, ImageBackground, StyleSheet, View} from 'react-native';
import {DummyCafe1, DummyCafe2, DummyCafe3, ILCafeBG} from '../../assets';
import {fonts, colors} from '../../utils';
import {List} from '../../components';

const Location = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILCafeBG} style={styles.background}>
        <Text style={styles.title}>Our Resto and Cafe</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <List
          image={DummyCafe1}
          title="Cemara Foodie Cafe"
          desc="Jalan Asoka No 88 Cemara Asri, Medan"
        />
        <List
          image={DummyCafe2}
          title="Jakarta PIK Foddie Cafe"
          desc="Jalan Asoka No 88 Cemara Asri, Medan"
        />
        <List
          image={DummyCafe3}
          title="Tanggerang Foddie Cafe"
          desc="Jalan Asoka No 88 Cemara Asri, Medan"
        />
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts.primary.normal,
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 18,
    color: colors.white,
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -30,
    flex: 1,
    paddingTop: 14,
    paddingHorizontal: 16,
  },
});
