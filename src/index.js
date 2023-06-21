import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RecPass from "./screens/RecPass";

const Stack = createNativeStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="RecPass"
                    component={RecPass}
                    options={{
                        title: "Recuperar Senha",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
