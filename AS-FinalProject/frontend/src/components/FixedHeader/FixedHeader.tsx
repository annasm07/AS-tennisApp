import * as React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function FixedHeader() {
  return (
    <SafeAreaView style={styles.header}>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require('../../images/ball-logo.png')}
        />
      </TouchableOpacity>
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
  icon: {
    width: 50,
    height: 50,
    marginLeft: 105,
    marginBottom: -30,
    left: '40%',
  },
});

export default FixedHeader;
