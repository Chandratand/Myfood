import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILNullPhoto} from '../../assets';
import {Gap, MiniList, UserProfile} from '../../components';
import {Fire} from '../../config';
import {colors, fonts, getData, showError} from '../../utils';

const Profile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    address: '',
    photo: ILNullPhoto,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      if (res.photo !== 'null') {
        data.photo = {uri: res.photo};
      } else {
        data.photo = ILNullPhoto;
      }
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('GetStarted');
      })
      .catch(error => {
        showError(error.message);
      });
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Profile</Text>
        <Gap height={20} />
        {profile.fullName.length > 0 && (
          <UserProfile
            photo={profile.photo}
            name={profile.fullName}
            address={profile.address}
          />
        )}
        <Gap height={16} />
        <MiniList
          icon="edit-profile"
          name="Edit Profile"
          desc="Last updated yesterday"
          type="next"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <MiniList
          icon="language"
          name="language"
          desc="Available 12 languages"
          type="next"
        />
        <MiniList
          icon="rate-us"
          name="Give Us Rate"
          desc="On Google Play"
          type="next"
        />
        <MiniList
          icon="help"
          name="Sign Out"
          desc="Log out from this account"
          type="next"
          onPress={signOut}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.primary.normal,
    fontSize: 20,
    color: colors.text.primary,
    textTransform: 'capitalize',
    paddingTop: 30,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
