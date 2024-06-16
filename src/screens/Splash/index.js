import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simula um tempo de carregamento
    setTimeout(() => {
      // Navega para a tela de login após 3 segundos
      navigation.replace("Login");
    }, 3000); // Tempo de splash em milissegundos (3 segundos)
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Adicione aqui a sua imagem ou ícone */}
      <Image
        source={require("../../../assets/logo.jpg")} // Substitua pelo caminho da sua imagem
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7E6E5E", // Cor de fundo da tela de splash
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400, // Ajuste o tamanho conforme necessário
    height: 400, // Ajuste o tamanho conforme necessário
    resizeMode: "contain",
  },
});

export default SplashScreen;
