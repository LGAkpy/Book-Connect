import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { CORES } from "../../constants/cores";

const ButtonGoogle = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.onPress}
    >
      <Image
        source={props.imageSource} // Corrigido para receber imageSource
        style={styles.image}
      />
      <Text style={styles.text}>{props.value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1C696", // Corrigido para a cor vermelha padrão do Google
    padding: 10,
    width: 320,
    borderRadius: 4,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    marginLeft: 10, // Espaçamento entre o ícone e o texto
    textAlign: "center",
    flex: 1,
  },
  image: {
    width: 24, // Ajuste conforme o tamanho da sua imagem
    height: 24, // Ajuste conforme o tamanho da sua imagem
  },
});

export default ButtonGoogle;
