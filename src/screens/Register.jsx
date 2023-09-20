import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Button, Paragraph } from "react-native-paper";
import Header from "../bases/Header";
import Footer from "../bases/Footer";
import { auth } from "../config/firebase";
import styles from "../utils/styles";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [conf, setConf] = useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, pass, conf)
      .then((userCredential) => {
        console.log("Usuário criado com sucesso!");
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Falha ao criar usuário: " + error);

        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          console.log("Email já está em uso!");
        } else if (errorCode === "auth/invalid-email") {
          console.log("Email inválido!");
        } else if (errorCode === "auth/weak-password") {
          console.log("Senha fraca!");
        }
      });
  };

  return (
    <View style={styles.BodyH}>
      <Header title="Registro de Usuário" />
      <Paragraph>Faça seu cadastro: </Paragraph>
      <TextInput
        label={"E-mail"}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
        // mode="outlined"
        style={styles.InputL}
      />
      <TextInput
        label={"Nome de Usuário"}
        placeholder="Digite o nome de usuário"
        value={user}
        onChangeText={setUser}
        // mode="outlined"
        style={styles.InputL}
      />
      <TextInput
        label={"Senha"}
        placeholder="Digite sua Senha"
        value={pass}
        onChangeText={setPass}
        // mode="outlined"
        style={styles.InputL}
      />
      <TextInput
        label={"Confirme a senha"}
        placeholder="Digite a Senha"
        value={conf}
        onChangeText={setConf}
        style={styles.InputL}
      />
      <Button
        style={styles.ButtonC}
        onPress={handleRegister}>
        Cadastrar
      </Button>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    fontWeight: "bold",
  },

  inputStyle: {
    color: "#000",
    backgroundColor: "#fff",
    height: 40,
    width: "80%",
    margin: 8,
    borderWidth: 1,
    padding: 15,
    padding: 5,
    borderRadius: 0,
    outlineColor: "#000",
    outlineStyle: "solid",
    outlineWidth: 1,
  },

  Button: {
    backgroundColor: "#000",
    marginTop: 20,
    width: "40%",
    borderRadius: 0,
    color: "#7fffd4",
  },
});
