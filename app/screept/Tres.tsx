import React from 'react';
import { StyleSheet,View } from 'react-native';
import Constants from 'expo-constants';
 
export default function Tres(){
    return(
        <View style={styles.container}>
            <View style={styles.parte1}>
              <View style={styles.filho1}/>
              <View style={styles.filho2}>
                <View style={styles.neto1}/>
                <View style={styles.neto2}/>
                <View/>
              </View>
            </View>
            <View style={styles.parte2}/>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
  },
  filho1:{
    flex:0.5,
    backgroundColor:'lime'
  },
  filho2:{
    flex:0.5,
    // backgroundColor:'aquamarine'
  },
  neto1:{
    flex:0.5,
    backgroundColor:'tea'
  },
  neto2:{
    flex:0.5,
    backgroundColor:'skyblue'
  },
  parte1: {
    flex: 0.5,
    // backgroundColor: 'crimson',
  },
  parte2: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});