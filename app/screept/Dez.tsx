import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, StyleSheet, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Dez() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [csenha, setCsenha] = useState('');
  const [resultado, setResultado] = useState('');
  const [selecionar, Setselecionar] = useState('');
  const [manter, setmanter] = useState(false);

  const verificar = () => {
    if (senha !== csenha) {
      Alert.alert("As senhas não estão batendo");
      return false;
    }
    return true;
  };

  const salvar = () => {
    if (verificar()) {
      if (email && senha && selecionar) {
        setResultado(`${email} - ${senha} - ${csenha} - ${selecionar} - ${manter ? "sim":"não"}`);
      } else {
        setResultado('Preencha todos os campos.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <Text>Senha</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry
      />
      <Text>Confirmar senha</Text>
      <TextInput
        value={csenha}
        onChangeText={setCsenha}
        style={styles.input}
        secureTextEntry
      />
      <Text>Selecione:</Text>
      <Picker
  selectedValue={selecionar}
  onValueChange={(value) => Setselecionar(value)}
>
  <Picker.Item label="Selecione uma opção" value="" />
  <Picker.Item label="Administrador" value="adm" />
  <Picker.Item label="Gestor" value="manager" />
  <Picker.Item label="Usuário" value="user" />
</Picker>
<Text>manter-se conectado</Text>
        <Switch
          value={manter}
          onValueChange={setmanter}
          thumbColor={manter ? '#2196F3' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
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
  picker: {
  borderWidth: 1,
  borderColor: '#888',
  marginBottom: 10,
}

});
