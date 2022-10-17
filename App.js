
import { View, Text } from 'react-native';
import Appbar from './components/Appbar';
import CartView from './components/CartView';
import Container from './components/Container';
import FlexBox from './components/FlexBox';
import ItemsList from './components/ItemsList';
import ItemView from './components/ItemView';
import ListItems2 from './components/ListItems2';
import ListView from './components/ListView';
import Popup from './components/Popup';
import Starting from './components/Starting';
import ListItemsScreen from './screens/ListItemsScreen';

export default function App() {
  return (
    <View>
        <Appbar />
        {/* <CartView /> */}
        {/* <Popup /> */}
        {/* <ItemsList /> */}
        {/* <ListItems2 /> */}
        <ListItemsScreen />
    </View>




  );
}