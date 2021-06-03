import React, {useState} from 'react';
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

const LogIn = ({player, dispatch}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogIn() {
    dispatch(logIn(email, password)).then(console.log('component ->', player));
  }
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>LogIn</Text>
      <TextInput
        style={styles.input}
        onChangeText={user => setEmail(user)}
        placeholder="Email"
        defaultValue={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={pass => setPassword(pass)}
        defaultValue={password}
        placeholder="Password"
        keyboardType="numeric"
      />
      <TouchableOpacity style={globalStyles.buttonYellow} onPress={handleLogIn}>
        <Text>Log in</Text>
      </TouchableOpacity>
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
});

function mapStateToProps({player}: any) {
  return {
    player,
  };
}

export default connect(mapStateToProps)(LogIn);