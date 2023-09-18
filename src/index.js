import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RecPass from "./screens/RecPass";
import HomeScr from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="RecPass"
                    component={RecPass}
                    options={{
                        title: "Recuperar senha",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}