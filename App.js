import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Pages/Cart';
import ChangePassword from './Pages/ChangePassword';
import Checkout from './Pages/Checkout';
import EditProfile from './Pages/Edit-Profile';
import Home from './Pages/Home';
import Clientlogin from './Pages/Login';
import MyAddresses from './Pages/My-Addresses';
import OrderHistory from './Pages/OrderHistory';
import DetailPage from './Pages/ProductDetailPage';
import Profile from './Pages/Profile';
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
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Profile"
          component={Profile}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Order-History"
          component={OrderHistory}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Edit-Profile"
          component={EditProfile}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="Change-Password"
          component={ChangePassword}

        />
        <Stack.Screen
          screenOptions={{
            headerShown: false
          }}
          options={{ header: () => null }}
          name="My-Addresses"
          component={MyAddresses}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
