/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text,TextInput, View, Button } from 'react-native';
 
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    borderRadius : 10,
    borderColor: 'gray',
    paddingHorizontal: 40,
    color : 'black'
  },
  formContainer : {
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor : 'white',
    padding : 20,
    borderRadius : 10,
  },
  textStyle : {
    color : 'black',
    fontSize : 20,
    fontWeight : "bold"
  }
});


const Form = () => {
  return (
    <View
      style={styles.formContainer}
    >
      <Text
       style={styles.textStyle}
      >Lokasi Keberangkatan</Text>
      <TextInput
        placeholder="useless placeholder"
        placeholderTextColor="grey"
        style={styles.input}
      ></TextInput>
      <Text
       style={styles.textStyle}>Lokasi Tujuan</Text>
      <TextInput
        placeholder="useless placeholder"
        placeholderTextColor="grey"
        style={styles.input}
      ></TextInput>
      <Text
       style={styles.textStyle}>Tanggal Keberangakatan</Text>
      <TextInput
        placeholder="useless placeholder"
        placeholderTextColor="grey"
        style={styles.input}
      ></TextInput>
      
      <Button
      title='Cari'>
      </Button>
    </View>
  )
}

const App = () => {
  return (
    <View style={{ backgroundColor:'green', flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style = {{ marginBottom : 30, fontWeight : 'bold', color : "white", fontSize : 40}}>Hiling.id</Text>
      <Form></Form>
    </View>
  );
}

export default App;
