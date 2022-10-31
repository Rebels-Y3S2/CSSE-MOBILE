import { Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import { getPriceInRupees } from '../../utils/common.js';
import * as constants from '../../utils/constants.js';
import styles from './styles';
import moment from 'moment'
import { Card, ListItem, Avatar } from '@rneui/themed'
import { Status } from '../../utils/status.js';
import OrderEditScreen from '../itemView/OrderEditScreen.js';

export default function OrderDetailsDialog({ visible, setDialogOpen, onAddToCart, selectedItem, selectedOderData }) {
  const [amount, setAmount] = useState(1)
  const [modifiedMappedData, setModifiedMappedData] = useState([])
  
  useEffect(() => {
    setAmount(1);
  }, [visible]);
  
  
  useEffect(() => {
    setModifiedMappedData(selectedItem?.orderItems.map((d) => {
      return {
        agreedPrice: d?.agreedPrice,
        item: d?.item?._id,
        quantity: d?.quantity,
        supplierDetails: d?.supplierDetails,
      }
      
    }))
  }, [selectedItem])
  
  return (
    <Dialog
      visible={visible}
      dialogTitle={<DialogTitle style={styles.container} title={<Text style={styles.title}>{constants.ORDER_DETAILS}</Text>} />}
      dialogAnimation={new SlideAnimation(styles.animation)}
      footer={
        <DialogFooter style={styles.footer_container}>
          <DialogButton
            text={<Text style={styles.title}>{constants.CLOSE}</Text>}
            onPress={() => setDialogOpen(false)}
          />
          <DialogButton
            text={<Text style={styles.title}>{constants.DELETE_BUTTON_TEXT}</Text>}
            onPress={() => onAddToCart(amount)}
          />
        </DialogFooter>
      }
    >
      <DialogContent style={styles.dialogCont}>
        <ScrollView style={{height: 600}}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemDetails}>
              Ref No. - {selectedItem?.referenceNo}
            </Text>
            <Text style={styles.itemDetails}>
              Status - {Status.find(({value}) => value === selectedItem?.orderStatus)?.displayText? Status.find(({value}) => value === selectedItem?.orderStatus)?.displayText : "-"}
              </Text>
              <Text style={styles.itemDetails}>
                Ordered Date - {moment(selectedItem?.createdAt).format('lll')}
              </Text>
              <Text style={styles.itemDetails}>
                Total Amount - {getPriceInRupees(selectedItem?.totalAmount)}
              </Text>
          </View>
          <View>
            <OrderEditScreen orderData={selectedItem} modifiedMappedOrderData={modifiedMappedData}/>
          </View>
        </ScrollView>
      </DialogContent>
    </Dialog>
  )
}