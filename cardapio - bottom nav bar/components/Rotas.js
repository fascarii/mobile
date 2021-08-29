import * as React from 'react';
import {Text, View } from 'react-native';
import {createBottomTabNavigator} from'@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './Home';
import Conta from './Conta';
import Pedidos from './Pedidos';
import Cardapio from './Cardapio';

const Tab = createBottomTabNavigator();

export default function Rotas (){
  return(
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions = {{activeTinColor:'#ccefff'}}>
    

    <Tab.Screen
    name="Home"
    component={Home}
    options={{
      tabBarLabel:"Home",
      tabBarIcon:({color, size})=>(
        <MaterialCommunityIcons name="home" size={24} color={"#264653"}/>
      ),
    }}/>

    <Tab.Screen
    name="Cardapio"
    component={Cardapio}
    options={{
      tabBarLabel:"Cardápio",
      tabBarIcon:({color, size})=>(
        <MaterialCommunityIcons name="food" size={24} color={"#e9c46a"}/>
      ),
    }}/>

    <Tab.Screen
    name="Pedidos"
    component={Pedidos}
    options={{
      tabBarLabel:"Pedidos",
      tabBarIcon:({color, size})=>(
        <MaterialIcons name="delivery-dining" size={24} color="#f4a261"/>
      ),
    }}/>

    <Tab.Screen
    name="Conta"
    component={Conta}
    options={{
      tabBarLabel:"Conta",
      tabBarIcon:({color, size})=>(
        <MaterialCommunityIcons name="account" size={24} color={"#2a9d8f"}/>
      ),
    }}/>
    
    </Tab.Navigator>
  );
}