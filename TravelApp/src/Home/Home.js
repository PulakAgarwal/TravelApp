import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native';

function HomeScreen({ navigation }) {
    const [uname, setUname] = React.useState("");
    const [pword, setPword] = React.useState("");
    return (
      <View style={{ flexDirection:"row", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title='Log In' onPress={() => {
              navigation.navigate("LogIn")
          }} />

        <Button title='Sign Up' onPress={() => {
              navigation.navigate("SignUp")
          }} />
      </View>
    );
  }

export default HomeScreen;