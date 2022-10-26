import { Text, View, StyleSheet } from 'react-native'

export default function FlexBox () {
  return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text>1</Text>
            </View>
            <View style={styles.box2}>
                <Text>2</Text>
            </View>
            <View style={styles.box3}>
                <Text>2</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'row',
    height: 100
  },
  box1: {
    backgroundColor: 'red',
    //   width: 100,
    //   height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: 'yellow',
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
