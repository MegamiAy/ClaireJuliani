import { signInWithEmailAndPassword } from "firebase/auth";
import { View } from "react-native";
import {
  Button,
  TextInput,
  Paragraph,
  // Alert,
  Checkbox,
} from "react-native-paper";
import { auth } from "../config/firebase";
import { useState } from "react";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checked, setChecked] = useState(false);

  // const ReminderInformation = () => {
  //   if (lembrete.trim() !== "") {
  //     // Aqui você pode adicionar a lógica para salvar o lembrete em algum lugar
  //     Alert.alert("Lembrete salvo com sucesso!");
  //     setLembrete("");
  //   } else {
  //     Alert.alert("Informações de Login não salvas!");
  //   }
  // };

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        console.log("Usuário logado com sucesso!");

        if (checked) {
          console.log("O usuário quer salvar os dados para o futuro");
        }

        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log("Falha ao logar usuário: " + error);
        const errorCode = error.code;
        if (email === "" || senha === "") {
          console.log("Preencha todos os campos!");
          return;
        } else if (errorCode === "auth/invalid-email") {
          console.log("Email inválido!");
          return;
        } else if (!email.includes("@")) {
          console.log("E-mail inválido!");
          return;
        } else if (!email.includes(" ")) {
          console.log("E-mail inválido!");
          return;
        } else if (!email.includes(".")) {
          console.log("E-mail inválido!");
          return;
        }
      });
  }

  return (
    <View>
      <Paragraph>Faça seu login </Paragraph>
      <TextInput
        label={"E-mail"}
        placeholder="Digite seu E-mail"
        // ERRO NO VALUE ARRUMAR NA PROXIMA AULA
        onchangeText={setEmail}
        // // mode="outlined"
      />
      <TextInput
        label={"Senha"}
        placeholder="Digite seu Senha"
        value={pass}
        // onchangeText={setPass}
        // mode="outlined"
      />
      {/* <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      /> */}
      {/* estou fazendo o lembrete NÃO MEXER EM NADAAAAAAAAAAAQ FDP" */}
      <Button mode="contained" onProgress={handleLogin} >
        Entrar
      </Button>
    </View>
  );
}
