import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import globalStyles from './src/theme/globalThemes';
import LogInPage from './src/components/LogIn/LogIn';

function LogInSignUp({navigation}: any) {
  return (
    <>
      <Image
        style={styles.icon}
        source={require('./src/images/icon-img.png')}
      />
      <SafeAreaView style={styles.body}>
        <TouchableOpacity
          style={globalStyles.buttonYellow}
          onPress={() => navigation.navigate('LogInPage')}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.buttonGray}
          onPress={() => navigation.navigate('SignUpPage')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={LogInSignUp}
          options={{title: ' '}}
        />

        <Stack.Screen name="LogInPage" component={LogInPage} />
        <Stack.Screen name="SignUpPage" component={LogInPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 170,
    height: 170,
    top: '20%',
    alignSelf: 'center',
  },
  body: {
    top: '32%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    padding: 30,
  },
});

export default App;
