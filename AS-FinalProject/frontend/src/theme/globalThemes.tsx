import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  buttonYellow: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F5BF00',
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 50,
    marginTop: 30,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 120,
  },
  buttonGray: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 50,
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: 100,
  },
  buttonDisabled: {
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    borderColor: '#7a7a7a',
    borderWidth: 1,
    fontSize: 50,
    marginTop: 30,
    marginHorizontal: 10,
    paddingVertical: 10,
    width: 100,
  },
  buttonActive: {
    alignItems: 'center',
    backgroundColor: '#F5BF00',
    borderRadius: 20,
    borderColor: '#7a7a7a',
    borderWidth: 1,
    fontSize: 50,
    marginTop: 30,
    marginHorizontal: 10,
    paddingVertical: 10,
    width: 100,
  },
  grayText: {
    color: '#7A7A7A',
  },
  messageError: {
    marginTop: 10,
    color: 'red',
    fontSize: 12,
    marginLeft: 50,
  },
});

export default styles;
