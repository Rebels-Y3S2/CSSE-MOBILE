import Appbar from './components/Appbar'
import { ToastProvider } from 'react-native-toast-notifications'
import PlaceOrderScreen from './screens/Order/PlaceOrderScreen'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import OrderList from './screens/Order/Orders';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App () {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Appbar />
      <NavigationContainer>
        <ToastProvider>
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

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={30} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: '#002951',
            })}
          >
            <Tab.Screen name="My Orders" component={OrderList} />
            <Tab.Screen name="Order" component={PlaceOrderScreen} />
          </Tab.Navigator>
        </ToastProvider>
      </NavigationContainer>
    </>
  )
}

