import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { View, Text, TouchableOpacity,  } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import styles from "../utils/styles";

export default function Login({navigation}){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Usuário UID: ", user.uid)
                navigation.navigate('Home')
            } else {
                console.log("Usuário não logado")
            }
        })
    }, [])

    function handleLogin() {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home')
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <View>
            <View style={styles.BodyL}>
                <TextInput
                placeholder="Email..."
                value={email}
                onChangeText={setEmail}
                style={styles.InputL}
                />  
                <TextInput
                placeholder="Senha..."
                value={senha}
                onChangeText={setSenha}
                style={styles.InputL}
                />
                {/* <TouchableOpacity onPress={() => navigation.navigate("Recuperar")} style={styles.Touch}>
                    <Text>Esqueceu a senha?</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => navigation.navigate("Registro")} style={styles.Touch}>
                    <Text>Cadastre-se</Text>
                </TouchableOpacity>
                <Button
                onPress={handleLogin}
                mode="contained"
                style={styles.ButtonL}
                >Logar</Button>
            </View>    
        </View>
    );
}
