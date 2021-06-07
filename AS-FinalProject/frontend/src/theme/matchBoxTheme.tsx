import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  matchBox: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    marginBottom: 5,
  },
  player1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#7A7A7A',
    borderBottomWidth: 1,
    paddingVertical: 8,
  },
  player2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  result: {
    letterSpacing: 20,
    fontSize: 20,
  },
  dateBox: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
