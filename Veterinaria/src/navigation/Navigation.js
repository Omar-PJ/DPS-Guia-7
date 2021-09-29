import React from 'react';
import Perros from './Perros'; 
import Gatos from './Gatos'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab=createBottomTabNavigator(); 
export default function Navigation(){ 
    return( 
        <Tab.Navigator  screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarActiveBackgroundColor: "#629DF5",
          tabBarInactiveTintColor: "#629DF5",
          tabBarInactiveBackgroundColor: "#E4F3F1"
        }}> 
            <Tab.Screen name="Perros" component={Perros} options={{tabBarLabel:"PERROS", tabBarIcon: ({ color,size }) => (
          <Icon name="dog" size={size+10} color={color} />
        ) }}  /> 
            <Tab.Screen name="Gatos" component={Gatos} options={{ tabBarLabel:"GATOS", tabBarIcon: ({ color,size }) => (
          <Icon name="cat" size={size+10} color={color} />
        ) }}  />
        </Tab.Navigator> 
    ); 
}