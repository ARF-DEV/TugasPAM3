import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
function Home( {route, navigation} ) {
  const [date, setDate] = useState(new Date());
  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange : (e, date) => {
        console.log(typeof(date))
        setDate(date);
      }
    })
  }

  const dateFormat = (time) => {
    const selectedDate = time.toString();
    const result = selectedDate.substring(4, 15);
    return result;
  }

  return (
    <SafeAreaView style={style.screenContainer}>
      <View style={style.viewContainer}>
        <Text style={[style.titleStyle, {fontFamily : 'Roboto'}]}>Hiling.id</Text>
        <View style={{marginBottom: 20}}>
          <Text style={{color : 'black', fontWeight: 'bold', marginLeft : 60}}>Lokasi Keberangkatan</Text>
          <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
              <MaterialCommunityIcons name="airplane-takeoff" size={50} color="black" />
              <View style={style.inputContainer}>
                <TextInput placeholder='Masukan Lokasi Keberangkatan'></TextInput>
              </View>
            </View>
          </View>
        <View style={{marginBottom: 20}}>
          <Text style={{color : 'black', fontWeight: 'bold', marginLeft : 60}}>Lokasi Tujuan</Text>
          <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
              <MaterialCommunityIcons name='airplane-landing' size={50} color='black'/>
              <View style={style.inputContainer}>
                <TextInput placeholder='Masukan Lokasi Tujuan'></TextInput>
              </View>
          </View>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{color : 'black', fontWeight: 'bold', marginLeft : 60}}>Tanggal Keberangkatan</Text>
          <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
            <MaterialCommunityIcons name='calendar' size={50} color='black'/>
              <View style={style.inputContainer}>
                <TouchableOpacity 
                style={style.buttonStyle} onPress={showDatepicker}
                >
                  <Text style={{fontSize:17, fontFamily: 'Roboto', color:'white'}}>{dateFormat(date.toString())}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        <View style = {style.buttonContainer}>
          <Button onPress={() => {navigation.navigate("Daftar Pesanan")}} 
          style={style.buttonStyle} title="Buat Tiket" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = new StyleSheet.create({
  screenContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems : 'center',
    flex : 1
  },
  viewContainer: {
    backgroundColor: 'rgba(255,255,255,255)',
    width: '90%',
    height: 'auto',
    borderRadius: 5,
    shadowOpacity: 5,
    shadowRadius: {
      width: 3,
      height: 3,
    },
    borderRadius : 10,
  },
  userCountType: {
    display: 'flex',
    alignContent : 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius : 5,
    marginHorizontal : '9%',
    marginVertical : '5%',
    padding : 10
  },
  titleStyle : {
    color : 'black',
    fontSize : 40,
    fontWeight : 'bold',
    textAlign : 'center',
    paddingVertical : 25,
    color : '#00579C'
  },
  inputContainer: {
    margin : 10,
    marginHorizontal : 1,
    borderRadius : 5,
    backgroundColor : 'rgba(120, 120, 120, 0.5)',
    height : 'auto',
    width : '80%',
    borderColor : 'grey',
    borderWidth : 1,
    display : 'flex',
    alignSelf : 'center',
  },
  buttonStyle: {
    display : 'flex',
    alignContent : 'center',
    padding : 15
  },
  buttonContainer: {
    marginHorizontal : 30,
    marginVertical : 15,
  },
});

export default Home;
