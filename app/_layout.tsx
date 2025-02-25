import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

const cars = [
  {
    id: '1',
    name: 'Fusca',
    description: 'Fusca 1974, muito popular no Brasil.',
    price: 'R$ 20.000,00',
    image: 'fusca.png',
    cor: 'Preto'
  },
  {
    id: '2',
    name: 'Civic',
    description: 'Honda Civic 2020, excelente desempenho.',
    price: 'R$ 120.000,00',
    image: 'civic.png',
  },
  {
    id: '3',
    name: 'Gol',
    description: 'Volkswagen Gol 2018, compacto e econômico.',
    price: 'R$ 40.000,00',
    image: 'gol.png',
  },
  {
    id: '4',
    name: 'Palio',
    description: 'Fiat Palio 2016, ótimo custo-benefício.',
    price: 'R$ 35.000,00',
    image: 'palio.png',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem Vindo a WebCars</Text>
      
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.carName}>{item.name}</Text>
            <Text style={styles.carDescription}>{item.description}</Text>
            <Text style={styles.carPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  carDescription: {
    color: '#555',
    marginTop: 5,
  },
  carPrice: {
    fontSize: 16,
    color: '#007BFF',
    marginTop: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
