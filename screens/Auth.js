import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import initfirebase from "../config";

export default function Auth(props) {
  const [email, setEmail] = useState("walid@test.com");
  const [password, setPassword] = useState("123456");
  const auth = initfirebase.auth();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.view2style}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Authentification
        </Text>
        <TextInput
          style={styles.TextInput}
          onChangeText={(e) => {
            setEmail(e);
          }}
          placeholder="abc@abc.com"
          keyboardType="email-address"
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          onChangeText={(e) => {
            setPassword(e);
          }}
          placeholder="password"
          keyboardType="default"
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity
          style={{
            width: "50%",
            borderRadius: 5,
            backgroundColor: "#6e2c00",
            height: 40,
            width: 100,
            justifyContent: "center",
            marginTop: 10,
          }}
          onPress={() => {
            if (email.length === 0 || !email.includes("@"))
              alert("L'email doit être comme suit: abc@abc.com !");
            else if (password.length < 6)
              alert("Le mot de passe doit contenir au moins 6 caractères !");
            else {
              auth
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                  props.navigation.replace("home");
                })
                .catch((erreur) => {
                  alert(erreur);
                });
            }
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
            }}
          >
            Validate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            marginRight: 20,
            marginTop: 10,
            marginBottom: 10,
            alignItems: "flex-end",
          }}
          onPress={() => {
            props.navigation.replace("signup");
          }}
        >
          <Text style={{ color: "white" }}>Create new User ?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDBB99",
    alignItems: "center",
    justifyContent: "center",
  },
  view2style: {
    backgroundColor: "#E59866",
    height: 400,
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    margin: 10,
    color: "black",
    height: 60,
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 5,
    textAlign: "center",
  },
});
