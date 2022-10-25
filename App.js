import { View, ScrollView } from 'react-native'
import Appbar from './components/Appbar'
import ListItemsScreen from './screens/ItemList/ListItemsScreen'
import { ToastProvider } from 'react-native-toast-notifications'

export default function App () {
  return (
    <ToastProvider>
      <ScrollView>
        <Appbar />
        <ListItemsScreen />
      </ScrollView>
    </ToastProvider>

  )
}
