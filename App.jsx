import { StatusBar } from 'expo-status-bar';

//npm install @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';

//npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import Cadastrar from './components/cadastrar';
import Listar from './components/listar';


const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle:{ // Título: Plano de fundo preto
            backgroundColor: '#00f',            
          },
          headerTitleStyle:{ // Título: Cor e espessura da fonte, 
            color: "#fff",
            fontWeight: '100',            
          },
          headerTitleAlign: 'center', // Título alinhado ao centro
          
          tabBarStyle:{
            height: 60,
            backgroundColor: '#000'
          }

        }}
      >        
        <Tabs.Screen
          name='Cadastrar'
          component={ Cadastrar }
          options={{
            tabBarIcon:({color,size})=>(<Ionicons name="ios-add-circle-outline" size={size} color={color} />)
          }}
        />
        <Tabs.Screen 
          name='Listar'
          component={ Listar }
          options={{
            tabBarIcon:({color,size})=>(<Ionicons name="ios-list-circle-outline" size={size} color={color} />)
          }}
        />
      </Tabs.Navigator>
      <StatusBar       
        backgroundColor="#555"
      />
    </NavigationContainer>    
  );
}