import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Splash} from './pages';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
