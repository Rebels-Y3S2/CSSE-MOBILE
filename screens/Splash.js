import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { Logo } from '../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 4000);
  });

  const handleGetToken = async () => {
    const dataToken = await AsyncStorage.getItem('AccessToken');
    if (!dataToken) {
      navigation.replace('Login');
    } else {
      navigation.replace('TabNavigator');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#002951',
  },
  text: {
    fontWeight: '800',
    fontSize: 30,
    color: 'white',
  },
});