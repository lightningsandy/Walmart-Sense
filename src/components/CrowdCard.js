import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const {width} = Dimensions.get("window");
const cardWidth = width * 0.6;
const cardWidthSmall = width * 0.45;

const CrowdCard = (props) => {


    const checkStatus = () => {
        if(props.indicator === "medium"){
            return "#F2CD49";
         } else if(props.indicator === "low") {
             return "#248D3B";
         } else if(props.indicator === "verylow") {
            return "#27C34A";
        } else if(props.indicator === "high") {
            return "#87371D";
        } else if(props.indicator === "veryhigh") {
            return "#D3542B";
        } 
    }

   

    return (
        <View style={styles.container}>
            <View style={{...styles.innerContainer, width: props.width === "small" ? cardWidthSmall : cardWidth}}>
                <Text style={styles.textStyle}>{props.type}</Text>
                <AnimatedCircularProgress
                    size={120}
                    width={10}
                    fill={props.percentage}
                    rotation= {210}	
                    lineCap="round"
                    backgroundWidth={7}
                    arcSweepAngle={300}
                    tintColor={checkStatus()}
                    backgroundColor="#424778">
                    {
                      (fill) => (
                        <Text style={{...styles.textStyle, fontWeight: '500'}}>
                         {props.crowd}
                        </Text>
                      )
                    }
                </AnimatedCircularProgress>
                <Text style={{fontSize: 20, color: checkStatus(), fontWeight: "600"}}>{props.indicator}</Text>
            </View>
        </View>
    )
}

export default CrowdCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    innerContainer: {
        backgroundColor: "#1B244E",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderRadius: 14,
        height: 260,
    },
    textStyle: {
        fontSize: 26, 
        fontWeight: '700', 
        color: "white"
    }
})
