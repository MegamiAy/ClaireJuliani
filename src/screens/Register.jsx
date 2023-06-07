import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import Header from "../bases/Header";
import Footer from "../bases/Footer";
import { auth } from "../config/firebase";

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
    <View>
      <Header title="Registro de Usuário" />
      <Paragraph>Faça seu cadastro: </Paragraph>
      <TextInput
        label={"E-mail"}
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
      />
      <TextInput
        label={"Nome de Usuário"}
        placeholder="Digite o nome de usuário"
        value={user}
        onChangeText={setUser}
        mode="outlined"
      />
      <TextInput
        label={"Senha"}
        placeholder="Digite sua Senha"
        value={pass}
        onChangeText={setPass}
        mode="outlined"
      />
      <TextInput
        label={"Confirme a senha"}
        placeholder="Digite a Senha"
        value={conf}
        onChangeText={setConf}
      />
      <Button mode="contained" onPress={handleRegister}>
        Salvar
      </Button>
      <Footer />
    </View>
  );
}