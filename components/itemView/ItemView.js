import { View, Text } from 'react-native'
import { getAvailableAmount, getPriceInRupees } from '../../utils/common'
import styles from './styles'

export default function ItemView (props) {
  const { itemName, unitPrice, stock } = props.item

  return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>
                {itemName}
            </Text>
            <Text style={styles.itemDetails}>
                {getPriceInRupees(unitPrice)}
            </Text>
            <Text style={styles.itemDetails}>
                {getAvailableAmount(stock)}
            </Text>
        </View>
  )
}
