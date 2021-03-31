import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

const LocationTab = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Location")}>
        <View style={styles.container}>
         
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <Ionicons name="location-sharp" size={24} color="#B8B9C4" />
            <Text style={styles.textStyle}>{props.location}</Text>
          </View>
         
             <Ionicons name="chevron-down" size={24} color="#B8B9C4" />
        </View>
        </TouchableWithoutFeedback>
    )
}

export default LocationTab

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#40415F",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textStyle: {
        color: '#B8B9C4',
        fontSize: 18 
    }
})
