import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CORES } from "../../constants/cores";

const MeuButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.callback} // Função chamada quando o botão é pressionado
    >
      <Text style={styles.text}>{props.value}</Text>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: CORES.COR_PRIMARIA, // Certifique-se de que CORES.COR_PRIMARIA está definido corretamente
    padding: 12,
    width: 320,
    borderRadius: 4,
    marginTop: 5,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700"
  },
  imageSource:{
    width: 20,
    height: 20
    
  }
});
export default MeuButton;