import axios from 'axios';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native';

function SignUp({ navigation }) {
    const [uname, setUname] = React.useState("");
    const [pword, setPword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const apiKey = "";
    function createNewUser() {
        axios({
            method: "POST",
            url: "https://us-central1-travel-mobile-app-f207d.cloudfunctions.net/signUp",
            body: {
                "username": uname,
                "password": pword,
                "email": email,
                "apikey": apiKey
            }
        }).then((res) => {
            navigation.navigate("NewCityPage");
        })
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput 
          style={{width: "40%", padding: 10}}
          value={uname} 
          onChangeText={(text) => {
              setUname(text);
          }}
          placeholder='Username' />
          <TextInput 
          style={{width: "40%", padding: 10}}
          secureTextEntry
          value={pword} 
          onChangeText={(text) => {
              setPword(text);
          }}
          placeholder='Password' />

        <TextInput 
          style={{width: "40%", padding: 10}}
          value={email} 
          onChangeText={(text) => {
              setEmail(text);
          }}
          placeholder='Email' />
          <Button onPress={() => {
              navigation.navigate("NewCityPage")
          }} title='Sign Up' />
      </View>
    );
  }

export default SignUp;