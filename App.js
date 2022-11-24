import Auth from './screens/Auth';
import Home from './screens/Home';
import Signup from './screens/Signup';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="auth" component={Auth}></Stack.Screen>
      <Stack.Screen name="signup" component={Signup}></Stack.Screen>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      {/* <Stack.Screen name="Chat" component={Chat}></Stack.Screen> */}
    </Stack.Navigator>
  </NavigationContainer>
)};