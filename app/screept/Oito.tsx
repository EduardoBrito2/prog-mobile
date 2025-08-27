import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function Oito() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [csenha, setCsenha] = useState('');
  const [resultado, setResultado] = useState('');

  const verificar = () => {
    if (senha !== csenha) {
      Alert.alert("As senhas não estão batendo");
      return false;
    }
    return true;
  };

  const salvar = () => {
    if (verificar()) {
      if (email && senha) {
        setResultado(`${email} - ${senha} - ${csenha}`);
      } else {
        setResultado('Preencha todos os campos.');
      }
    }
  };

  return (
    <View style={styles.container}>
        <label>Email:</label>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <label>Senha</label>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry
      />
      <label>Confirmar senha</label>
      <TextInput
        value={csenha}
        onChangeText={setCsenha}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
  },
});
