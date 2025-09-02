import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { MaterialIcons } from '@expo/vector-icons';

export default function Sete() {
  const [imageUris, setImageUris] = useState<string[]>([]);
  const abirCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('Câmera cancelada');
      } else if (response.errorCode) {
        console.log('Erro ao abrir a câmera: ', response.errorCode);
      } else {
        const uri = response.assets ? response.assets[0].uri : undefined;
        if (uri) {
          setImageUris((prevUris) => [...prevUris, uri]);
        }
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
        const uri = response.assets ? response.assets[0].uri : undefined;
        if (uri) {
          setImageUris((prevUris) => [...prevUris, uri]);
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagens Capturadas ou Selecionadas</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={abirCamera}>
          <MaterialIcons name="photo-camera" size={30} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={abrirGaleria}>
          <MaterialIcons name="photo" size={30} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      {/* ScrollView para exibir as imagens capturadas ou selecionadas */}
      <ScrollView style={styles.scrollView}>
        {imageUris.length > 0 ? (
          imageUris.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.image} />
          ))
        ) : (
          <Text style={styles.noImagesText}>Nenhuma imagem capturada ou selecionada.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50,
    right: 10,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 5,
  },
  scrollView: {
    marginTop: 80, // Ajuste para que as imagens não fiquem escondidas atrás dos botões
    width: '100%',
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  noImagesText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
});
