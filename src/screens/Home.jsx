import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from '../bases/Header';
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Header title="Home Screen"/>  
        <Text>bom dia </Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});