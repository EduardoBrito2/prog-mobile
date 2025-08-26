import React from 'react';
import { StyleSheet,View,Image, TouchableOpacity, Alert} from "react-native";
import Constants from 'expo-constants';
import logo from "../../app/assets/adaptive-icon.png";
 
export default function Cinco(){
    const botao=()=>{
        Alert.alert("boa noite");
        console.log("boa noite");
    }
    return(
        <View style={styles.container}>
            <View style={styles.parte1}>
              <View style={styles.filho1}>
               <TouchableOpacity style={styles.botao} onPress={botao}>
                    <Image source={logo} style={styles.logo} resizeMode="contain"/>
                </TouchableOpacity>
              </View>
              <View style={styles.filho2}>
                <View style={styles.neto1}>
               <TouchableOpacity style={styles.botao} onPress={botao}>
                    <Image source={logo} style={styles.logo} resizeMode="contain"/>
                </TouchableOpacity>
                </View>
                <View style={styles.neto2}>
               <TouchableOpacity style={styles.botao} onPress={botao}>
                    <Image source={logo} style={styles.logo} resizeMode="contain"/>
                </TouchableOpacity>
                </View>
                <View/>
              </View>
            </View>
            <View style={styles.parte2}>
               <TouchableOpacity style={styles.botao} onPress={botao}>
                    <Image source={logo} style={styles.logo} resizeMode="contain"/>
                </TouchableOpacity>
            </View>
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
  logo:{
    flex:1,
    alignSelf:'center',
  },
  botao:{
    justifyContent: "center",
    alignItems: "center",
     flex:1,
    alignSelf:'center',
  }
});