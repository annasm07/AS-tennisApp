import * as React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function FixedHeaderMatch() {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.back}
          source={require('../../../images/arrow-back.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.icon}
        source={require('../../../images/ball-logo.png')}
      />
      <Image
        style={styles.iconRight}
        source={require('../../../images/three-dots.png')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: -40,
  },
  back: {
    width: 30,
    height: 30,
    alignSelf: 'flex-start',
    marginBottom: -30,
    marginTop: 10,
    marginLeft: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 102,
    marginBottom: -30,
    left: '40%',
  },
  iconRight: {
    marginTop: 14,
    marginLeft: 135,
    marginBottom: -30,
    left: '40%',
  },
});
