import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "./screens/FeedScreen";
import ShareScreen from "./screens/ShareScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FeedScreen"
                    component={FeedScreen}
                    options={{ title: "Bem vindo!", 
                    // headerShown: false 
                    }}
                />
                <Stack.Screen
                    name="ShareScreen"
                    component={ShareScreen}
                    options={{ title: "Compartilhe!" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}