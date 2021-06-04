import * as React from 'react';
import {View, Image} from 'react-native';

export default function Dashboard() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../../images/home-icon.png')} />
    </View>
  );
}
