import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native';

function Login({ navigation }) {
    const [uname, setUname] = React.useState("");
    const [pword, setPword] = React.useState("");
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
          <Button onPress={() => {
              navigation.navigate("NewCityPage")
          }} title='Log In' />
      </View>
    );
  }

export default Login;