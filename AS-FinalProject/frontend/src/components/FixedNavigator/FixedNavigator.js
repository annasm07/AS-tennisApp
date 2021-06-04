import * as React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard/Dashboard';
import Stats from '../Stats/Stats';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          height: 100,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={styles.icon}
                source={require('../../images/home-icon.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                style={styles.icon}
                source={require('../../images/stats-icon.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    bottom: '5%',
  },
});
