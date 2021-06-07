import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, StyleSheet} from 'react-native';
import ServeButtons from '../Serve/Serve';
import PointEnder from '../PointEnder/PointEnder';

const Stack = createStackNavigator();

export default function Stats() {
  return (
    <>
      <View style={styles.playersNames}>
        <Text style={styles.label}>A. SALA</Text>
        <Text style={styles.label}> S. WILLIAMS</Text>
      </View>
      <Stack.Navigator
        initialRouteName="ServeButtons"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="ServeButtons"
          component={ServeButtons}
          options={{title: ' '}}
        />
        <Stack.Screen name="PointEnder" component={PointEnder} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  playersNames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },
  label: {
    fontSize: 22,
  },
});
