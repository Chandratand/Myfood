import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Gap, Header, List, UserProfile} from '../../components';
import {colors} from '../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserProfile
          photo={DummyUser}
          name="Shayna Melinda"
          address="Jalan Thamrin Nomor 88"
        />
        <Gap height={16} />
        <List
          icon="edit-profile"
          name="Edit Profile"
          desc="Last updated yesterday"
          type="next"
        />
        <List
          icon="language"
          name="language"
          desc="Available 12 languages"
          type="next"
        />
        <List
          icon="rate-us"
          name="Give Us Rate"
          desc="On Google Play"
          type="next"
        />
        <List
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
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
