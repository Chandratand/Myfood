import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap, MiniList, UserProfile} from '../../components';
import {colors, fonts} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Profile</Text>
        <Gap height={20} />
        <UserProfile
          photo={DummyUser}
          name="Shayna Melinda"
          address="Jalan Thamrin Nomor 88"
        />
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
