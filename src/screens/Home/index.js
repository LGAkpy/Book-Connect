import React, { useState } from "react";
import { View, ScrollView, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Livros = [
  {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    capa: require("../../../assets/o_hobbit.jpg"),
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    capa: require("../../../assets/harry_potter.jpg"),
  },
  {
    titulo: "A Guerra dos Tronos",
    autor: "George R.R. Martin",
    capa: require("../../../assets/tronos.jpg"),
  },
  {
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    capa: require("../../../assets/solidao.jpg"),
  },
  {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    capa: require("../../../assets/quixote.jpg"),
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    capa: require("../../../assets/1984.jpg"),
  },
  {
    titulo: "O Apanhador no Campo de Centeio",
    autor: "J.D. Salinger",
    capa: require("../../../assets/centeio.jpg"),
  },
  {
    titulo: "Moby Dick",
    autor: "Herman Melville",
    capa: require("../../../assets/dick.jpg"),
  },
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    capa: require("../../../assets/orgulho_preconceito.jpg"),
  },
  {
    titulo: "O Grande Gatsby",
    autor: "F. Scott Fitzgerald",
    capa: require("../../../assets/gatsby.jpg"),
  },
  {
    titulo: "Crime e Castigo",
    autor: "Fyodor Dostoevsky",
    capa: require("../../../assets/crime_castigo.jpg"),
  },
  {
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    capa: require("../../../assets/sociedade_anel.jpg"),
  },
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    capa: require("../../../assets/pequeno_principe.jpg"),
  },
  {
    titulo: "Os Miseráveis",
    autor: "Victor Hugo",
    capa: require("../../../assets/miseraveis.jpg"),
  },
  {
    titulo: "Jane Eyre",
    autor: "Charlotte Brontë",
    capa: require("../../../assets/jane_eyre.jpg"),
  },
  {
    titulo: "A Revolução dos Bichos",
    autor: "George Orwell",
    capa: require("../../../assets/revolucao_bichos.jpg"),
  },
  {
    titulo: "O Nome da Rosa",
    autor: "Umberto Eco",
    capa: require("../../../assets/nome_rosa.jpg"),
  },
  {
    titulo: "O Conde de Monte Cristo",
    autor: "Alexandre Dumas",
    capa: require("../../../assets/conde_monte_cristo.jpg"),
  },
  {
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    capa: require("../../../assets/metamorfose.jpg"),
  },
  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    capa: require("../../../assets/dracula.jpg"),
  },
  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    capa: require("../../../assets/frankenstein.jpg"),
  },
  {
    titulo: "O Morro dos Ventos Uivantes",
    autor: "Emily Brontë",
    capa: require("../../../assets/morro_ventos.jpg"),
  },
  {
    titulo: "Guerra e Paz",
    autor: "Leo Tolstoy",
    capa: require("../../../assets/guerra_paz.jpg"),
  },
  {
    titulo: "O Retrato de Dorian Gray",
    autor: "Oscar Wilde",
    capa: require("../../../assets/dorian_gray.jpg"),
  },
  {
    titulo: "Alice no País das Maravilhas",
    autor: "Lewis Carroll",
    capa: require("../../../assets/alice.jpg"),
  },
  {
    titulo: "A Divina Comédia",
    autor: "Dante Alighieri",
    capa: require("../../../assets/divina_comedia.jpg"),
  },
  {
    titulo: "Os Três Mosqueteiros",
    autor: "Alexandre Dumas",
    capa: require("../../../assets/tres_mosqueteiros.jpg"),
  },
  {
    titulo: "O Sol é Para Todos",
    autor: "Harper Lee",
    capa: require("../../../assets/sol_para_todos.jpg"),
  },
];

const LivroCard = ({ livro }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.livroCard} onPress={() => navigation.navigate('LivroDetalhe', { livro })}>
      <Image source={livro.capa} style={styles.capa} />
      <View style={styles.livroInfo}>
        <Text style={styles.titulo}>{livro.titulo}</Text>
        <Text style={styles.autor}>{livro.autor}</Text>
      </View>
    </TouchableOpacity>
  );
};

const BibliotecaDeLivros = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLivros = Livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textoDestaque}>Recomendados</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar livro..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {filteredLivros.map((livro, index) => (
          <LivroCard key={index} livro={livro} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  textoDestaque: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  scrollView: {
    paddingBottom: 20,
  },
  livroCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 20,
  },
  capa: {
    width: 100,
    height: 150,
  },
  livroInfo: {
    flex: 1,
    padding: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  autor: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
});

export default BibliotecaDeLivros;
