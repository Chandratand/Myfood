import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyCard} from '../../assets';
import {Card, Gap, HomeProfile, List, MenuCategory} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, getData} from '../../utils';

const Home = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [category, setCategory] = useState([]);
  const [favoriteMenu, setFavoriteMenu] = useState([]);
  useEffect(() => {
    getUserFullName();
    getCategoryMenu();
    getFavoriteMenu();
  }, []);

  const getFavoriteMenu = () => {
    Fire.database()
      .ref('menu/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setFavoriteMenu(filterData);
        }
      })
      .catch(error => {
        showError(error.message);
      });
  };

  const getUserFullName = () => {
    getData('user').then(res => {
      setFullName(res.fullName);
    });
  };
  const getCategoryMenu = () => {
    //mengambil category_menu dari database
    Fire.database()
      .ref('category_menu/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setCategory(filterData);
        }
      })
      .catch(error => {
        showError(error.message);
      });
  };

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
                onPress={() => navigation.navigate('Menu', item)}
              />
            );
          })}
        </View>
        <Gap height={30} />
        <Card card={DummyCard} />
        <Text style={styles.label}>Favorite Menu</Text>
        {favoriteMenu.map(menu => {
          return (
            <List
              key={menu.id}
              image={{uri: menu.image}}
              title={menu.title}
              desc={menu.desc}
              price={menu.price}
              rate={menu.rate}
              onPress={() => navigation.navigate('Detail', menu)}
            />
          );
        })}
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
