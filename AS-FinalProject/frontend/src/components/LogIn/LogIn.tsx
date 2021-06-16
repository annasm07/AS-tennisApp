import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import globalStyles from '../../theme/globalThemes';
import {logIn} from '../../redux/actions/actionCreators';

const LogIn = ({tokens, dispatch, navigation, user}: any) => {
  useEffect(() => {
    tokens.length === 2 && navigation.navigate('FixedNavigator');
  }, [tokens, navigation]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleLogIn() {
    dispatch(logIn(email, password));
  }
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
      <TouchableOpacity style={globalStyles.buttonYellow} onPress={handleLogIn}>
        <Text testID="LogInButton">Log in</Text>
      </TouchableOpacity>
      {user.name && <Text style={styles.signedUp}>Signed Up Successfully</Text>}
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
  signedUp: {
    color: '#70BA5D',
    alignSelf: 'center',
    marginTop: 60,
  },
});

function mapStateToProps({tokens, user}: any) {
  return {
    tokens,
    user,
  };
}

export default connect(mapStateToProps)(LogIn);
