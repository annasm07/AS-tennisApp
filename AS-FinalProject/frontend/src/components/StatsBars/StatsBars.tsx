import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Stats/StatsStyles';

export default function StatsBar({title, p1Value, p2Value}: any) {
  function getPercentage(firstValue: any, secondValue: any) {
    const total = firstValue + secondValue;
    const percentage = (firstValue / total) * 100;
    return percentage.toFixed(0);
  }
  return (
    <View style={styles.stats}>
      <View style={styles.statInfo}>
        <Text>{p1Value}</Text>
        <Text style={styles.statTitle}>{title}</Text>
        <Text>{p2Value}</Text>
      </View>
      <View style={styles.statsFullBar}>
        <View style={styles.statsHalfBar}>
          <View
            style={[
              styles.statsPlayer1Bar,
              {
                width: `${getPercentage(p1Value, p2Value)}%`,
              },
            ]}
          />
        </View>
        <View style={styles.statsHalfBar}>
          <View
            style={[
              styles.statsPlayer2Bar,
              {
                width: `${getPercentage(p2Value, p1Value)}%`,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
