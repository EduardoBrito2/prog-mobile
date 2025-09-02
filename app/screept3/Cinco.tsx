import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Contacts from 'react-native-contacts'; // Biblioteca para acessar os contatos

export default function ContactList() {
  // Tipando o estado 'contacts' como um array de strings (string[])
  const [contacts, setContacts] = useState<string[]>([]);

  useEffect(() => {
    // Função para carregar os contatos
    const loadContacts = () => {
      Contacts.getAll()
        .then((data) => {
          if (data.length > 0) {
            // Mapeia para pegar apenas o primeiro nome (givenName)
            const firstNames = data
              .map((contact) => contact.givenName)
              .filter((name) => name !== null); // Filtra contatos com nome válido

            // Atualiza o estado com os nomes
            setContacts(firstNames as string[]); // Garantir que seja tratado como array de strings
          }
        })
        .catch((err) => {
          console.log('Erro ao obter contatos: ', err);
        });
    };

    loadContacts(); // Carrega os contatos ao inicializar o componente
  }, []);

  // Renderiza a lista de primeiros nomes
  const renderContact = ({ item }: { item: string }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactText}>{item}</Text> {/* Exibe o primeiro nome */}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primeiros Nomes dos Contatos</Text>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item, index) => index.toString()} // Usando índice como chave
      />
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
  contactItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    width: '90%',
  },
  contactText: {
    fontSize: 16,
  },
});
