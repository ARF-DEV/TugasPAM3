# TugasPAM3
#### Nama : Muhammad Ariefuddin Satria Dharma
#### NIM : 119140149

## Penjelasan Source Code
App.js
```JavaScript
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommuintyIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './src/screen/Home';
import Daftar from './src/screen/Daftar';


const Core = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer  >
      <Core.Navigator initialRouteName='Home' screenOptions={{headerShown : false}}>
        <Core.Screen
          name='Home' 
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (<MaterialCommuintyIcons name="home" size={size} color={color} />)
          }} 
        />
        <Core.Screen 
          name='Daftar Pesanan' 
          component={Daftar}
          options={{
            tabBarLabel: 'Daftar Pesanan',
            headerShown : true,
            headerTitleAlign : 'center',
            headerTitleStyle : {
              color: 'white'
            },
            headerStyle : {
              backgroundColor : '#024D88',
            },
            tabBarIcon: ({color, size}) => (<MaterialCommuintyIcons name="book" size={size} color={color} />)
          }}  
        />
      </Core.Navigator>
    </NavigationContainer>
  )
};

export default App;

```
Pada bagian ini penulis menggunakan createNativeStackNavigator() dan component NavigationContainer untuk melakukan navigasi antara screen Home
dan screen Daftar

src/screen/Home.js
```JavaScript
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

```
Pada bagian ini react component utama berapa pada fungsi Home(), di dalam fungsi ini penulis mendefinsikan sebuah state untuk nanti digunakan 
pada component DatePicker, lalu fungsi showDatePicker() digunakan untuk menampilkan calendar untuk memilih tanggal penerbangan saat component
TouchableOpacity ditekan, dan didalam fungsi DateTimePickerAndroid.open() penulis memasukan object yang berisi :
- onChange berisi fungsi yang akan merubah nilai state date ke tanggal yang baru

arrow function dateFormat() digunakan untuk memparsing tanggal yang didapat dari object Date, menghapus nilai jam,menit,detik dan hanya menyisakan
bulan tanggal tahun untuk ditampilkan pada component TouchableOpacity.

src/screen/Daftar.js
```JavaScript
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Maskapai, Bandara, Jadwal } from '../../data/json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Daftar( {route, navigation} ) {
  const ListData = () => {
      let result = []
      for (let i = 0; i < Jadwal.length; i++) {

        let maskapaiName;
        let tujuanName;
        let berangkatName;
        for (let j = 0; j < Maskapai.length; j++) {
          if (Jadwal[i].maskapai_id === Maskapai[j].maskapai_id){ 
            maskapaiName = Maskapai[j].maskapai_nama;
            break;
          }
        }  

        for (let j = 0; j < Bandara.length; j++) {
          if (Jadwal[i].bandara_kode_tujuan === Bandara[j].bandara_id){ 
            tujuanName = Bandara[j].bandara_nama;
            break;
          }
        }

        for (let j = 0; j < Bandara.length; j++) {
          if (Jadwal[i].bandara_kode_keberangkatan === Bandara[j].bandara_id){ 
            berangkatName = Bandara[j].bandara_nama;
            break;
          }
        }
        result.push({
          maskapaiName,
          tujuanName,
          berangkatName
        })

      }
      return result.map((jadwal) => {
        return (
        
          <View style={style.cardContainer}>
            <View style={style.cardTextStyleTop}>
              <Text style={{color: 'black', fontSize : 15, marginHorizontal : 20}}>{(jadwal.berangkatName)}</Text>
              <Text style={{color: 'black', fontSize : 15, marginHorizontal : 5}}>-</Text>
              <Text style={{color: 'black', fontSize : 15, marginHorizontal : 20}}>{(jadwal.tujuanName)}</Text>
            </View>
            <View style={style.cardTextStyleBot}>
              <View 
              style={{display: 'flex', flexDirection : 'row', marginHorizontal : 20}}>
                <MaterialCommunityIcons name='airplane' size={30} color='black'/>
                <Text style={{color: 'black', fontSize : 18}}>{(jadwal.maskapaiName)}</Text>
              </View>
              <Text style={{color: 'black', fontSize : 18, marginHorizontal : 20}}>20/12/2020</Text>
            </View>
          </View>)
      })
    
  }


  return (
    <SafeAreaView style={style.screenContainer}>
       <ScrollView style={style.viewContainer}
        contentContainerStyle={{
          display : 'flex',
          alignItems : 'center',
          justifyContent : 'flex-start',
        }}
       >
        <ListData/>
       <View style={style.copyright}>
            <Text style={style.cop}>- Copyright -</Text> 
            <Text style={style.cop}>Muhammad Ariefuddin Satria Dharma - 119140149</Text>
        </View>
       </ScrollView>
    </SafeAreaView>
  );
}

const style = new StyleSheet.create({
  titleStyle: {
    fontSize: 40,
    color : '#00579C',
    fontWeight : 'bold',
    textAlign : 'center',
  },
  textStyle: {
    color : 'black',
    marginHorizontal: 20,
    marginBottom : 5
  },
  transactionBox: {
    backgroundColor : "rgba(220, 220, 220, 100)",
    borderRadius : 5,
    borderWidth : 1
  },
  cardContainer : {
    width : '90%',
    display : 'flex',
    justifyContent : 'flex-start',
    backgroundColor : '#E9E9E9', 
    borderRadius : 5,
    borderWidth : 1,
    margin : 10,
  },
  viewContainer : {
    height : '50%',
    width : '100%'

  },
  screenContainer: {
    display : 'flex',
    alignItems : 'center',
    height : '100%',
  },
  buttonStyle : {
    backgroundColor : '#00579C',
    borderRadius : 5,
    borderWidth : 3,
    borderColor : '#00579C',
  },
  cardTextStyleTop : {
    display : 'flex', 
    flexDirection: 'row', 
    alignItems : 'center', 
    justifyContent : 'flex-start',
    marginTop : 20,
    marginBottom : 20
  },
  cardTextStyleBot : {
    display : 'flex', 
    flexDirection: 'row', 
    alignItems : 'center', 
    justifyContent : 'space-between',
    marginBottom : 20,
    marginTop : 20
  },
  copyright:{
    marginVertical : 20,
    alignItems: 'center',
    width : '100%',
  },
  cop:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Daftar;

```
Pada bagian ini component utama dibuat lewat fungsi Daftar(), didalam fungsi Daftar() terdapat arrow function ListData() yang bertugas untuk memproses 
JSON yang didapat dari import di line awal lalu memproses data maskapai, bandara, dan jadwal menjadi list object yang berisi:
- Nama Bandara Keberangkatan
- Nama Bandara Tujuan
- Nama Maskapai

Setelah proses nya selesai maka akan diubah kedalam react component yang nanti akan tampilkan didalam ScrollView
