import React from 'react'; 
import {View,StyleSheet,Text, Image, ScrollView} from 'react-native'; 

export default function Gatos(){ 
    return( 
      <ScrollView style={{flexDirection:'column',margin:10, paddingHorizontal:10}}> 
      <View style={{flexDirection:'row', margin:10}}>
      <Image style={styles.ciudad} source={require('../img/Gato1.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Gato persa </Text> 
      <Text style={{paddingTop:40, fontStyle:'italic'}}>Región de origen: Irán </Text> 
      </View>
      </View>
      

      <View style={{flexDirection:'row', margin:10}}>
      <Image style={styles.ciudad} source={require('../img/Gato2.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Gato Maine Coon</Text> 
      <Text style={{paddingTop:40, fontStyle:'italic'}}>Región de origen:Estados Unidos </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:10}}>
      <Image style={styles.ciudad} source={require('../img/Gato3.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Gato Bengala</Text> 
      <Text style={{paddingTop:40, fontStyle:'italic'}}>Región de origen:Estados Unidos </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:10}}>
      <Image style={styles.ciudad} source={require('../img/Gato4.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Gato siamés </Text> 
      <Text style={{paddingTop:40, fontStyle:'italic'}}>Región de origen: Tailandia </Text> 
      </View>
      </View>

      <View style={{flexDirection:'row', margin:10}}>
      <Image style={styles.ciudad} source={require('../img/Gato5.jpg')}></Image>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontWeight:'bold'}}> Gato Sphynx </Text> 
      <Text style={{paddingTop:40, fontStyle:'italic'}}>Región de origen: Toronto </Text> 
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