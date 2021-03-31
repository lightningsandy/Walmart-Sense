import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return (
        <View style={styles.backgroundStyles}>
            <Ionicons name="ios-search-outline" color="black" style={styles.iconStyle} />
            <TextInput 
            autoCapitalize= 'none'
            autoCorrect={false}
            placeholder="Enter locality" 
            style={styles.inputStyle}
            value = {term}
            onChangeText = {(newTerm) => {onTermChange(newTerm)}}
            onEndEditing = {onTermSubmit}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyles:{
        backgroundColor: '#80809E',
        borderRadius: 10,
        flexDirection: 'row',
        flex: 1
    },
    inputStyle:{
        fontSize: 15,
        padding: 10,
        color: '#575767',
        flex: 1
    },
    iconStyle:{
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 19,
        color: "#575767"
    }
});


export default SearchBar;