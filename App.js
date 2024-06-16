import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigate } from './routes';


import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigate/>
    </NavigationContainer>
  );
}
