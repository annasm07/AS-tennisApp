import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import LiveResult from '../LiveResult/LiveResult';
import ChooseServing from '../ChooseServe/ChooseServing';
import FixedHeaderMatch from '../FixedHeaderMatch/FixedHeaderMatch';
import PointFlow from '../PointFlow/PointFlow';

const Stack = createStackNavigator();

export default function whoServes() {
  return (
    <>
      <FixedHeaderMatch />
      <SafeAreaView>
        <LiveResult />
      </SafeAreaView>
      <Stack.Navigator
        initialRouteName="ChooseServe"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="ChooseServe"
          component={ChooseServing}
          options={{title: ' '}}
        />
        <Stack.Screen name="PointFlow" component={PointFlow} />
      </Stack.Navigator>
    </>
  );
}
