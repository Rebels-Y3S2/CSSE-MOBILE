import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
} from "@react-native-material/core";

function Appbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
      <AppBar
        style={{backgroundColor: '#002951', marginTop: 30}}
        title="Title"
        trailing={props =>
          loggedIn ? (
            <IconButton
              icon={<Avatar label="Yaman KATBY" size={28} />}
              onPress={() => setLoggedIn(!loggedIn)}
              {...props}
            />
          ) : (
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
    );
} 

export default Appbar;



