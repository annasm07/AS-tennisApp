import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 140,
    width: 140,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 15,
    textAlign: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  column: {
    marginLeft: '5%',
    marginTop: 10,
  },
  textGreen: {
    textAlign: 'center',
    fontSize: 28,
    color: '#8CE576',
  },
  textYellow: {
    fontSize: 28,
    textAlign: 'center',
    color: '#F5BF00',
  },
  textRed: {
    fontSize: 28,
    textAlign: 'center',
    color: '#F68A5B',
  },
});

export default styles;
