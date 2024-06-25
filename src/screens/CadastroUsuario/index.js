import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

const CadastroUsuario = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [aceitaTermos, setAceitaTermos] = useState(false);

  const handleCadastro = () => {
    if (senha.length >= 8 && senha === confirmacaoSenha && aceitaTermos) {
      navigation.navigate('Home');
    } else {
      alert('Verifique os campos e aceite os termos e condições');
    }
  };

  return (
    <ImageBackground 
      source={require('../../../assets/background-login.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cadastrar-se</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={sobrenome}
          onChangeText={setSobrenome}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          value={dataNascimento}
          onChangeText={setDataNascimento}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmação de Senha"
          value={confirmacaoSenha}
          onChangeText={setConfirmacaoSenha}
          secureTextEntry
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={aceitaTermos}
            onValueChange={setAceitaTermos}
          />
          <Text style={styles.label}>Aceito os Termos e Condições...</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adiciona transparência ao Background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#fcbe7c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CadastroUsuario;
