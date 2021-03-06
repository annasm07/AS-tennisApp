import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  hasNameError,
  hasEmailError,
  hasPasswordError,
} from '../../utils/validation';
import globalStyles from '../../theme/globalThemes';
import {signUp, clearError} from '../../redux/actions/actionCreators';

const SignUp = () => {
  const error = useSelector((store: any) => store.error);
  const user = useSelector((store: any) => store.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [errorMessage, setErrorMessage] = useState(false);
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [playerName, onChangePlayerName] = useState('');
  const [isPlayer, setIsPlayer] = useState(true);
  const [registerButttonDisabled, setRegisterButttonDisabled] = useState(true);

  const [nameError, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pdwError, setPdwError] = useState(false);

  function handleSignUp() {
    const NewUser = {
      name,
      email,
      password,
      player: isPlayer,
      playerName: playerName || name,
    };
    dispatch(signUp(NewUser));
  }
  useEffect(() => {
    console.log('insiiideee useEffect', user.name);
    if (user.name) {
      dispatch(clearError());
      navigation.navigate('LogInPage');
      navigation.navigate('SignUpPage');
      navigation.navigate('LogInPage');
      console.log('EOEOEOEO', user.name);
    }
  }, [user.name, dispatch, navigation]);

  useEffect(() => {
    error && setErrorMessage(true);
  }, [error]);

  useEffect(() => {
    if (name && email && password && !emailError && !pdwError) {
      setRegisterButttonDisabled(false);
    } else {
      setRegisterButttonDisabled(true);
    }
  }, [name, email, password, emailError, pdwError]);

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        onEndEditing={() => setError(() => hasNameError(name))}
        placeholder="Full Name"
        value={name}
        autoCapitalize="words"
      />
      {nameError && (
        <View>
          <Text style={globalStyles.messageError}>
            Please, add a name of at least two letters
          </Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        onEndEditing={() => setEmailError(() => hasEmailError(email))}
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
      />
      {emailError && (
        <View>
          <Text style={globalStyles.messageError}>
            E-mail format accepted is: example@example.com
          </Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        onEndEditing={() => setPdwError(() => hasPasswordError(password))}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize="none"
      />
      {pdwError && (
        <View>
          <Text style={globalStyles.messageError}>
            Your password has to be at least 5 characters long,
          </Text>
        </View>
      )}
      <View style={styles.label}>
        <Text style={globalStyles.grayText}>Are you a Player or Coach?</Text>
      </View>
      {isPlayer ? (
        <View style={styles.userType}>
          <Pressable
            style={globalStyles.buttonActive}
            onPress={() => setIsPlayer(true)}>
            <Text testID={'ChoosePlayerButton1'}>Player</Text>
          </Pressable>
          <Pressable
            style={globalStyles.buttonDisabled}
            onPress={() => setIsPlayer(false)}>
            <Text style={globalStyles.grayText} testID={'ChooseCoachButton1'}>
              Coach
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          <View style={styles.userType}>
            <Pressable
              style={globalStyles.buttonDisabled}
              onPress={() => setIsPlayer(true)}>
              <Text
                style={globalStyles.grayText}
                testID={'ChoosePlayerButton2'}>
                Player
              </Text>
            </Pressable>
            <Pressable
              style={globalStyles.buttonActive}
              onPress={() => setIsPlayer(false)}>
              <Text testID={'ChooseCoachButton2'}>Coach</Text>
            </Pressable>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangePlayerName}
            value={playerName}
            placeholder="Player Name"
            autoCapitalize="words"
          />
        </>
      )}
      {errorMessage && (
        <View>
          <Text style={globalStyles.messageError}>
            This email is already taken
          </Text>
        </View>
      )}
      <TouchableOpacity
        disabled={registerButttonDisabled}
        style={
          registerButttonDisabled ? styles.disabled : globalStyles.buttonYellow
        }
        onPress={handleSignUp}>
        <Text
          style={registerButttonDisabled && globalStyles.grayText}
          testID={'SignUp'}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.buttonGray}
        onPress={() => navigation.navigate('LogInPage')}>
        <Text testID={'LogInButton'}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    top: '20%',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    padding: 30,
  },
  userType: {
    marginTop: -20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  label: {
    marginTop: 14,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    fontSize: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 30,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textDecorationColor: '#7A7A7A',
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
});

export default SignUp;
