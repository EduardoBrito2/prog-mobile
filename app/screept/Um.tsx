import React from 'react';
import { StyleSheet,View } from 'react-native';
import Constants from 'expo-constants';
 
export default function Um(){
    return(
        <View style={styles.container}>
            <View style={styles.parte1}/>
            <view style={styles.parte2}/>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'column',
  },
  parte1: {
    flex: 0.5,
    backgroundColor: 'crimson',
  },
  parte2: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});