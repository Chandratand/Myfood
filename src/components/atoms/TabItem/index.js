import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconHome,
  IconMessages,
  IconProfile,
  IconHomeActive,
  IconMessagesActive,
  IconProfileActive,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Profile') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
