import axios from 'axios';
import * as React from 'react';
import {StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import AddCity from '../AddCity/AddCity';

function NewCityPage({ navigation }) {
    const [uname, setUname] = React.useState("");
    const [pword, setPword] = React.useState("");
    const [cities, setCities] = React.useState([]);

    const [tableHead, setTableHead] = React.useState([]);
    const [tableData, setTableData] = React.useState([]);

    React.useEffect(() => {
        axios({
            method: "GET",
            url: "https://us-central1-travel-mobile-app-f207d.cloudfunctions.net/getPopularCities"
        }).then((res) => {
            setCities(res.data);
            setTableHead(Object.keys(res.data[0]));
            let tableDat = [];
            res.data.forEach((dat) => {
                tableDat.push([dat["city"], dat["country"], dat["num_visited"]])
            })
            // console.log(tableDat);
            setTableData(tableDat);
        })
    }, [])

    function refreshData() {
        axios({
            method: "GET",
            url: "https://us-central1-travel-mobile-app-f207d.cloudfunctions.net/getPopularCities"
        }).then((res) => {
            setCities(res.data);
            setTableHead(Object.keys(res.data[0]));
            let tableDat = [];
            res.data.forEach((dat) => {
                tableDat.push([dat["city"], dat["country"], dat["num_visited"]])
            })
            // console.log(tableDat);
            setTableData(tableDat);
        })
    }

    function addNewCity() {
        navigation.navigate('AddCity')
        
    }

    return (
      <View style={styles.container}>
          {tableHead.length > 0 && tableData.length > 0 && <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row data={tableHead} style={styles.head} textStyle={styles.text} />
              <Rows data={tableData} textStyle={styles.text}/>
          </Table>}
          <Button title='Add New City' onPress={addNewCity} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#E8F2FB' },
    text: { margin: 6 }
  });

export default NewCityPage;
