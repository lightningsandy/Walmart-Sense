import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("window");
const cardWidthSmall = width * 0.45;

const WeatherCardSmall = (props) => {

    const Cloudy = "../../assets/cloudy.png";
    const Rainy = "../../assets/rainy.png";
    const Clear = "../../assets/clear.png";

    const checkWeather = () => {
        if(props.weather === "Clouds"){
            return require(Cloudy);
        } else if(props.weather === "Rain"){
            return require(Rainy);
        } else {
            return require(Clear);
        }
    }

    return (
        <View style={styles.container}>
           <View style={styles.innerContainer}>
            <Image
                style={styles.imgStyle}
                source={checkWeather()}
            />
            <Text style={styles.weatherText}>{props.weather}</Text>
           </View>
        </View>
    )
}

export default WeatherCardSmall

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center"
    },
    innerContainer: {
        backgroundColor: "#1B244E", 
        justifyContent: "space-around", 
        alignItems: "center", 
        padding: 20, 
        borderRadius: 14,
        height: 260,
        width: cardWidthSmall
    },
    imgStyle: {
        resizeMode: "contain",
        height: 80, 
        alignItems:"center"
    },
    weatherText: {
        fontSize: 20, 
        color: "#A1A5B6"
    }
})
