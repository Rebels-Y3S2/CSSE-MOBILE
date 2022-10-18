import { Button } from '@react-native-material/core';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import { ADD_TO_CART_BUTTON_TEXT, ADD_TO_CART_SUBTITLE, MINUS_BUTTON, PLUS_BUTTON } from '../../utils/constants';
import styles from './styles';

export default function AddtoCartDialog({ visible, title, onAddToCart }) {
  const [amount, setAmount] = useState(1)
  const decrementAmount = () => setAmount(amount - 1);
  const incrementAmount = () => setAmount(amount + 1);

  useEffect(() => {
    setAmount(1);
  }, [visible]);

  return (
    <Dialog
      visible={visible}
      dialogTitle={<DialogTitle title={title} />}
      dialogAnimation={new SlideAnimation(styles.animation)}
      footer={
        <DialogFooter>
          <DialogButton
            text={ADD_TO_CART_BUTTON_TEXT}
            onPress={() => onAddToCart(amount)}
          />
        </DialogFooter>
      }
    >
      <DialogContent>
        <Text>{ADD_TO_CART_SUBTITLE}</Text>
        <View style={styles.amountView}>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
        <View style={styles.amountView}>
          <Button style={styles.btn} title={PLUS_BUTTON} onPress={decrementAmount} />
          <Button style={styles.btn} title={MINUS_BUTTON} onPress={incrementAmount} />
        </View>
      </DialogContent>
    </Dialog>
  )
}
