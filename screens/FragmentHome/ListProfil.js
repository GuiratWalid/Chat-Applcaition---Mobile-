import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import initfirebase from '../../config/index'
import { useFocusEffect } from '@react-navigation/native';

export default function ListProfil(props) {
  const [data, setData] = useState([]);
  const database = initfirebase.database();
  //te5ou ref mil profile
  const ref_profils = database.ref('profils');
  //ecouteur sur le contenu de la base
  //ay modification tbadel il code illota sera declanché
  //child changed elemnet elli tbadel 
  useEffect(()=>{
    data[0]=null;
    ref_profils.on("value",(dataSnapshot)=>{
      const dd=dataSnapshot.val();
      setData(
        Object.keys(dd).map((val)=>{
          return {
            nom : dd[val].nom ,
            prenom : dd[val].prenom,
            pseudo : dd[val].pseudo
          }
        })
      );
    });   
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste Des Profils</Text>
      <FlatList data={data} style={{ width: "100%", height: "100%" }}
        renderItem={({ item }) => (
          <View style={styles.view}>
            <Image style={{ width: 70, height: 70 }} source={require("../../assets/profil.png")} resizeMode="center"></Image>
            <View style={{ alignItems: "flex-start", margin: 10, }}>
              <Text style={{
                fontSize: 15,
                fontWeight: "bold",
                alignSelf: "center",
              }}>{item.nom}</Text>
              <Text style={{
                fontSize: 15,
                fontWeight: "bold",
                alignSelf: "center",
              }}
                onPress={() => props.navigation.replace('chat')}>{item.pseudo}</Text>
            </View>
          </View >

        )}>

      </FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    felx: 1,
    alignItems: 'center',
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 36,
    fontWeight: "bold"
  },
  view: {
    height: 90,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "90%", borderWidth: 1,
    borderColor: "black"
    , margin: 10,
    alignSelf: "center"

  },
  profileImage: {
    width: 80,
    height: 80,
    alignSelf: "right"
  },
}
);