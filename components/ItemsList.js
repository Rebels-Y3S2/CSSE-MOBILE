import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { LinearGradient } from 'expo-linear-gradient';
import ItemView from './ItemView';

export default function ItemsList() {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  const image = { uri: "https://www.scrolldroll.com/wp-content/uploads/2020/09/Clever-Tom-sending-in-other-cats-Tom-Jerry-Memes.jpg" };
  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      spacing={10}
      style={{}}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => console.log(item)}>
          {/* <ImageBackground imageStyle={{ borderRadius: 6}} source={image} resizeMode="cover" style={styles.itemContainer}>
            <LinearGradient
              colors={['#00000000', '#000000']}
              style={{ height: '40%', width: '100%', borderBottomWidth: 1, borderBottomColor: '#FFFFFF', borderRadius: 5}}>
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
              </View>
            </LinearGradient>
          </ImageBackground> */}
          <ItemView />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  itemTextContainer: {
    marginTop: 15,
    padding: 5
  }
});