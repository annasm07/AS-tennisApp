import * as React from 'react';
import {StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function FixedHeader() {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        style={styles.back}
        source={require('../../images/arrow-back.png')}
      />
      <Image
        style={styles.icon}
        source={require('../../images/ball-logo.png')}
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
});