import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyCard, DummyMenu1, DummyMenu2, DummyMenu3} from '../../assets';
import {Card, Gap, HomeProfile, List, MenuCategory} from '../../components';
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
          <MenuCategory
            category="nasi"
            onPress={() => navigation.navigate('Menu')}
          />
          <MenuCategory category="mie" />
          <MenuCategory category="fastfood" />
        </View>
        <Gap height={10} />
        <View style={styles.category}>
          <MenuCategory category="tea and coffee" />
          <MenuCategory category="juice and soda" />
          <MenuCategory category="dessert" />
        </View>
        <Gap height={30} />
        <Card card={DummyCard} />
        <Text style={styles.label}>Favorite Menu</Text>
        <List
          image={DummyMenu1}
          title="Nasi Goreng Special"
          desc="Nasi Goreng special dengan telur"
          price="Rp 30.000"
          rate="5.0"
        />
        <List
          image={DummyMenu2}
          title="Nasi Goreng Special"
          desc="Nasi Goreng special dengan telur"
          price="Rp 30.000"
          rate="5.0"
        />
        <List
          image={DummyMenu3}
          title="Nasi Goreng Special"
          desc="Nasi Goreng special dengan telur"
          price="Rp 30.000"
          rate="5.0"
        />
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
  },
});
