import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import WatchScreen from './WatchScreen';


const LogoTitle = () => {
    return (
      <Image
        style={{ width: 150, height: 50 }}
        source={require('../../../assets/header.png')}
      />
    );
}


const Watch = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen 
        name="WatchScreen" 
        component = {WatchScreen} 
        options={({navigation, route}) => ({
            headerStyle: { backgroundColor: '#1B244E', height: 100}, 
            headerTitleAlign:"center", 
            headerTitle: props => <LogoTitle {...props} />, 
        })}/>
        </Stack.Navigator>
    )
}


export default Watch

