import React, { useState } from 'react'
import {
  AppBar,
  IconButton,
  Button,
} from '@react-native-material/core'
import { Avatar } from '@rneui/themed'

function Appbar () {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
      <AppBar
        style={{ backgroundColor: '#002951', marginTop: 40, height: 45 }}
        title="Manage Orders"
        trailing={props =>
          // loggedIn
          //   ? (
            <IconButton
              icon={
                <Avatar
                  source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
                  size={35}
                  rounded
                />
              }
              onPress={() => setLoggedIn(loggedIn)}
              {...props}
            />
            //   )
            // : (
            // <Button
            //   variant="text"
            //   title="Login"
            //   compact
            //   style={{ marginEnd: 4 }}
            //   onPress={() => setLoggedIn(!loggedIn)}
            //   {...props}
            // />
            //   )
        }
      />
  )
}

export default Appbar
