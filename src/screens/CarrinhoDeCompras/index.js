import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const CarrinhoComprasScreen = () => {
  // Dados do livro e do usuário
  const livro = {
    titulo: 'O Hobbit',
    preco: 60.00,
    capa: require('./assets/hobbit.jpg'), // Assumindo que a imagem está na pasta assets
  };

  const usuario = {
    nome: 'Rhaj',
  };

  // Função para confirmar a compra
  const confirmarCompra = () => {
    const dataEnvio = getDataDeEnvio(); // Calcula a data de envio (fictícia)
    Alert.alert(
      'Compra Confirmada',
      `Compra confirmada para o usuário ${usuario.nome}. Data de envio: ${dataEnvio}`,
    );
  };

  // Função para cancelar a compra
  const cancelarCompra = () => {
    Alert.alert(
      'Compra Cancelada',
      `A compra de ${usuario.nome} foi cancelada.`,
    );
  };

  // Função fictícia para calcular a data de envio (7 dias após a data atual)
  const getDataDeEnvio = () => {
    const data = new Date();
    data.setDate(data.getDate() + 7); // Adicionando 7 dias
    return data.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho de Compras</Text>
      <Image source={livro.capa} style={styles.capaLivro} />
      <Text style={styles.infoLivro}><Text style={styles.negrito}>Livro:</Text> {livro.titulo}</Text>
      <Text style={styles.infoLivro}><Text style={styles.negrito}>Preço:</Text> R$ {livro.preco.toFixed(2)}</Text>
      
      <TouchableOpacity style={styles.botaoConfirmar} onPress={confirmarCompra}>
        <Text style={styles.textoBotao}>Confirmar Compra</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoCancelar} onPress={cancelarCompra}>
        <Text style={styles.textoBotao}>Cancelar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  capaLivro: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  infoLivro: {
    fontSize: 18,
    marginBottom: 10,
  },
  negrito: {
    fontWeight: 'bold',
  },
  botaoConfirmar: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  botaoCancelar: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CarrinhoComprasScreen;
