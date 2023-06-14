import { StyleSheet, useColorScheme } from "react-native";
import RootNavigation from "./src/screens/Register.jsx";
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as NativeProvider,
} from "react-native-paper";

export default function App() {
  const systemTheme = useColorScheme();
  const theme = systemTheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <NativeProvider theme={theme}>
      <RootNavigation />
    </NativeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
