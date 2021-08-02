import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  View,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function FixedHeaderMatch() {
  const [modalVisible, setModalVisible] = useState(false);
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
            <Text>Hello World!</Text>
            <Pressable
              style={styles.buttonPopUp}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Delete Match</Text>
            </Pressable>
            <Pressable
              style={styles.buttonPopUp}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Pause Match</Text>
            </Pressable>
            <Pressable
              style={styles.buttonPopUp}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Finish Match</Text>
            </Pressable>
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
    borderRadius: 20,
    padding: 15,
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
    width: 200,
    height: 50,
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    marginVertical: 10,
  },
});
