import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILCafeBG} from '../../assets';
import {List} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, showError} from '../../utils';

const Location = () => {
  const [location, setLocation] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('location/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setLocation(filterData);
        }
      })
      .catch(error => {
        showError(error.message);
      });
  }, []);

  return (
    <View style={styles.page}>
      <ImageBackground source={ILCafeBG} style={styles.background}>
        <Text style={styles.title}>Our Resto and Cafe</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {location.map(item => {
          return (
            <List
              key={item.id}
              image={{uri: item.image}}
              title={item.cafe}
              desc={item.address}
            />
          );
        })}
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
