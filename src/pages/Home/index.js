import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyCard} from '../../assets';
import {
  Card,
  Gap,
  HomeProfile,
  MenuCategory,
  RatedMenu,
} from '../../components';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={30} />
        <HomeProfile onPress={() => navigation.navigate('Profile')} />
        <Text style={styles.welcome}>
          Hai Shayna Meliana! Mau makan apa hari ini?
        </Text>
        <Gap height={16} />
        <View style={styles.category}>
          <MenuCategory />
          <MenuCategory />
          <MenuCategory />
        </View>
        <Gap height={10} />
        <View style={styles.category}>
          <MenuCategory />
          <MenuCategory />
          <MenuCategory />
        </View>
        <Gap height={30} />
        <Card card={DummyCard} />
        <Text style={styles.label}>Favorite Menu</Text>
        <RatedMenu />
        <RatedMenu />
        <RatedMenu />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  welcome: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 220,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
