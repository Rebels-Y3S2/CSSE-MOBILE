import { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ItemsListView from "../../components/itemsListView/ItemsLIstView";
import OrderDetailsDialog from "../../components/orderDetails/OrderDetailsDialog";
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiInstance from "../../api/apiInstance";
import OrderService from "../../api/orderApi";

export default function OrderList ({navigation}) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedOderData, setSelectedOrderData] = useState([]);
  const [updated, setUpdated] = useState(false);
  const orderService = OrderService.getOrderService(apiInstance);

  useEffect(() => {
    getAllOrders();
  }, [orders])

  const getAllOrders = () => {
    orderService.getOrders().then((data) => {
      setOrders(data?.data?.responseData)
    })
  }

  useEffect(() => {
    if(selectedItem) {
      orderService.getOrderByOrderId(selectedItem?._id).then((data) => {
        // setSelectedOrderData(data.request._response);
        setSelectedOrderData(data?.data?.responseData);
      })
    }
  }, [selectedItem])

  function handleRemoveOrder() {
      if(selectedItem) {
        orderService.removeorder(selectedItem?._id).then((data) => {
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
