import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import useCep from '../hooks/useCep';

const HistoryScreen = () => {
  const { history } = useCep(); // Pegando o histórico de consultas do contexto

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Histórico de Consultas</Text>

      {history.length === 0 ? (
        <Text style={styles.noHistory}>Nenhum CEP consultado ainda.</Text>
      ) : (
        history.map((item, index) => (
          <View key={index} style={styles.historyItem}>
            <Text><strong>CEP:</strong> {item.cep}</Text>
            <Text><strong>Logradouro:</strong> {item.logradouro}</Text>
            <Text><strong>Bairro:</strong> {item.bairro}</Text>
            <Text><strong>Cidade:</strong> {item.localidade}</Text>
            <Text><strong>UF:</strong> {item.uf}</Text>
          </View>
        ))
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
  noHistory: {
    fontSize: 18,
    color: 'gray',
  },
  historyItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default HistoryScreen;
