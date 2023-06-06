import { signInWithEmailAndPassword } from "firebase/auth";
import { View } from "react-native";
import { Button, TextInput, Paragraph } from "react-native-paper";
import { auth } from "../firebase";
import { useState } from "react";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function LoginScreen(){
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          console.log("Usuário logado com sucesso!");
          navigation.navigate("HomeScreen");
        })
        .catch((error) => {
            console.log("Falha ao logar usuário: " + error);
            const errorCode = error.code;
            if  (email === "" || senha === ""){
                console.log("Preencha todos os campos!");
                return;
            }
            else if (errorCode === "auth/invalid-email") {
                console.log("Email inválido!");
                return;
            }
            else if (!email.includes("@")) {
                console.log("E-mail inválido!");
                return;
            }
            else if (!email.includes(" ")) {
                console.log("E-mail inválido!");
                return;
            }
            else if (!email.includes(".")) {
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
                value={email}
                onchangeText={setEmail}
                mode="outlined"
            />
            <TextInput
                label={"Senha"}
                placeholder="Digite seu Senha"
                value={senha}
                onchangeText={setSenha}
                mode="outlined"
            />
            
            <Button mode="contained" onProgress={LoginScreen} />
        </View>
    );
    
}