import React from 'react';
import HomeStack from './HomeStack'; 
import AboutStack from './AboutStack'; 
import ContactStack from './ContactStack'; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab=createBottomTabNavigator(); 
export default function Navigation(){ 
    return( 
        <Tab.Navigator> 
            <Tab.Screen name="Home" component={HomeStack} options={{ tabBarLabel:"Home", tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color="#900" />
        ) }}  /> 
            <Tab.Screen name="Contact" component={ContactStack} options={{ tabBarLabel:"Contact", tabBarIcon: ({ tintColor }) => (
          <Icon name="envelope" size={30} color="#900" />
        ) }}  />
            <Tab.Screen name="About" component={AboutStack} options={{ tabBarLabel:"About", tabBarIcon: ({ tintColor }) => (
          <Icon name="archive" size={30} color="#900" />
        ) }}  />
        </Tab.Navigator> 
    ); 
}