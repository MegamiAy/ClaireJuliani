import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";

export default function CadastroScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  // const [nome, setNome] = useState("");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuário criado com sucesso!");
      navigation.navigate("LoginScreen");
    })
    .catch((error) => {
      console.log("Falha ao criar  usuário: " + error);

      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        console.log("Email já está em uso!");
      } else if (errorCode === "auth/invalid-email") {
        console.log("Email inválido!");
      } else if (errorCode === "auth/weak-password") {
        console.log("Email já em uso!");
      }
    });

  return (
    <View>
      <Paragraph>Faça seu cadastro </Paragraph>
      <TextInput
        label={"E-mail"}
        placeholder="Digite seu E-mail"
        value={email}
        onchangeText={setEmail}
        mode="outlined"
      />
      <TextInput
        label={"Senha"}
        placeholder="Digite sua Senha"
        value={senha}
        onchangeText={setSenha}
        mode="outlined"
      />
      <Button mode="contained" onPress={CadastroScreen}>
        Salvar
      </Button>
    </View>
  );
}
