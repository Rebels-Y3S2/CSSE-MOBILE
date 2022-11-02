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
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
      setItems(getItemsApi());
  }, []);

  useEffect(() => {
    getAllOrders();
  }, [orders])

  const getAllOrders = () => {
    getOrders().then((data) => {
      setOrders(data?.data?.responseData)
    })
  }

  useEffect(() => {
    if(selectedItem) {
      getOrderByOrderId(selectedItem?._id).then((data) => {
        // setSelectedOrderData(data.request._response);
        setSelectedOrderData(data?.data?.responseData);
      })
    }
  }, [selectedItem])

  function handleRemoveOrder() {
      if(selectedItem) {
        removeorder(selectedItem?._id).then((data) => {
          getAllOrders()
        })
      }
      setDialogOpen(false);
      setUpdated(true);
  }

  function handleOnItemPress(item) {
      setSelectedItem(item);
      setDialogOpen(true);
  }

  useEffect(() => {
    if (!dialogOpen) {
      setUpdated(false);
    }
  }, [dialogOpen])

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
              onDelete={handleRemoveOrder}
              setDialogOpen={setDialogOpen}
              selectedOderData={JSON.stringify(selectedOderData)}
              handleGetOrders={getAllOrders}
              setSelectedItem={setSelectedItem}
          />
      </View>
  );
};
