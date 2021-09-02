import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../../theme/globalThemes';
import {logIn} from '../../redux/actions/actionCreators';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LogIn = () => {
  const tokens = useSelector((store: any) => store.tokens);
  const error = useSelector((store: any) => store.error);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [registerButttonDisabled, setRegisterButttonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    tokens[0] !== undefined && navigation.navigate('FixedNavigator');
  }, [tokens, navigation]);

  useEffect(() => {
    error && setErrorMessage(true);
  }, [error]);

  function handleLogIn() {
    dispatch(logIn(email, password));
  }
  useEffect(() => {
    if (email && password) {
      setRegisterButttonDisabled(false);
    } else {
      setRegisterButttonDisabled(true);
    }
  }, [email, password]);
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholder="Email"
        defaultValue={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={pass => setPassword(pass)}
        defaultValue={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize="none"
      />
      {errorMessage && (
        <View>
          <Text style={globalStyles.messageError}>
            Email or password incorrect
          </Text>
        </View>
      )}
      <TouchableOpacity
        disabled={registerButttonDisabled}
        style={
          registerButttonDisabled ? styles.disabled : globalStyles.buttonYellow
        }
        onPress={handleLogIn}>
        <Text
          style={registerButttonDisabled && globalStyles.grayText}
          testID="LogInButton">
          Log in
        </Text>
      </TouchableOpacity>
      <Text style={styles.noAccount}>
        Don't have an account yet?{' '}
        <Text
          style={styles.signUpText}
          onPress={() => navigation.navigate('SignUpPage')}>
          Sign up{' '}
        </Text>
        here!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    top: '32%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    padding: 30,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 20,
    fontSize: 16,
    marginHorizontal: 40,
    borderColor: '#7A7A7A',
  },
  disabled: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F5BF00',
    opacity: 0.5,
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 50,
    marginTop: 30,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 120,
  },
  signedUp: {
    color: '#70BA5D',
    alignSelf: 'center',
    marginTop: 60,
  },
  noAccount: {
    color: '#292929',
    textAlign: 'center',
    marginTop: 30,
  },
  signUpText: {
    textDecorationLine: 'underline',
  },
});

export default LogIn;
