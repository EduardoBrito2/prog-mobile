import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function Seis() {

  const abirCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('Câmera cancelada');
      } else if (response.errorCode) {
        console.log('Erro ao abrir a câmera: ', response.errorCode);
      } else {
        console.log('Imagem capturada: ', response.assets);
      }
    });
  };

  const abrirGaleria = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('Galeria cancelada');
      } else if (response.errorCode) {
        console.log('Erro ao abrir a galeria: ', response.errorMessage);
      } else {
        console.log('Imagem selecionada: ', response.assets);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text>Botões de Câmera e Galeria</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={abirCamera}>
          <MaterialIcons name="photo-camera" size={30} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={abrirGaleria}>
          <MaterialIcons name="photo" size={30} color="deepskyblue" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50, // Fallback para 50 se StatusBar.currentHeight for undefined
    right: 10,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 5, // Sombras para os botões
  },
});
