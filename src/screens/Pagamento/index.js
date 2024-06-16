import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements';

const PagamentoScreen = () => {
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [dataValidade, setDataValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const handleConfirmarPagamento = () => {
    if (nomeCartao && numeroCartao && dataValidade && cvv) {
      // Lógica para confirmar o pagamento
      alert('Pagamento Confirmado');
    } else {
      alert('Erro: Preencha todos os campos do cartão.');
    }
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text style={styles.title}>Detalhes do Cartão</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome no Cartão"
          value={nomeCartao}
          onChangeText={setNomeCartao}
        />
        <TextInput
          style={styles.input}
          placeholder="Número do Cartão"
          value={numeroCartao}
          onChangeText={setNumeroCartao}
          keyboardType="numeric"
        />
        <View style={styles.inlineInputs}>
          <TextInput
            style={[styles.input, { flex: 2, marginRight: 10 }]}
            placeholder="Data de Validade (MM/AA)"
            value={dataValidade}
            onChangeText={setDataValidade}
            keyboardType="numeric"
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleConfirmarPagamento}>
          <Text style={styles.buttonText}>Confirmar Pagamento</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/secure-payment.png')} // Altere para a sua imagem desejada
            resizeMode="contain"
          />
        </View>
        <View style={styles.logosContainer}>
          <Image style={styles.logo} source={require('../../../assets/pix-logo.png')} />
          <Image style={styles.logo} source={require('../../../assets/nubank-logo.png')} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1C696',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inlineInputs: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 80,
  },
  logosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default PagamentoScreen;
