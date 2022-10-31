import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { getItemsApi } from "../../api/itemsApi";
import { getOrders, getOrderByOrderId, removeorder } from "../../api/orderApi";
import ItemsListView from "../../components/itemsListView/ItemsLIstView";
import OrderDetailsDialog from "../../components/orderDetails/OrderDetailsDialog";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrderList ({navigation}) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedOderData, setSelectedOrderData] = useState([])

  useEffect(() => {
      setItems(getItemsApi());
  }, []);

  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data?.data?.responseData)
    })
  }, [])

  useEffect(() => {
    if(selectedItem) {
      getOrderByOrderId(selectedItem?._id).then((data) => {
        // setSelectedOrderData(data.request._response);
        setSelectedOrderData(data?.data?.responseData);
      })
    }
  }, [selectedItem])

  function handleAddtoCart() {
      if(selectedItem) {
        removeorder(selectedItem?._id).then((data) => {
          // setSelectedOrderData(data.request._response);
        })
      }
      setDialogOpen(false);
  }

  function handleOnItemPress(item) {
      setSelectedItem(item);
      setDialogOpen(true);
  }

  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
      <View>
          <ItemsListView
              items={items}
              orders={orders}
              onItemPress={handleOnItemPress}
          />
          <OrderDetailsDialog
              visible={dialogOpen}
              title={selectedItem?.name}
              selectedItem={selectedItem}
              onAddToCart={handleAddtoCart}
              setDialogOpen={setDialogOpen}
              selectedOderData={JSON.stringify(selectedOderData)}
          />
      </View>
  );
};
