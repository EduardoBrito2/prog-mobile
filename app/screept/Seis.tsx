import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

export default function Seis() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('');

  const salvar = () => {
    if (nome && idade) {
      setResultado(`${nome} - ${idade}`);
    } else {
      setResultado('Preencha todos os campos.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
        <label>Nome:</label>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
        <label>Idade:</label>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric" // Teclado numérico
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text>Salvar</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{resultado}</Text>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#ccc',
    padding: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
  },
});

