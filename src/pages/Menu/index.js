import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, List} from '../../components';
import {Fire} from '../../config';

const Menu = ({navigation, route}) => {
  const itemMenu = route.params;
  const [listMenu, setListMenu] = useState([]);

  useEffect(() => {
    callMenuByCategory(itemMenu.category);
  }, []);

  const callMenuByCategory = category => {
    Fire.database()
      .ref('menu/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(item => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });

          setListMenu(data);
        }
      });
  };

  return (
    <View>
      <Header title="Menu" type="dark" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listMenu.map(menu => {
            return (
              <List
                key={menu.key}
                image={{uri: menu.data.image}}
                title={menu.data.title}
                price={menu.data.price}
                desc={menu.data.desc}
                rate={menu.data.rate}
                onPress={() => navigation.navigate('Detail', menu.data)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
