import { useEffect, useState } from "react";
import { View } from "react-native";
import { getItemsApi } from "../api/itemsApi";
import ListItems2 from "../components/ListItems2";

export default function ListItemsScreen() {
    const [items, setItems] = useState([]);
    const [isAddToCardOpen, setAddtoCart] = useState(false);

    useEffect(() => {
        setItems(getItemsApi());
    }, []);

    return (
        <View>
            <ListItems2
                items={items}
                onItemPress={(item) => console.log(item)}
            />
        </View>

    );
}