import React from 'react'
import { FlatList, TouchableOpacity, View, StyleSheet } from 'react-native'
import ItemView from '../itemView/ItemView'

export default function ItemsListView ({ items, onItemPress, orders }) {

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) =>
        <TouchableOpacity onPress={() => onItemPress(item)} style={styles.listItem}>
          <ItemView item={item} />
        </TouchableOpacity>}
        extraData={orders}
        inverted= {-1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#002951"
  },
  listItem: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#002951",
    padding: 10,
  },
});