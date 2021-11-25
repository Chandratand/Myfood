import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Loading} from './components';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      {loading && <Loading />}
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
