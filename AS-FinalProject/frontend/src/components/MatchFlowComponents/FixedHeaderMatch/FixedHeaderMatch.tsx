import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  View,
} from 'react-native';
import {deleteMatch} from '../../../redux/actions/actionCreators';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function FixedHeaderMatch() {
  const [modalVisible, setModalVisible] = useState(false);
  const tokens = useSelector((store: any) => store.tokens);
  let currentMatch = useSelector((store: any) => store.currentMatch);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleOutClick(button: String) {
    setModalVisible(!modalVisible);
    switch (button) {
      case 'delete':
        navigation.navigate('Dashboard');
        dispatch(deleteMatch(tokens[0], currentMatch._id));
        break;
      case 'pause':
        setModalVisible(!modalVisible);

        break;
      case 'finish':
        setModalVisible(!modalVisible);
        navigation.navigate('Dashboard');
        break;

      default:
        break;
    }
  }
  return (
    <SafeAreaView style={styles.header}>
      <Image
        style={styles.icon}
        source={require('../../../images/ball-logo.png')}
      />
      <TouchableOpacity
        style={styles.iconRightContainer}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.iconRight}
          source={require('../../../images/three-dots.png')}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <SafeAreaView style={styles.centerPopUp}>
          <View style={styles.popUp}>
            <TouchableOpacity
              style={styles.buttonPopUp}
              onPress={() => handleOutClick('delete')}>
              <Image
                style={styles.popUpIcon}
                source={require('../../../images/delete-btn.png')}
              />
              <Text style={styles.deleteButton}>Delete Match</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonPopUp}
              onPress={() => handleOutClick('pause')}>
              <Image
                style={styles.popUpIcon}
                source={require('../../../images/pause-btn.png')}
              />
              <Text style={styles.pauseButton}>Pause Match</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonPopUp}
              onPress={() => handleOutClick('finish')}>
              <Image
                style={styles.popUpIcon}
                source={require('../../../images/finish-btn.png')}
              />
              <Text style={styles.finishButton}>Finish Match</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: -40,
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 145,
    marginTop: 10,
    marginBottom: -40,
    left: '40%',
  },
  iconRight: {
    left: '40%',
    marginTop: 5,
  },
  iconRightContainer: {
    marginLeft: 135,
    marginTop: 20,
    height: 25,
    width: 20,
  },
  centerPopUp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  popUp: {
    margin: 20,
    backgroundColor: '#FBFBFB',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPopUp: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    paddingVertical: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    marginVertical: 10,
  },
  deleteButton: {
    color: '#F68A5B',
    fontSize: 20,
  },
  pauseButton: {
    color: '#F5BF00',
    fontSize: 20,
  },
  finishButton: {
    color: '#7A7A7A',
    fontSize: 20,
  },
  popUpIcon: {
    marginRight: 10,
  },
});
