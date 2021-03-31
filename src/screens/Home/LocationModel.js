import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../../components/SearchBar';



const NearbyMart = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen", {term: props.loc})}>
        <View style={{flexDirection: "row", alignItems: "center", padding: 10}}>
        <Ionicons name="location-sharp" size={24} color="#B8B9C4" />
        <Text style={styles.textStyle}>{props.loc}</Text>
        </View>
        </TouchableOpacity>
    );
}

const LocationModel = ({navigation}) => {

    const [term,setTerm] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection: "row", padding: 10}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={32} color="#B8B9C4" />
              </TouchableOpacity>
              <SearchBar 
            term={term} 
            onTermChange={(newTerm) => {setTerm(newTerm)}}
            onTermSubmit={() =>  navigation.navigate("HomeScreen", {term: term === "" ? "Walmart, perungudi - chennai" : term})}
             />
            </View>
            <View style={{padding: 12, flex: 1}}>
            <Text style={{ fontSize: 20, color: '#C0C0D0' }}>Nearby walmarts</Text>
            <NearbyMart loc = "Walmart, tambaram - chennai" navigation= {navigation}/>
            <NearbyMart loc = "Walmart, omr - chennai" navigation= {navigation} />
            <NearbyMart loc = "Walmart, anna nagar - chennai" navigation= {navigation}/>
            </View>  
        </SafeAreaView>
  
    )
}

export default LocationModel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#545581',
    },
    textStyle: {
        color: '#B8B9C4',
        fontSize: 18 
    }
})
