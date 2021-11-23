import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DummyMenu1} from '../../assets';
import {Header, List} from '../../components';

const Menu = ({navigation}) => {
  return (
    <View>
      <Header title="Menu" type="dark" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <List
            image={DummyMenu1}
            title="Nasi Goreng Special"
            desc="Nasi Goreng special dengan telur"
            price="Rp 30.000"
            rate="5.0"
            onPress={() => navigation.navigate('Detail')}
          />
          <List
            image={DummyMenu1}
            title="Nasi Goreng Special"
            desc="Nasi Goreng special dengan telur"
            price="Rp 30.000"
            rate="5.0"
          />
          <List
            image={DummyMenu1}
            title="Nasi Goreng Special"
            desc="Nasi Goreng special dengan telur"
            price="Rp 30.000"
            rate="5.0"
          />
          <List
            image={DummyMenu1}
            title="Nasi Goreng Special"
            desc="Nasi Goreng special dengan telur"
            price="Rp 30.000"
            rate="5.0"
          />
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
