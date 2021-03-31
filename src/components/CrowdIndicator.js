import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'





const {width, height} = Dimensions.get("screen");




const CrowdIndicator = (props) => {

    var containerStyle;
    if(props.crowd === "High"){
        containerStyle = {backgroundColor: "#946464", borderColor: "#CC5252"};
    } else if(props.crowd === "Medium") {
        containerStyle = {backgroundColor: "#88897D", borderColor: "#BEC04E"};
    } else if(props.crowd === "Low") {
        containerStyle = {backgroundColor: "#88939B", borderColor: "#AABDA2"}
    } else if(props.crowd === "Very Low") {
        containerStyle = {backgroundColor: "#5B7C5C", borderColor: "#78A068"}
    } else if(props.crowd === "Very High") {
        containerStyle = {backgroundColor: "#B44949", borderColor: "#BF2424"}
    } 

    return (
        <View style={{...styles.container, ...containerStyle}}>
            <Text style={styles.textStyle}>{props.crowd}</Text>
        </View>
    )
}

export default CrowdIndicator

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        fontWeight: '600',
        color: "rgba(255,255,255, 0.8)",
    },
    container: {
        backgroundColor: "#424778", 
        alignItems: "center", 
        justifyContent: "center", 
        flex: 1, 
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#888CB2"
    }
})
