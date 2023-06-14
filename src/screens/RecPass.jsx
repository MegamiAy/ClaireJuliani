import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from "react";
import db from "../config/firebase";
import auth from "../config/firebase";
                                                




export default function RecPass() {
    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState('');

    sendPasswordResetEmail(auth, email)
    .then (() => {
        setAlerta('Email enviado com sucesso!')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
    return(
        <View>
            <Text>Esqueci minha senha</Text>
            <TextInput 
                label="Insira seu email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Button onPress={() => sendPasswordResetEmail(email)}>Enviar</Button>
            <Text>{alerta}</Text>
        </View>
    )
}

