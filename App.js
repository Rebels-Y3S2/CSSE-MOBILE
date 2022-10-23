
import { View, Text } from 'react-native';
import Appbar from './components/Appbar';
import ListItemsScreen from './screens/ItemList/ListItemsScreen';

export default function App() {
  return (
    <View>
        <Appbar />
        <ListItemsScreen />
    </View>




  );
}