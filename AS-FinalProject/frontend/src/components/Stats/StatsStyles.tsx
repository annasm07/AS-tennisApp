import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  stats: {
    marginVertical: 10,
  },
  statInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  statsFullBar: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#E5E5E5',
    height: 14,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5,
  },
  statsHalfBar: {
    width: '50%',
  },
  statsPlayer1Bar: {
    width: '50%',
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    backgroundColor: '#F5BF00',
    height: 14,
    borderRightColor: '#000',
    borderRightWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  statsPlayer2Bar: {
    width: '50%',
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    backgroundColor: '#F7A65B',
    height: 14,
    borderLeftColor: '#000',
    borderLeftWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
export default styles;
