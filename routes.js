import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";

import Login from "./src/screens/Login";
import CadastroUsuario from "./src/screens/CadastroUsuario";
import Home from "./src/screens/Home";
import Conquistas from "./src/screens/Conquistas";
import Conta from "./src/screens/Conta";
import Pagamento from "./src/screens/Pagamento"; // Import de Pagamento adicionado
import Configuracoes from "./src/screens/Configuracoes"; // Import de Configuracoes adicionado
import SplashScreen from "./src/screens/Splash";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Navegação em stack
export const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Home" 
        component={DrawerNavigate} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="CadastroUsuario" 
        component={CadastroUsuario} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

// Navegação em tab (Comentada, já que não é utilizada atualmente)
export const TabNavigate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Login}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={24} color="black" />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Conta}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Pagamento"
        component={Pagamento}
        options={{
          tabBarIcon: () => (
            <AntDesign name="shoppingcart" size={24} color="black" />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Pontos"
        component={Pontos}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          tabBarIcon: () => (
            <AntDesign name="settings" size={24} color="black" />
          ),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
};

// Exemplo de componente DialogActionList para ilustração
const DialogActionList = ({ children }) => {
  return <>{children}</>;
};

// Navegação em drawer
export const DrawerNavigate = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Início"
        component={Home}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#fcbe7c',
          drawerInactiveTintColor: "white",
          drawerStyle: {
            backgroundColor: '#c48c65',
          },
          drawerIcon: ({ focused }) => (
            <SimpleLineIcons 
              name="home" 
              size={24} 
              color={focused ? "black" : "white"} 
            />
          )
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={Conta}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#fcbe7c',
          drawerInactiveTintColor: "white",
          drawerStyle: {
            backgroundColor: '#c48c65'
          },
          drawerIcon: ({ focused }) => (
            <AntDesign 
              name="user" 
              size={24} 
              color={focused ? "black" : "white"} 
            />
          )
        }}
      />
      <Drawer.Screen
        name="Conquistas"
        component={Conquistas}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#fcbe7c',
          drawerInactiveTintColor: "white",
          drawerStyle: {
            backgroundColor: '#c48c65'
          },
          drawerIcon: ({ focused }) => (
            <AntDesign 
              name="star" 
              size={24} 
              color={focused ? "black" : "white"} 
            />
          )
        }}
      />
      <Drawer.Screen
        name="Pagamento"
        component={Pagamento}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#fcbe7c',
          drawerInactiveTintColor: "white",
          drawerStyle: {
            backgroundColor: '#c48c65'
          },
          drawerIcon: ({ focused }) => (
            <AntDesign 
              name="shoppingcart" 
              size={24} 
              color={focused ? "black" : "white"} 
            />
          )
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={Configuracoes}
        options={{
          drawerActiveTintColor: '#fff',
          drawerActiveBackgroundColor: '#fcbe7c',
          drawerInactiveTintColor: "white",
          drawerStyle: {
            backgroundColor: '#c48c65'
          },
          drawerIcon: ({ focused }) => (
            <AntDesign 
              name="setting" 
              size={24} 
              color={focused ? "black" : "white"} 
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
};
