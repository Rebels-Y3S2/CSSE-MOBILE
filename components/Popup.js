import { Button } from '@react-native-material/core';
import { Text, View } from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog';

export default function Popup() {
  return (
    <Dialog
      visible={true}
      dialogTitle={<DialogTitle title="Dialog Title" />}
      dialogAnimation={new SlideAnimation({
        slideFrom: 'bottom',
      })}
      footer={
        <DialogFooter>
          <DialogButton
            text="ADD TO CART"
            onPress={() => {}}
          />
        </DialogFooter>
      }
    >
      <DialogContent>
          <Text>Choose the amount you want</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, margin: 10 }}>2</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button style={{ margin: 5 }} title='    -    ' />
          <Button style={{ margin: 5 }} title='    +    ' />
        </View>
      </DialogContent>
    </Dialog>
  )
}