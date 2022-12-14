import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import {
  getUserId,
  ORDER_NOW,
  PLACE_ORDER,
  PROCUMENT_USER,
  QTY,
  SEARCH_ITEM,
  SEARCH_QTY,
  SELECT_ITEM,
  SELECT_QUANTITY,
  TOTAL_ITEMS,
  UNIT_PRICE
} from "../../utils/constants";
import { Dropdown } from 'react-native-element-dropdown'
import { HStack, VStack, Button } from '@react-native-material/core'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { qty } from '../../utils/qty'
import { Card, ListItem, Avatar } from '@rneui/themed'
import styles from './styles'
import { useToast } from 'react-native-toast-notifications'
import shortid from 'shortid';
import apiInstance from '../../api/apiInstance';
import OrderService from '../../api/orderApi';
import ItemService from '../../api/itemsApi';

export default function PlaceOrderScreen () {
  const toast = useToast()
  const [items, setItems] = useState([])
  const [list, setList] = useState([])

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedItemData, setItemData] = useState({})
  const [isFocus, setIsFocus] = useState(false)

  const [selectedQty, setSelectedQty] = useState(null)
  const [selectedQtyData, setQtyData] = useState({})
  const [isFocusQty, setIsFocusQty] = useState(false)

  const [itemFormData, setItemFormData] = useState([])
  const [formData, setFormData] = useState([])

  const orderService = OrderService.getOrderService(apiInstance);
  const itemService = ItemService.getItemService(apiInstance);

  useEffect(() => {
    itemService.getItems().then((data) => {
      setItems(data.data?.responseData)
    })
    .catch((e) => {
      console.log(e)
    })
  }, [])

  const handleAdd = () => {
    const items = list
    const data = formData
    const totalPrice = { agreedPrice: Number(selectedQtyData.quantity) * Number(selectedItemData.unitPrice) }
    setList([...items, { ...selectedItemData, ...selectedQtyData, ...totalPrice }])
    setFormData([...data, { ...itemFormData, ...selectedQtyData, ...totalPrice }])
    // console.log(list)
    setSelectedItem()
    setSelectedQty()
    setItemData()
  }

  const handleRemove = () => {
    const items = list
    const data = formData
    if (items.length > 0) {
      const lastIndex = items.length - 1
      setList(items.filter((item, index) => index !== lastIndex))
      setFormData(data.filter((item, index) => index !== lastIndex))
    }
  }

  const renderItemLabel = () => {
    if (selectedItem || isFocus) {
      return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Select Item to order
          </Text>
      )
    }
    return null
  }

  const handleSubmit =  (orderObj) => {
    const total = formData.map((d) => d.agreedPrice)
    const tt = total.reduce((a, v) => a = a + v, 0)
    orderObj = {
      orderItems: formData,
      totalAmount: tt,
      orderStatus: tt >= 100000? 1 : 0,
      referenceNo: 'ORD_REF' + shortid.generate(),
    }
    orderService.addOrder(orderObj).then((res) => {
      if (res?.data?.isSuccessful) {
        alert(res?.data?.message)
        setList([]);
      } else {
        alert(res?.data?.message)
      }
    })
      .catch((e) => {
        console.log(e)
        alert(e)
      })
  }

  const renderQtyLabel = () => {
    if (selectedQty || isFocusQty) {
      return (
          <Text style={[styles.label, isFocusQty && { color: 'blue' }]}>
            {SELECT_QUANTITY}
          </Text>
      )
    }
    return null
  }

  const totalAgreed = () => {
    const total = formData.map((d) => d.agreedPrice)
    return (
      <Text style={styles.cardSubtitle}>Total Price : Rs.{total.reduce((a, v) => a = a + v, 0)}/-</Text>
    )
  }

  return (
      <ScrollView>
        <View>
          <View>
            <Card style={styles.orderNowCard}>
              <Card.Title>{ORDER_NOW}</Card.Title>
              <Card.Divider />
                <VStack m={4} spacing={6}>
                  <View style={styles.container}>
                    {renderItemLabel()}
                      <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={items}
                        search
                        maxHeight={300}
                        labelField={'itemName'}
                        valueField="_id"
                        placeholder={!isFocus ? SELECT_ITEM : '...'}
                        searchPlaceholder={SEARCH_ITEM}
                        value={selectedItem}
                        onFocus={() => {
                          setIsFocus(true)
                          setSelectedItem(null)
                          setItemData(null)
                        }}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setSelectedItem(item._id)
                          setItemData({ item: item._id, itemName: item.itemName, stock: item.stock, unitPrice: item.unitPrice })
                          setItemFormData({ item: item._id, supplierDetails: getUserId(PROCUMENT_USER) })
                          setIsFocus(false)
                        }}
                      />
                  </View>
                  <HStack m={4} spacing={6}>
                    <View style={styles.qty_container}>
                      {renderQtyLabel()}
                        <Dropdown
                          style={[styles.dropdown, isFocusQty && { borderColor: 'blue' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={qty}
                          search
                          maxHeight={300}
                          labelField={'key'}
                          valueField="value"
                          placeholder={!isFocusQty ? SELECT_QUANTITY : '...'}
                          searchPlaceholder={SEARCH_QTY}
                          value={selectedQty}
                          onFocus={() => {
                            setIsFocusQty(true)
                            setSelectedQty(null)
                            setQtyData(null)
                          }}
                          onBlur={() => setIsFocusQty(false)}
                          onChange={q => {
                            setSelectedQty(q.value)
                            setQtyData({ quantity: q.value })
                            setIsFocusQty(false)
                          }}
                        />
                    </View>
                    <View>
                      <Button
                        style={styles.plusBtn}
                        color="#002951"
                        variant="contained"
                        disabled={!selectedQty}
                        onPress={() => handleAdd()}
                        trailing={props => <Icon name="plus" {...props} size={25} style={{ marginLeft: -10 }} />}
                      />
                    </View>
                    <View>
                      <Button
                        style={styles.minusBtn}
                        color="red"
                        variant="contained"
                        disabled={list.length === '0'}
                        onPress={() => handleRemove()}
                        trailing={props => <Icon name="minus" {...props} size={25} style={{ marginLeft: -10 }} />}
                      />
                    </View>
                  </HStack>
              </VStack>
            </Card>
          </View>
          <View>
          <Card>
              <Card.Title>Order Details</Card.Title>
              <Card.Divider />
              {
                list.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                    <Avatar source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6052/6052663.png' }} />
                    <ListItem.Content>
                      <ListItem.Title style={styles.itemDetails}>{l.itemName}</ListItem.Title>
                      <ListItem.Subtitle><Text style={styles.itemDetails}>{UNIT_PRICE} &nbsp;&nbsp;&nbsp;&nbsp;-</Text> Rs.{l.unitPrice}/-</ListItem.Subtitle>
                      <ListItem.Subtitle><Text style={styles.itemDetails}>{QTY} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</Text> {l.quantity}</ListItem.Subtitle>
                      <ListItem.Subtitle><Text style={styles.itemDetails}>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</Text> Rs.{(Number(l.unitPrice) * Number(l.quantity))}/-</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))
              }
          </Card>
          </View>
        </View>
        <View>
          <Card>
            <Card.Title>{PLACE_ORDER}</Card.Title>
            <Card.Divider />
            <HStack m={6} spacing={90} style={{marginBottom: 20}}>
              <Text style={styles.cardSubtitle}>{TOTAL_ITEMS} : {list.length}</Text>
              {totalAgreed()}
            </HStack>
            <Button
              style={styles.placeOrdBtn}
              color="#002951"
              variant="contained"
              disabled={list.length === 0}
              onPress={() => handleSubmit()}
              title={PLACE_ORDER}
            />
          </Card>
        </View>
        </ScrollView>
  )
}
