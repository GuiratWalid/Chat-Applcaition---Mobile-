import { View, Text,Image } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import initfirebase from '../../config/index';
import { TouchableOpacity } from 'react-native';

export default function Profil() {
    const [{nom,prenom,pseudo},setData] = useState({nom:"",prenom:"",pseudo:""});
    const database = initfirebase.database();
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Profil</Text>
      <Image source={require("../../assets/profil.png")}
      style={{
          width:130,
          height:130,
          borderRadius: 63,
          borderWidth: 4,
          borderColor: "white",
          marginBottom:10,
          alignSelf:'center',
          marginTop:20
          
      }}></Image>
      <TextInput onChangeText={e=>{setData({nom:e,prenom,pseudo})}} placeholder="nom" style={styles.TextInput}></TextInput>
      <TextInput onChangeText={e=>{setData({nom,prenom:e,pseudo})}} placeholder="prenom" style={styles.TextInput}></TextInput>
      <TextInput onChangeText={e=>{setData({nom,prenom,pseudo:e})}} placeholder="pseudo" style={styles.TextInput}></TextInput>
      <TouchableOpacity style={styles.button}
       onPress={()=>{
        database.ref("profils").child(`profil_${name}`).set({
            nom,
            prenom,
            pseudo,
        });
    }}>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:18,color:'white'}}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    TextInput:{
        textAlign:"center",
        borderRadius:5 ,
        borderTopEndRadius:5,
        borderTopStartRadius:5,
        marginTop:20,
        width:250,
        alignSelf:"center"
    },
    titre:{
       fontSize:34,
       fontWeight:"bold",
       fontStyle:'italic',
       color:"#E59866",
       textAlign: "center",
       marginBottom:20,
       marginVertical: 10
    },
    container:{
         flex:1,
         backgroundColor:'#EDBB99',
         justifyContent:'center',
    },
    button: {
        width:"50%",
         borderRadius:5,
         backgroundColor:"#6e2c00",
         height:40,
         width:100,
         justifyContent:"center",
         marginTop:80,
         alignSelf:"center"
      },
})