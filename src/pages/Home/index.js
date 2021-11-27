import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyCard, DummyMenu1, DummyMenu2, DummyMenu3} from '../../assets';
import {Card, Gap, HomeProfile, List, MenuCategory} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {Fire} from '../../config';

const Home = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getData('user').then(res => {
      console.log('data user : ', res);
      setFullName(res.fullName);
    });

    //mengambil category_menu dari database
    Fire.database()
      .ref('category_menu/')
      .once('value')
      .then(res => {
        console.log('data : ', res.val());
        if (res.val()) {
          setCategory(res.val());
        }
      })
      .catch(error => {
        showError(error.message);
      });
  }, []);
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={30} />
        <HomeProfile onPress={() => navigation.navigate('Profile')} />
        <Text style={styles.welcome}>
          Hai {fullName}! Mau makan apa hari ini?
        </Text>
        <Gap height={6} />
        <View style={styles.category}>
          {category.map(item => {
            return (
              <MenuCategory
                key={item.key}
                category={item.category}
                onPress={() => navigation.navigate('Menu')}
              />
            );
          })}
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
          onPress={() => navigation.navigate('Detail')}
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
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
  },
});
