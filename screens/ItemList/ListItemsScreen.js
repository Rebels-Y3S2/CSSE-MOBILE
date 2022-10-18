import { useEffect, useState } from "react";
import { View } from "react-native";
import { getItemsApi } from "../../api/itemsApi";
import AddtoCartDialog from "../../components/addToCart/AddtoCartDialog";
import ListItems2 from "../../components/ListItems2";

export default function ListItemsScreen() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        setItems(getItemsApi());
    }, []);

    function handleAddtoCart(amount) {
        console.log(amount);
        setDialogOpen(false);
    }

    function handleOnItemPress(item) {
        setSelectedItem(item);
        setDialogOpen(true);
    }

    return (
        <View>
            <ListItems2
                items={items}
                onItemPress={handleOnItemPress}
            />
            <AddtoCartDialog 
                visible={dialogOpen}
                title={selectedItem?.name}
                onAddToCart={handleAddtoCart}
            />

        </View>

    );
}