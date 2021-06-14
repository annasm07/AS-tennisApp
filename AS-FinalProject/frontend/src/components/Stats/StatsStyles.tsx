import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  statsFullBar: {
    width: '90%',
    paddingHorizontal: 20,
    alignSelf: 'center',
    backgroundColor: '#E5E5E5',
    height: 14,
    display: 'flex',
    flexDirection: 'row',
  },
  statsPlayer1Bar: {
    width: '50%',
    paddingHorizontal: 20,
    alignSelf: 'center',
    backgroundColor: '#F5BF00',
    height: 14,
  },
  statsPlayer2Bar: {
    width: '50%',
    paddingHorizontal: 20,
    alignSelf: 'center',
    backgroundColor: '#F7A65B',
    height: 14,
  },
});
export default styles;
