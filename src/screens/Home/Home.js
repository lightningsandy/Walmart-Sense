import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

//import screens
import HomeScreen from './HomeScreen';
import LocationModel from './LocationModel';
import TimeDetail from './TimeDetail';


const LogoTitle = () => {
    return (
      <Image
        style={{ width: 150, height: 50 }}
        source={require('../../../assets/header.png')}
      />
    );
}


const Home = () => {


  const captialize = (word) => {
    const nameCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return nameCapitalized;
  }



    return (
        <MainStack.Navigator>
        <MainStack.Screen 
        name="HomeScreen" 
        component = {HomeScreen} 
        options={{ 
            headerStyle: { backgroundColor: '#1B244E', height: 100}, 
            headerTitleAlign:"center", 
            headerTitle: props => <LogoTitle {...props} />  
            }}/>
        <MainStack.Screen 
        name="TimeDetail" 
        component = {TimeDetail} 
        options={({ route }) => ({ 
          title: captialize(route.params.data.day) ,
          headerStyle: { backgroundColor: '#1B244E', height: 100}, 
          headerTintColor: '#888CB3',
          headerBackTitle: "back",
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 24
          },
          })}
          />
        </MainStack.Navigator>
    )
}


const RootHome = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Location" component={LocationModel} options={{ headerShown: false }}/>
    </RootStack.Navigator>
  );

}

export default RootHome

