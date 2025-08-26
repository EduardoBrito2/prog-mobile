import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

export default function Sete() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [resultado, setResultado] = useState('');

  const salvar = () => {
    if (email && senha) {
      setResultado(`${email} - ${senha}`);
    } else {
      setResultado('Preencha todos os campos.');
    }
  };

  return (
    <SafeAreaView>
    <KeyboardAvoidingView
      style={styles.container}
    >
        <label>Email:</label>
<TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
      />
        <label>Senha:</label>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        maxLength={8}
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text>Cadastrar-se</Text>
        </TouchableOpacity> 

      <Text style={styles.resultado}>{resultado}</Text>
    </KeyboardAvoidingView>
    </SafeAreaView>
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

