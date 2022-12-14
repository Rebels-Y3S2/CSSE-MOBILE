import Appbar from './components/Appbar'
import { ToastProvider } from 'react-native-toast-notifications'
import PlaceOrderScreen from './screens/Order/PlaceOrderScreen'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrderList from './screens/Order/Orders';
import Splash from './screens/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login';

export default function App () {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'My Orders') {
            iconName = focused
              ? 'list-outline'
              : 'list-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cart-outline' : 'cart-outline';
          }
            return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: '#002951',
        })}
      >
        <Tab.Screen name="My Orders" component={OrderList} />
        <Tab.Screen name="Order" component={PlaceOrderScreen} />
      </Tab.Navigator>
    )
  }

  const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    );
  }
  return (
    <>
      <Appbar />
      <NavigationContainer>
        <ToastProvider>
          <MainStackNavigator />
        </ToastProvider>
      </NavigationContainer>
    </>
  )
}

