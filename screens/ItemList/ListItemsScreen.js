import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native'
import { getItems } from '../../api/itemsApi'
import AddtoCartDialog from '../../components/addToCart/AddtoCartDialog'
import ItemsListView from '../../components/itemsListView/ItemsLIstView'
import * as constants from '../../utils/constants.js'
import { Dropdown } from 'react-native-element-dropdown'
import { HStack, VStack, Box, Divider, Stack, Button } from '@react-native-material/core'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { qty } from '../../utils/qty'
import { Card, ListItem, Avatar } from '@rneui/themed'
import styles from './styles'
import { addOrder } from '../../api/orderApi'
import { useToast } from 'react-native-toast-notifications'

export default function ListItemsScreen () {
  const toast = useToast()
  const [items, setItems] = useState([])
  const itemList = { itemId: '001', qty: 6 }
  const [list, setList] = useState([])

  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedItemData, setItemData] = useState({})
  const [isFocus, setIsFocus] = useState(false)

  const [selectedQty, setSelectedQty] = useState(null)
  const [selectedQtyData, setQtyData] = useState({})
  const [isFocusQty, setIsFocusQty] = useState(false)

  const [itemFormData, setItemFormData] = useState([])
  const [formData, setFormData] = useState([])
  const [formDataList, setFormDataList] = useState([])

  useEffect(() => {
    // setItems(getItemsApi().Item);
    getItems().then((data) => {
      setItems(data.data?.Item)
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

  const handleSubmit = async (orderObj) => {
    const total = formData.map((d) => d.agreedPrice)
    orderObj = {
      orderItems: formData,
      totalAmount: total.reduce((a, v) => a = a + v, 0),
      orderStatus: 1
    }

    await addOrder(orderObj).then((res) => {
      if (res?.data?.isSuccess) {
        toast.show('Order Created Successfully!', { type: 'success', placement: 'bottom', duration: 4000, animationType: 'zoom-in', topOffset: 30,bottomOffset: 40 })
      } else {
        toast.show('Error on creating the order!', { type: 'warning', placement: 'bottom', duration: 4000, animationType: 'zoom-in', topOffset: 30, bottomOffset: 40 })
      }
    })
      .catch((e) => {
        console.log(e)
      })
  }

  const renderQtyLabel = () => {
    if (selectedQty || isFocusQty) {
      return (
          <Text style={[styles.label, isFocusQty && { color: 'blue' }]}>
            Select Qty
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
            <Card>
              <Card.Title>Order Now</Card.Title>
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
                        labelField={'label'}
                        valueField="_id"
                        placeholder={!isFocus ? 'Select Item' : '...'}
                        searchPlaceholder="Search Items"
                        value={selectedItem}
                        onFocus={() => {
                          setIsFocus(true)
                          setSelectedItem(null)
                          setItemData(null)
                        }}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setSelectedItem(item._id)
                          setItemData({ itemId: item._id, itemName: item.itemName, stock: item.stock, unitPrice: item.unitPrice })
                          setItemFormData({ itemId: item._id, supplierDetails: '634ea905f0c2bea76c657643' })
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
                          placeholder={!isFocusQty ? 'Select Quantity' : '...'}
                          searchPlaceholder="Search Qty"
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
                        variant="contained"
                        disabled={!selectedQty}
                        onPress={() => handleAdd()}
                        trailing={props => <Icon name="plus" {...props} size={25} style={{ marginLeft: -10 }} />}
                      />
                    </View>
                    <View>
                      <Button
                        style={styles.minusBtn}
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
                    <Avatar source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1710/1710412.png' }} />
                    <ListItem.Content>
                      <ListItem.Title style={styles.cardName}>{l.itemName}</ListItem.Title>
                      <ListItem.Subtitle><Text style={styles.cardSubtitle}>Unit Price &nbsp;&nbsp;&nbsp;&nbsp;-</Text> Rs.{l.unitPrice}/-</ListItem.Subtitle>
                      <ListItem.Subtitle><Text style={styles.cardSubtitle}>QTY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</Text> {l.quantity}</ListItem.Subtitle>
                      <ListItem.Subtitle><Text style={styles.cardSubtitle}>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</Text> Rs.{(Number(l.unitPrice) * Number(l.quantity))}/-</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))
              }
          </Card>
          </View>
        </View>

        <View>
          <Card>
            <Card.Title>Place Order</Card.Title>
            <Card.Divider />
            <Text style={styles.cardSubtitle}>Total Items : {list.length}</Text>
            {totalAgreed()}
            {/* <Text style={styles.cardSubtitle}>Total Price : {formData.filter((d) => d.agreedPrice)}</Text> */}
            <Button style={styles.minusBtn} variant="contained" disabled={list.length === 0} onPress={() => handleSubmit()} title={'Place Order'}/>
          </Card>
        </View>
        </ScrollView>
  )
}
