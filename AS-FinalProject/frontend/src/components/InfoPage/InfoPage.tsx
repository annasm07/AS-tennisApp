import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  Text,
  Image,
  Alert,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from '../../theme/globalThemes';

export default function InfoPage() {
  const player = useSelector((store: any) => store.player);
  // const user = useSelector((store: any) => store.user);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.playerBox}>
        <Image
          style={styles.playerImage}
          source={{
            uri: `${player.img}`,
          }}
        />
        <Text style={styles.playerName}>{player.name}</Text>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Name</Text>
              <TextInput
                style={styles.input}
                // onChangeText={userEmail => setEmail(userEmail)}
                placeholder="Email"
                defaultValue={player.name}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={globalStyles.buttonYellow}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text testID="HideModalButton">Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <TouchableOpacity
          style={globalStyles.buttonYellow}
          onPress={() => setModalVisible(true)}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerBox: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    marginTop: -20,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 20,
    fontSize: 16,
    marginHorizontal: 10,
    borderColor: '#7A7A7A',
    width: '80%',
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  playerName: {
    marginTop: 20,
    fontSize: 30,
    paddingLeft: 20,
    textTransform: 'capitalize',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '90%',
    // margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 35,
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
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: 'center',
  // },
});
