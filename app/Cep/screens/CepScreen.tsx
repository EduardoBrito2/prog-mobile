import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import useCep from '../hooks/useCep';

const CepScreen = () => {
  const { cep, setCep, data, loading, error, fetchCep } = useCep();
  const [inputCep, setInputCep] = useState<string>('');

  const handleSearch = () => {
    if (inputCep.length === 8) {
      fetchCep(inputCep);
    } else {
      alert('Por favor, insira um CEP válido');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        maxLength={8}
        value={inputCep}
        onChangeText={setInputCep}
      />
      <Button title="Obter" onPress={handleSearch} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      
      {error && <Text style={styles.error}>{error}</Text>}

      {data && (
        <View style={styles.result}>
          <Text><strong>CEP:</strong> {data.cep}</Text>
          <Text><strong>Logradouro:</strong> {data.logradouro}</Text>
          <Text><strong>Bairro:</strong> {data.bairro}</Text>
          <Text><strong>Cidade:</strong> {data.localidade}</Text>
          <Text><strong>UF:</strong> {data.uf}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
  },
  error: {
    color: 'red',
  },
});

export default CepScreen;
