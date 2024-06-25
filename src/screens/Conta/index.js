import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const PerfilUsuario = () => {
  // Dados de exemplo do usuário
  const usuario = {
    nome: "Juliet",
    email: "Julietjonson@gmail.com",
    avatar: require("../../../assets/avatar.jpg"), // Caminho para a imagem do avatar
    bio: "Entusiasta de livros, tecnologia e café. Aventurando-se na programação. Estou curtindo muito o BookConnect.",
    redesSociais: {
      instagram: "@julietjonson",
      twitter: "@julietjonson",
    },
    livrosConcluidos: 12,
    linkRedeSocial: "https://www.instagram.com/julietjonson/", // Link para o perfil do Instagram
    linkTwitter: "https://twitter.com/julietjonson", // Link para o perfil do Twitter
  };

  // Função para lidar com a abertura do link para a rede social
  const abrirLinkRedeSocial = (link) => {
    if (link) {
      Linking.openURL(link);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.minhaConta}>Minha Conta</Text>
        <Image source={usuario.avatar} style={styles.avatar}/>
        <Text style={styles.nome}>{usuario.nome}</Text>
        <Text style={styles.email}>{usuario.email}</Text>
        <Text style={styles.bio}>{usuario.bio}</Text>
      </View>

      <View style={styles.redesSociais}>
        <Text style={styles.redesSociaisLabel}>Redes Sociais:</Text>
        {/* Botão de redirecionamento para o Instagram */}
        <TouchableOpacity style={styles.botaoRedeSocial} onPress={() => abrirLinkRedeSocial(usuario.linkRedeSocial)}>
          <FontAwesome name="instagram" size={24} color="#E1306C" style={styles.iconeRedeSocial}/>
          <Text style={styles.textoBotaoRedeSocial}>Instagram</Text>
        </TouchableOpacity>

        {/* Botão de redirecionamento para o Twitter */}
        <TouchableOpacity
          style={[styles.botaoRedeSocial, { backgroundColor: "#1DA1F2" }]}
          onPress={() => abrirLinkRedeSocial(usuario.linkTwitter)}>
          <FontAwesome name="twitter" size={24} color="#FFF" style={styles.iconeRedeSocial}/>
          <Text style={styles.textoBotaoRedeSocial}>Twitter</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.livrosConcluidos}>Livros Concluídos: {usuario.livrosConcluidos}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F1C696", // Cor de fundo ajustada para melhorar a legibilidade
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20, // Aumento da margem superior para separar do topo
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center", // Centralização do texto do nome
  },
  email: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center", // Centralização do texto do email
  },
  bio: {
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
    color: "#666", // Cor do texto da biografia ajustada para melhor legibilidade
  },
  redesSociais: {
    alignItems: "center", // Centralização dos botões de redes sociais
    marginTop: 20, // Aumento da margem superior para separar dos dados principais
  },
  redesSociaisLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center", // Centralização do texto das redes sociais
  },
  botaoRedeSocial: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E1306C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  iconeRedeSocial: {
    marginRight: 10,
  },
  textoBotaoRedeSocial: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  livrosConcluidos: {
    fontSize: 16,
    marginTop: 20, // Aumento da margem superior para separar das redes sociais
    textAlign: "center", // Centralização do texto dos livros concluídos
  },
  minhaConta: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 90, // Aumento da margem inferior para separar do rodapé
  },
});

export default PerfilUsuario;
