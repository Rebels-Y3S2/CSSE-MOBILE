import { Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import { getPriceInRupees } from '../../utils/common.js';
import * as constants from '../../utils/constants.js';
import styles from './styles';
import moment from 'moment'
import { Card, ListItem, Avatar } from '@rneui/themed'

export default function OrderDetailsDialog({ visible, setDialogOpen, onAddToCart, selectedItem }) {
  const [amount, setAmount] = useState(1)
  
  useEffect(() => {
    setAmount(1);
  }, [visible]);

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
        <View>
          <Card>
            <Card.Title>Ref No.</Card.Title>
            <Card.Divider />
            <Text>{selectedItem?.referenceNo}</Text>
          </Card>
          <Card>
            <Card.Title>Status.</Card.Title>
            <Card.Divider />
            <Text>{selectedItem?.isAccepted === 0? constants.NOT_ACCEPTED : constants.ACCEPTED}
            {selectedItem?.isAccepted === 0?
                    <Text style={{fontSize: 35, color: 'red', textAlign: 'right'}}>&#8226;</Text> :
                    <Text style={{fontSize: 35, color: '#3fc18c', textAlign: 'right'}}>&#8226;</Text>
                }
            </Text>
          </Card>
          <Card>
            <Card.Title>Total Amount</Card.Title>
            <Card.Divider />
            <Text>{getPriceInRupees(selectedItem?.totalAmount)}</Text>
          </Card>
          <Card>
            <Card.Title>Ordered Date & Time</Card.Title>
            <Card.Divider />
            <Text>{moment(selectedItem?.createdAt).format('lll')}</Text>
          </Card>
        </View>
      </DialogContent>
    </Dialog>
  )
}