import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../theme/globalThemes';

const LogIn = () => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Full Name"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Email"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />
      <TouchableOpacity
        style={globalStyles.buttonYellow}
        onPress={() => console.log('pressed login')}>
        <Text>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.buttonYellow}>
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

export default LogIn;
