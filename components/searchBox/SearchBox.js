import { Surface } from '@react-native-material/core'
import { StyleSheet, Text } from 'react-native'
export default function SearchBox () {
  return (
        <Surface
            elevation={2}
            category="medium"
            style={styles.containerStyles}
        >
        </Surface>
  )
}

const styles = StyleSheet.create({
  containerStyles: {
    margin: 10,
    padding: 10
  }
})
