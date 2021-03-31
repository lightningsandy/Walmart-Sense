import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const WeatherCard = (props) => {

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
            <View style={styles.tempContainer}>
                <Text style={styles.tempText}>{props.temp} {"\u2103"}</Text>
                <Text style={styles.weatherText}>{props.weather}</Text>
            </View>
           </View>
        </View>
    )
}

export default WeatherCard

const styles = StyleSheet.create({
    container: {
        flex: 3, 
        justifyContent: "center"
    },
    innerContainer: {
        flexDirection: "row", 
        backgroundColor: "#1B244E", 
        justifyContent: "space-around", 
        alignItems: "center", 
        padding: 20, 
        marginHorizontal: 20, 
        borderRadius: 14
    },
    imgStyle: {
        resizeMode: "contain", 
        flex: 1, 
        height: 80, 
        alignItems:"center"
    },
    tempContainer: {
        flex: 1, 
        alignItems: "center"
    },
    tempText: {
        fontSize: 36, 
        color: "white"
    },
    weatherText: {
        fontSize: 20, 
        color: "#A1A5B6"
    }
})
