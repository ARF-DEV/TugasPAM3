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
  // const data = route.params;
  console.log(typeof(Bandara[0]));

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
