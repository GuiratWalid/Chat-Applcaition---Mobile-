import Auth from "./screens/Auth";
import Home from "./screens/Home";
import Signup from "./screens/Signup";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="auth"
          component={Auth}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
