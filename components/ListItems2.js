import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ItemView2 from './ItemView2';


const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  const ListItems2 = ({items, onItemPress}) => {
    return (
      <View>
        <FlatList
          data={items}
          renderItem={({item}) => <TouchableOpacity onPress={() => onItemPress(item)}><ItemView2 item={item}/></TouchableOpacity>}
        />
      </View>
    );
  }
  
  export default ListItems2;