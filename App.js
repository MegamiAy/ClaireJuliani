import RootNavigation from "./src";

export default function App() {
  const systemTheme = useColorScheme();
  const theme = systemTheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <RootNavigation />
  );
}
