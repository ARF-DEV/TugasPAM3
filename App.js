
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
        />
        <Core.Screen 
          name='Daftar Penerbangan' 
          component={Daftar}
          options={{
            headerShown : true,
            headerTitleAlign : 'center',
            headerTitleStyle : {
              color: 'white'
            },
            headerStyle : {
              backgroundColor : '#024D88',
            },
          }}  
        />
      </Core.Navigator>
    </NavigationContainer>
  )
};

export default App;
