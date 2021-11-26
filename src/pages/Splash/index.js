import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors} from '.././../utils';
import {Fire} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          //user lagi login
          console.log('user: ', user);
          navigation.replace('MainApp');
        } else {
          //user Logout
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
