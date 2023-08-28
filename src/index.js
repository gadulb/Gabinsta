import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "./screens/FeedScreen";
import ShareScreen from "./screens/ShareScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ImageUploadComponent from "./screens/ImageUploadComponent";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
                    name="TabsNavigation"
                    component={TabsNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FeedScreen"
                    component={FeedScreen}
                    options={{ title: "Bem vindo!", 
                    headerShown: false 
                    }}
                />
                <Stack.Screen
                    name="ShareScreen"
                    component={ShareScreen}
                    options={{ title: "Compartilhe!" }}
                />
                <Stack.Screen
                    name="ImageUploadComponent"
                    component={ImageUploadComponent}
                    options={{ title: "Compartilhe FOTO" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tabs = createMaterialBottomTabNavigator();

function TabsNavigation() {
    return (
        <Tabs.Navigator
            activeColor="black"
            tabBarStyle={{
                backgroundColor: "black",
            }}
            barStyle={{
                backgroundColor: "white",
            }}
        >
            <Tabs.Screen
                name="FeedScreen"
                component={FeedScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tabs.Screen
                name="ShareScreen"
                component={ShareScreen}
                options={{
                    tabBarLabel: "Share",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="share" color={color} size={26} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}