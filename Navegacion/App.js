import * as React from 'react'; 
import {View, Text, SafeAreaView } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import Navigation from './src/navigation/Navigation';
import Home from './src/navigation/HomeStack';  
import About from './src/navigation/AboutStack'; 
import Contact from './src/navigation/ContactStack';   

export default function App(){ 
  return( 
    <NavigationContainer> 
     <Navigation></Navigation>
    </NavigationContainer> 
  );
}