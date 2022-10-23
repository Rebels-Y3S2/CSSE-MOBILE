import { View, Text } from "react-native";
import { getAvailableAmount, getPriceInRupees } from "../../utils/common";
import styles from "./styles";

export default function ItemView(props) {
    const { name, unitPrice, stock } = props.item;
    
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>
                {name}
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
