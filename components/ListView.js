import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Container from './Container';

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

const ListView = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominicc'},
          {key: 'Jackscon'},
          {key: 'Jamecs'},
          {key: 'Jocel'},
          {key: 'Joshn'},
          {key: 'Jilslian'},
          {key: 'Jiammy'},
          {key: 'Julcie'},
          {key: 'Devcin'},
          {key: 'Daen'},
          {key: 'Domwsinic'},
          {key: 'Jackson'},
          {key: 'Jamees'},
          {key: 'Joesl'},
          {key: 'Joshn'},
          {key: 'Jicllian'},
          {key: 'Jimcmy'},
          {key: 'Julsie'}
        ]}
        renderItem={({item}) => <Container><Text>{item.key}</Text></Container>}
      />
    </View>
  );
}

export default ListView;