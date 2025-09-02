import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Contacts, { Contact } from 'react-native-contacts'; 

export default function Quatro() {
  const [contacts, setContacts] = useState<Contact[]>([]); 

  useEffect(() => {
    // Função para carregar os contatos
    const loadContacts = () => {
      Contacts.getAll()
        .then((data) => {
          if (data.length > 0) {
            // Filtra contatos que começam com a letra "C"
            const filteredContacts = data.filter((contact) =>
              contact.displayName && contact.displayName.toLowerCase().startsWith('c') 
            );
            setContacts(filteredContacts); 
          }
        })
        .catch((err) => {
          console.log('Erro ao obter contatos: ', err);
        });
    };

    loadContacts(); 
  }, []);

  // Renderiza a lista de contatos
  const renderContact = ({ item }: { item: Contact }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactText}>{item.displayName}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contatos que começam com "C"</Text>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.recordID.toString()}
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
