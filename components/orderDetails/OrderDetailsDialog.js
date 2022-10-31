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

export default function OrderDetailsDialog({ visible, setDialogOpen, onDelete, selectedItem, handleGetOrders, dialogOpen, setSelectedItem }) {
  const [amount, setAmount] = useState(1)
  // const [modifiedMappedData, setModifiedMappedData] = useState([])
  
  useEffect(() => {
    setAmount(1);
  }, [visible]);
  
  // useEffect(() => {
  //   setModifiedMappedData(selectedItem?.orderItems.map((d) => {
  //     return {
  //       agreedPrice: d?.agreedPrice,
  //       item: d?.item?._id,
  //       quantity: d?.quantity,
  //       supplierDetails: d?.supplierDetails,
  //     }
  //   }))
  // }, [visible])

  return (
    <View>
    <Dialog
      visible={visible}
      dialogTitle={<DialogTitle style={styles.container} title={<Text style={styles.title}>{constants.ORDER_DETAILS}</Text>} />}
      dialogAnimation={new SlideAnimation(styles.animation)}
      footer={
        <DialogFooter style={styles.footer_container}>
          <DialogButton
            text={<Text style={styles.title}>{constants.CLOSE}</Text>}
            onPress={() => {setDialogOpen(false); handleGetOrders();} }
          />
          <DialogButton
            text={<Text style={styles.title}>{constants.DELETE_BUTTON_TEXT}</Text>}
            onPress={() => onDelete(amount)}
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
            <Text style={styles.itemDetailsStatus}>
              Status - {Status.find(({value}) => value === selectedItem?.orderStatus)?.displayText? Status.find(({value}) => value === selectedItem?.orderStatus)?.displayText : "-"}
              <Text style={{fontSize: 25, color: Status.find(({value}) => 
                    value === selectedItem?.orderStatus)?.color
                , textAlign: 'right'}}>&#8226;</Text>
            </Text>
            <Text style={styles.itemDetails}>
              Ordered At - {moment(selectedItem?.createdAt).format('lll')}
            </Text>
            <Text style={styles.itemDetails}>
              Total Amount - {getPriceInRupees(selectedItem?.totalAmount)}
            </Text>
          </View>
          <View>
            <OrderEditScreen
              orderData={selectedItem}
              // modifiedMappedOrderData={modifiedMappedData}
              setDialogOpen={setDialogOpen}
              dialogOpen={dialogOpen}
              // setModifiedMappedData={setModifiedMappedData}
              handleGetOrders={handleGetOrders}
            />
          </View>
        </ScrollView>
      </DialogContent>
    </Dialog>
    </View>
  )
}