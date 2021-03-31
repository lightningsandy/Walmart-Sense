import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

//import screens
import RootHome from './src/screens/Home/Home';
import Watch from './src/screens/Watch/Watch';


import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  return (
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'TabHome') {
              return <Entypo name="home" size={35} color={color} />;
            } else if (route.name === 'Watch') {
              return <MaterialIcons name="analytics" size={35} color={color} />
            }
           
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#5B6180',
          showLabel: false,
          style: {backgroundColor: '#1B244E', borderTopColor: '#5B6180', borderTopWidth: 1},
        }}
        sceneContainerStyle={{backgroundColor: '#0F103F'}}
       >
      <Tab.Screen name="TabHome" component={RootHome} />
      <Tab.Screen name="Watch" component={Watch} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


