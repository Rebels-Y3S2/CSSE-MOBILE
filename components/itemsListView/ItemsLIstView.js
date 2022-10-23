import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import ItemView from '../itemView/ItemView';

export default function ItemsListView({ items, onItemPress }) {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => onItemPress(item)}>
          <ItemView item={item} />
        </TouchableOpacity>}
      />
    </View>
  );
}
