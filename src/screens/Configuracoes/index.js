import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Button, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Configuracoes = () => {
  const [notificacoes, setNotificacoes] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [idiomaSelecionado, setIdiomaSelecionado] = useState('portugues'); // Estado para controlar o idioma selecionado
  const [notificacoesPush, setNotificacoesPush] = useState(true);
  const [mostrarOpcoesIdioma, setMostrarOpcoesIdioma] = useState(false); // Estado para mostrar as opções de idioma

  const navigation = useNavigation();

  const toggleNotificacoes = () => {
    setNotificacoes((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const salvarConfiguracoes = () => {
    // Implementar lógica para salvar configurações
    console.log('Configurações salvas com sucesso!');
  };

  const logout = () => {
    // Implementar lógica para realizar logout do usuário
    console.log('Logout realizado com sucesso!');
    // Redirecionar para a tela de login
    navigation.navigate('Login');
  };

  const renderOpcoesIdioma = () => {
    if (mostrarOpcoesIdioma) {
      return (
        <Picker
          selectedValue={idiomaSelecionado}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setIdiomaSelecionado(itemValue)}
        >
          <Picker.Item label="Português" value="portugues" />
          <Picker.Item label="Inglês" value="ingles" />
          <Picker.Item label="Espanhol" value="espanhol" />
        </Picker>
      );
    } else {
      return (
        <Text style={styles.opcoesIdioma} onPress={() => setMostrarOpcoesIdioma(true)}>
          Selecionar Idioma
        </Text>
      );
    }
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}>
      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.configItem}>
        <Text>Receber notificações</Text>
        <Switch value={notificacoes} onValueChange={toggleNotificacoes} />
      </View>

      <View style={styles.configItem}>
        <Text>Modo escuro</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.configItem}>
        <Text>Idioma:</Text>
        {renderOpcoesIdioma()}
      </View>

      <View style={styles.configItem}>
        <Text>Notificações Push</Text>
        <Switch value={notificacoesPush} onValueChange={setNotificacoesPush} />
      </View>

      {/* Outros itens de configuração */}
      <View style={styles.buttonContainer}>
        <Button title="Salvar Configurações" onPress={salvarConfiguracoes} />
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Cor de fundo padrão (light mode)
  },
  darkModeContainer: {
    backgroundColor: '#333', // Cor de fundo para dark mode
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Cor do texto padrão (light mode)
  },
  configItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  opcoesIdioma: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default Configuracoes;
