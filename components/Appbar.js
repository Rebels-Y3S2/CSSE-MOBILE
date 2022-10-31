import React, { useState } from 'react'
import {
  AppBar,
  IconButton,
  Button,
  HStack,
} from '@react-native-material/core'
import { Avatar } from '@rneui/themed'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TouchableOpacity, Text } from "react-native";
import { useEffect } from 'react';

function Appbar ({navigation}) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [dataToken, setDataToken] = useState("")

  useEffect(async() => {
    setDataToken(await AsyncStorage.getItem('AccessToken'));
  }, []);

  useEffect(() => {
    if(dataToken) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [dataToken]);
  
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
      <AppBar
        style={{ backgroundColor: '#002951', marginTop: 40, height: 45 }}
        title="Manage Orders"
        trailing={props =>
          loggedIn
            ? (
              <HStack spacing={10}>
                <IconButton
                  icon={
                    <Avatar
                      source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
                      size={35}
                      rounded
                    />
                  }
                  onPress={() => handleLogout()}
                  {...props}
                />
              </HStack>
              )
            : (
            <Button
              variant="text"
              title="Login"
              compact
              style={{ marginEnd: 4 }}
              onPress={() => setLoggedIn(!loggedIn)}
              {...props}
            />
              )
        }
      />
  )
}

export default Appbar
