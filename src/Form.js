import React from 'react';
import { StyleSheet, Text,TextInput, View, TouchableOpacity } from 'react-native';
const Form = () => {
    return (
      <View
        style={styles.formContainer}
      >
        <Text
         style={styles.textStyle}
        >Lokasi Keberangkatan</Text>
        <TextInput
          placeholder="Lokasi Keberangkatan"
          placeholderTextColor="grey"
          style={styles.input} 
        ></TextInput>
        <Text
         style={styles.textStyle}>Lokasi Tujuan</Text>
        <TextInput
          placeholder="Lokasi Tujuan"
          placeholderTextColor="grey"
          style={styles.input}
        ></TextInput>
        <Text
         style={styles.textStyle}>Tanggal Keberangakatan</Text>
        <TextInput
          placeholder="Tanggal Keberangkatan"
          placeholderTextColor="grey"
          style={styles.input}
        ></TextInput>
        
        <TouchableOpacity
        style={styles.button}
      >
        <Text style={{fontWeight : 'bold', fontSize : 20, textAlign : 'center'}}>Press Here</Text>
      </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
    input: {
      height: 50,
      margin: 20,
      borderWidth: 1,
      borderRadius : 10,
      borderColor: 'gray',
      paddingHorizontal: 40,
      color : 'black',
    },
    formContainer : {
      flexDirection : 'column',
      alignItems : 'stretch',
      backgroundColor : 'white',
      padding : 20,
      borderRadius : 10,
    },
    textStyle : {
      color : 'black',
      fontSize : 20,
      fontWeight : "bold"
    },
    button : {
      backgroundColor : 'grey',
      borderRadius : 5,
      padding: 10,
      fontWeight : 'bold'
    }
  });


  export default Form;