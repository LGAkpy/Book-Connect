import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const MeuInput = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>
                { props.label }
            </Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.comMascara}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#fff",
    },
    input: {
        backgroundColor: "#f5f5f5",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: 320, // Largura ajustada para ocupar toda a tela com margem de 10 em cada lado
        color: "#1a1a1a",
        fontSize: 22,
    }
});

export default MeuInput;
