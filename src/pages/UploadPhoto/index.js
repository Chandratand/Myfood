import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </TouchableOpacity>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.address}>Jalan Thamrin Nomor 88</Text>
        </View>
        <Button title="Upload and Continue" />
        <Gap height={30} />
        <Link title="Skip for this" align="center" />
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  avatarWrapper: {
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border,
  },
  name: {
    marginTop: 26,
    marginBottom: 4,
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  address: {
    fontFamily: fonts.primary[400],
    fontSize: 18,
    color: colors.text.secondary,
  },
});
