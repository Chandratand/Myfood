import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    address: '',
  });
  const [photo, setPhoto] = useState(ILNullPhoto);
  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photoForDB = res?.photo?.length > 1 ? res.photo : ILNullPhoto;
      const tempPhoto = res?.photo?.length > 1 ? {uri: res.photo} : ILNullPhoto;
      setPhoto(tempPhoto);
      setProfile(data);
    });
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={photo} style={styles.photo} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.address}>{profile.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
