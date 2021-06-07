import React, {useState, useEffect} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import globalStyles from '../../theme/globalThemes';
import {signUp} from '../../redux/actions/actionCreators';

const SignUp = ({navigation, dispatch}: any) => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [playerName, onChangePlayerName] = useState('');
  const [isPlayer, setIsPlayer] = useState(true);
  const [registerButttonDisabled, setRegisterButttonDisabled] = useState(true);

  function handleSignUp() {
    const NewUser = {
      name,
      email,
      password,
      player: isPlayer,
      playerName: playerName || name,
    };
    dispatch(signUp(NewUser));
    navigation.navigate('LogInPage');
  }
  useEffect(() => {
    if (name || email || password || playerName) {
      setRegisterButttonDisabled(false);
    } else {
      setRegisterButttonDisabled(true);
    }
  }, [name, email, password, playerName]);

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder="Full Name"
        value={name}
        autoCapitalize="words"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        autoCapitalize="none"
      />
      <View style={styles.label}>
        <Text style={globalStyles.grayText}>Are you a Player or Coach?</Text>
      </View>
      {isPlayer ? (
        <View style={styles.userType}>
          <Pressable
            style={globalStyles.buttonActive}
            onPress={() => setIsPlayer(true)}>
            <Text>Player</Text>
          </Pressable>
          <Pressable
            style={globalStyles.buttonDisabled}
            onPress={() => setIsPlayer(false)}>
            <Text style={globalStyles.grayText}>Coach</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <View style={styles.userType}>
            <Pressable
              style={globalStyles.buttonDisabled}
              onPress={() => setIsPlayer(true)}>
              <Text style={globalStyles.grayText}>Player</Text>
            </Pressable>
            <Pressable
              style={globalStyles.buttonActive}
              onPress={() => setIsPlayer(false)}>
              <Text>Coach</Text>
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
      <TouchableOpacity
        disabled={registerButttonDisabled}
        style={globalStyles.buttonYellow}
        onPress={handleSignUp}>
        <Text style={registerButttonDisabled && globalStyles.grayText}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.buttonGray}
        onPress={() => navigation.navigate('LogInPage')}>
        <Text>Log in</Text>
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
});

function mapStateToProps({user}: any) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(SignUp);
