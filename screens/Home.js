import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ListProfil from "./FragmentHome/ListProfil";
import Group from "./FragmentHome/Group";
import Profil from "./FragmentHome/Profil";
import Chat from "./FragmentHome/Chat";

export default function Accueil() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="profil"
      activeColor="#6e2c00"
      inactiveColor="#b9a795"
    >
      <Tab.Screen name="list" component={ListProfil}></Tab.Screen>
      <Tab.Screen name="group" component={Group}></Tab.Screen>
      <Tab.Screen name="profil" component={Profil}></Tab.Screen>
      <Tab.Screen name="chat" component={Chat}></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4ccb3",
    alignItems: "center",
    justifyContent: "center",
  },
  view2style: {
    backgroundColor: "#b9a795",
    height: 400,
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    margin: 10,
    color: "black",
    height: 50,
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
    textAlign: "center",
  },
});
