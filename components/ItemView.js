import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import Container from "./Container";

export default function ItemView() {
    const image = { uri: "https://www.scrolldroll.com/wp-content/uploads/2020/09/Clever-Tom-sending-in-other-cats-Tom-Jerry-Memes.jpg" };

    return (
        <View>
            <Container>
                {/* <ImageBackground source={image} imageStyle={{ borderTopLeftRadius: 6, borderTopRightRadius: 6 }} resizeMode="cover" style={styles.itemContainer} /> */}
                <View style={{ padding: 5 }}>
                    <Text style={styles.itemName}>
                        Constrction site Hammar
                    </Text>
                    <Text style={styles.itemCode}>
                        Rs. 10000
                    </Text>
                    <Button title="add to cart" />
                </View>
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'flex-end',
        height: 200
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
    }
});