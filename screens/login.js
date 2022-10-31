import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { loginUser } from '../api/userApi';
import { Eye, EyeActive, Logo } from '../assets';
import { Divider } from "@react-native-material/core";

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

  const handleLogin = async() => {
    const checkPassowrd = checkPasswordValidity(password);
    const userObj = {
        email: email.toLocaleLowerCase(),
        password: password,
    }
    if (!checkPassowrd) {
        try {
            const userLog = loginUser(userObj);
            const { data: res } = await userLog;
            AsyncStorage.setItem('AccessToken', res?.responseData);
            if(res.isSuccessful) {
                navigation.replace('TabNavigator');
                alert(res.message)
            }
            // console.log(res?.userData.imageUrl)
        } catch (error) {
            // console.log(error)
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                console.log(error.response.data.message)
            }
            alert(error.response.data.message)
                
        }
    } else {
        alert(checkPassowrd);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{marginBottom: 20, margin: 20}}>
          <Image source={Logo}  />
        </View>
        <Divider color="gray" style={{marginBottom: 20}}/>
        <View style={styles.wrapperInput}>
          <Text style={styles.inputLabel}>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => handleCheckEmail(text)}
          />
        </View>
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Wrong format email</Text>
        ) : (
          <Text style={styles.textFailed}> </Text>
        )}
        <View style={styles.wrapperInput}>
          <Text style={styles.inputLabel}>Password :</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            secureTextEntry={seePassword}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.wrapperIcon}
            onPress={() => setSeePassword(!seePassword)}>
            <Image source={seePassword ? Eye : EyeActive} style={styles.icon} color='white'/>
          </TouchableOpacity>
        </View>
        <Divider color="gray" style={{marginBottom: 20, marginTop: 20}}/>
        {email == '' || password == '' || checkValidEmail == true ? (
          <TouchableOpacity
            disabled
            style={styles.buttonDisable}
            onPress={handleLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#002951',
  },
  subContainer: {
    padding: 20
  },
  wrapperInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'grey',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white'
  },
  input: {
    padding: 10,
    width: '100%',
    color: 'white'
  },
  inputLabel: {
    color: 'white',
    marginLeft: 20,
    marginTop: 1
  },  
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
    color: 'white'
  },
  icon: {
    width: 30,
    height: 24,
    color: 'white'
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 25,
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  text: {
    color: 'black',
    fontWeight: '700',
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});