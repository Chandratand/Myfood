import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {Portal} from 'react-native-paper';

const BottomSheet = ({show, onDismiss, enableBackdropDismiss, children}) => {
  const bottomSheetHeight = Dimensions.get('window').height * 0.5;
  const deviceWidth = Dimensions.get('window').width;
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  const [open, setOpen] = useState(show);

  const onGesture = event => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  };
  const onGestureEnd = event => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 2) {
      bottom.setValue(-bottomSheetHeight);
      setTimeout(() => {
        onDismiss();
      }, 50);
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <Pressable
        onPress={enableBackdropDismiss ? onDismiss : undefined}
        style={styles.backDrop}></Pressable>
      <Animated.View
        style={[
          styles.root,
          {
            height: bottomSheetHeight,
            bottom: bottom,
            shadowOffset: {
              height: -3,
            },
          },
          styles.common,
        ]}>
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <View style={[styles.header]}>
            <View
              style={{
                position: 'absolute',
                left: deviceWidth / 2 - 13,
                top: 5,
              }}>
              <View
                style={{width: 5, height: 1, backgroundColor: 'black'}}></View>
            </View>
          </View>
        </PanGestureHandler>
        {children}
      </Animated.View>
    </Portal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  header: {
    height: 24,
  },

  backDrop: {
    zIndex: 80,
    backgroundColor: '#002B4BB2',
  },
  common: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
});
