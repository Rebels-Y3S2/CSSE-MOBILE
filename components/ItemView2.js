import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";

export default function ItemView2(props) {
    const { name, unitPrice, stock } = props.item;
    
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>
                {name}
            </Text>
            <Text style={styles.itemCode}>
                Rs. {unitPrice}
            </Text>
            <Text style={styles.itemCode}>
                only {stock} left
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 5,
        borderWidth: 0.2,
        borderRadius: 2,
        marginHorizontal: 10,
        borderColor: '#656565'
    },
    itemName: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: '600'
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        marginBottom: 5,
        color: '#757575'
    },
    border: {

    }
});