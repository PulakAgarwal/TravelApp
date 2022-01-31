import axios from 'axios';
import * as React from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';


function AddCity({ navigation }) {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [city, setCity] = React.useState("");


    function addNewCity() {
        axios({
            method: "POST",
            url: "https://us-central1-travel-mobile-app-f207d.cloudfunctions.net/addVisitedCity",
            body: {
                "username": username,
                "email": email,
                "city": city,
                "country": country
            }
        }).then((res) => {
            navigation.navigate("NewCityPage");
        })
    }

    return (
      <View style={styles.container}>
          <TextInput placeholder='Username' value={username} onChangeText={setUsername}/>
          <TextInput placeholder='Email' value={email} onChangeText={setEmail}/>
          <TextInput placeholder='City' value={city} onChangeText={setCity}/>
          <TextInput placeholder='Country' value={country} onChangeText={setCountry}/>    
          <Button  title='Visit this City' onPress={addNewCity} />   

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });

export default AddCity;