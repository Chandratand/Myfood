import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts, showError, storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import {useDispatch} from 'react-redux';
const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});

    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});
        setForm('reset');
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(error => {
        dispatch({type: 'SET_LOADING', value: false});
        showError(error.message);
      });
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogo />
        <Text style={styles.title}>Masuk dan temukan makananmu</Text>
        <Input
          label="Email Address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={40} />
        <Input
          label="Password"
          secureTextEntry
          value={form.password}
          onChangeText={value => setForm('password', value)}
        />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    backgroundColor: colors.white,
  },
  title: {
    maxWidth: 210,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginVertical: 40,
  },
});
