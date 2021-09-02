import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Stats() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>STATS PAGE WORKING</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loading: {
    width: 200,
    height: 200,
    top: '45%',
    left: '40%',
  },
  title: {
    fontSize: 26,
    paddingLeft: 20,
    marginTop: -25,
  },
  names: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    fontSize: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  deleteButton: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F6655B',
    borderRadius: 10,
    fontSize: 50,
    marginTop: 30,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 120,
  },
});
