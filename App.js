import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/screens/Home.jsx';
import { DefaultTheme, Provider as NativeProvider } from "react-native-paper";

export default function App() {
  return (
  <NativeProvider>
    <RootNavigation />
  </NativeProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
