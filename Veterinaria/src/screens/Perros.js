import React from 'react';
import {View,Text, Button, StyleSheet, ScrollView, Image} from 'react-native'; 
export default function Perros(props){ 
    const{navigation}=props;
    return( 
        <ScrollView style={{flexDirection:'column',margin:10, paddingHorizontal:10}}> 
        <View style={{flexDirection:'row', margin:10}}>
        <Image style={styles.ciudad} source={require('../img/Perro1.jpg')}></Image>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:'bold'}}> Pastor Aleman </Text> 
        <Text style={{paddingTop:40, fontStyle:'italic'}}> Región de origen: Alemania </Text> 
        </View>
        </View>
        

        <View style={{flexDirection:'row', margin:10}}>
        <Image style={styles.ciudad} source={require('../img/Perro2.jpg')}></Image>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:'bold'}}> Pomerania</Text> 
        <Text style={{paddingTop:40, fontStyle:'italic'}}> Región de origen: Polonia </Text> 
        </View>
        </View>

        <View style={{flexDirection:'row', margin:10}}>
        <Image style={styles.ciudad} source={require('../img/Perro3.jpg')}></Image>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:'bold'}}> Labrador retriever</Text> 
        <Text style={{paddingTop:40, fontStyle:'italic'}}> Región de origen: Canadá </Text> 
        </View>
        </View>

        <View style={{flexDirection:'row', margin:10}}>
        <Image style={styles.ciudad} source={require('../img/Perro4.jpg')}></Image>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:'bold'}}> Husky siberiano </Text> 
        <Text style={{paddingTop:40, fontStyle:'italic'}}> Región de origen: Siberia </Text> 
        </View>
        </View>

        <View style={{flexDirection:'row', margin:10}}>
        <Image style={styles.ciudad} source={require('../img/Perro5.jpg')}></Image>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontWeight:'bold'}}> Bulldog </Text> 
        <Text style={{paddingTop:40, fontStyle:'italic'}}> Región de origen: Reino Unido </Text> 
        </View> 
        </View>
    </ScrollView>
    ); 
}


const styles = StyleSheet.create({
  banner:{
   height:250,
   flex:1
  },
  titulo:{
    fontWeight:'bold',
    fontSize:24,
    marginVertical:10
  },
  contenedor:{
    marginHorizontal:10,
  },
  ciudad:{
    width:150,
    height:100,
    marginRight:10,
  }
  });