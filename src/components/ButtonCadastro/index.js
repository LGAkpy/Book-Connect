import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CORES } from "../../constants/cores";

const ButtonCadastro = ({ value }) => {
  const navigation = useNavigation();

  // Função para navegar para a tela de cadastro
  const navigateToCadastro = () => {
    navigation.navigate('CadastroUsuario'); // 'Cadastro' deve ser o nome da rota para a tela de cadastro
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={navigateToCadastro} // Chama a função de navegação ao pressionar o botão
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: CORES.COR_PRIMARIA,
    padding: 10,
    width: 320,
    borderRadius: 4,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
});

export default ButtonCadastro;
