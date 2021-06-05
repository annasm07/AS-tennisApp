import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getPlayerInfo} from '../../redux/actions/actionCreators';

function Dashboard({dispatch, player, tokens, user}: any) {
  useEffect(() => {
    dispatch(getPlayerInfo(tokens[0], user.user.playerId));
  }, [dispatch, tokens, user]);
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerBox: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    flexDirection: 'row',
  },
  playerImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  playerName: {
    fontSize: 20,
    paddingLeft: 20,
  },
});

function mapStateToProps({player, tokens, user}: any) {
  return {
    player,
    tokens,
    user,
  };
}

export default connect(mapStateToProps)(Dashboard);
