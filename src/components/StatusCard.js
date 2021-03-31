import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'





//component import
import CrowdIndicator from '../components/CrowdIndicator';


//image require
const fashion = require('../../assets/fashion.png');
const grocery = require('../../assets/grocery.png'); 
const dairy = require('../../assets/dairy.png');
const electronics = require('../../assets/electronics.png');
const cosmetics = require('../../assets/cosmetics.png');



const StatusCard = (props) => {

    const imageProvider = (loc) => {
        switch(loc) {
            case "Fashion":
                return fashion;
            case "Grocery":
                return grocery;
            case "Dairy":
                return dairy;
            case "Electronics":
                return electronics;
            case "Cosmetics":
                return cosmetics;
            default:
                return grocery;                    
        }
    }

    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: "row", margin: 10, padding: 26, borderRadius: 12, backgroundColor: "#1B244E" }}>
            <Image
                style={styles.imgStyle}
                source={imageProvider(props.loc)}
            />
            <View style={{flex: 2}}>
                <Text style={{fontSize: 28, color: "white", fontWeight: 'bold'}}>{props.loc}</Text>
                <CrowdIndicator crowd= {props.crowd} />
            </View>
            </View>
        </View>
    )
}

export default StatusCard

const styles = StyleSheet.create({
    imgStyle: {
        resizeMode: "cover", 
        flex: 1, 
        height: 70, 
        alignItems:"center",
        borderRadius: 12,
        marginRight: 20
    },
})
