import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, Linking, Image } from "react-native";
import { NativeBaseProvider, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { CORES } from "../../constants/cores";

import AsyncStorage from '@react-native-async-storage/async-storage';

import MeuInput from "../../components/MeuInput";
import MeuButton from "../../components/MeuButton";
import ButtonCadastro from "../../components/ButtonCadastro";
import ButtonGoogle from "../../components/ButtonGoogle";

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    const carregarDadosSalvos = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem("email");
        const savedSenha = await AsyncStorage.getItem("senha");

        if (savedEmail !== null && savedSenha !== null) {
          setEmail(savedEmail);
          setSenha(savedSenha);
        }
      } catch (error) {
        console.error("Erro ao carregar dados salvos:", error);
      }
    };

    carregarDadosSalvos();
  }, []);

  const logar = async () => {
    if (email.trim() === "") {
      alert("Por favor, insira um email válido.");
      return;
    }

    if (senha.trim().length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    // Salvar email e senha após a validação
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("senha", senha);
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }

    navigation.navigate('Home');
  };

  const navigateToCadastro = () => {
    navigation.navigate('CadastroUsuario');
  };

  const openGoogleSignIn = () => {
    const url = "https://accounts.google.com/signin";
    Linking.openURL(url).catch(err => console.error("Erro ao abrir URL: ", err));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background-login.jpg")}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <Center flex={1}>
          <View style={styles.login}>
            <Text style={styles.titulo}>Bem Vindos !</Text>
            <Text style={styles.subtitulo}>Conectar para continuar...</Text>

            <MeuInput
              label="E-mail"
              placeholder="Digite seu e-mail..."
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <MeuInput
              label="Senha"
              placeholder="Digite sua senha..."
              value={senha}
              onChangeText={(text) => setSenha(text)}
              secureTextEntry={true}
            />
            <MeuButton
              value="Conectar"
              callback={logar}
            />
            <ButtonCadastro
              value="Cadastre-se"
              onPress={navigateToCadastro}
            />
            <ButtonGoogle
              value="Entrar com Google"
              onPress={openGoogleSignIn}
              imageSource={require("../../../assets/google.png")} // Verifique o caminho da imagem
            />
          </View>
        </Center>
      </ImageBackground>
      <View style={styles.footer}>
        <ImageBackground
          source={require("../../../assets/footer-background.png")}
          style={styles.footerBackground}
          imageStyle={styles.footerImage}
        >
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 100,
  },
  login: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    marginTop: 10,
  },
  titulo: {
    color: CORES.COR_PRIMARIA,
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {
    color: CORES.COR_PRIMARIA,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  footerBackground: {
    width: '100%',
    height: 50, // Altura desejada do footer
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerImage: {
    resizeMode: 'contain', // Ajuste conforme necessário
    width: '100%', // Ajuste conforme necessário
    height: '100%', // Ajuste conforme necessário
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
};
