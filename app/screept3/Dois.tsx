import React from "react"
import {Linking, View,StyleSheet, TouchableOpacity,Text } from "react-native"

export default function Dois(){
    const telefone =()=>{
        const numero = 12345678;
        const url = `tel:${numero}`;
        Linking.openURL(url).catch((err=>console.log("link não encontrado",err)))
    }
      return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={telefone}>
        <Text style={styles.buttonText}>Telefone</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4CAF50", 
    padding: 20,
  },
  button: {
    backgroundColor: "#ff5733", 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30, 
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff", 
    fontWeight: "bold", 
    textAlign: "center",
  },
});