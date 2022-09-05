import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';
import Clientlogin from './Pages/Login';
import DetailPage from './Pages/ProductDetailPage';
import ClientSignup from './Pages/Register';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Login"
          component={Clientlogin}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Register"
          component={ClientSignup}

        />

        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Home"
          component={Home}

        />

        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Detail-Page"
          component={DetailPage}

        />

        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Cart"
          component={Cart}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Checkout"
          component={Checkout}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
