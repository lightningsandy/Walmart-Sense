import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View, FlatList, RefreshControl, ScrollView, Dimensions, Platform, TouchableWithoutFeedback } from 'react-native';
import * as Haptics from 'expo-haptics';


//components import
import LocationTab from '../../components/LocationTab';
import CrowdCard from '../../components/CrowdCard';
import WeatherCard from '../../components/WeatherCard';

//card settings
const {width} = Dimensions.get("window");
const cardWidth = width * 0.6;
const spaceForCardInset = width * 0.2 - 10;




const HomeScreen = ({ route, navigation }) => {

    const [locationTerm, setLocationTerm] = useState("Walmart, perungudi - chennai");
    const [refreshing, setRefreshing] = useState(false);
    const [cardKey, setCardKey] = useState(0);
    const [data, setData] = useState([]);
    const [weatherData, setWeatherData] = useState([]);


    //refresh logic
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)

      fetchData();
      fetchWeather();
      setRefreshing(false);
  
    }, []);

    
    //set location 
    useEffect(() => {
        
        if(route.params === undefined) {
            return;
        }
        setLocationTerm(route.params.term);

    }, [route])


    //fetch crowd datas
    const fetchData = async () => {

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      var result = await fetch("https://walmart-sense-309306.et.r.appspot.com/api/dates", requestOptions)
        .then(response => {
          return response.json()
        })
        .catch(error => console.log('error', error));

          setData(result);

     }

    
     //fetch weather datas
     const fetchWeather = async () => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      var weatherResult = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=13.0827&lon=80.2707&exclude=current,minutely,hourly,alerts&appid=98201a3f065a1a4fb37ff53fc6299a8e&units=metric", requestOptions)
        .then(response => response.json())
        .then(result => result.daily)
        .catch(error => console.log('error', error));

        var weatherState = await weatherResult.map(data => {
          return {temp: Math.floor(data.temp.day), weather: data.weather[0].main}
        })
        
        setWeatherData(weatherState);
     }




useEffect(() => {
       fetchData();
       fetchWeather();
    }, [])



    const onViewRef = React.useRef(({viewableItems})=> {
      if(viewableItems.length != 0){
        setCardKey(viewableItems[0].index);
      }
    
  })

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 100 })





  const captialize = (word) => {
    const nameCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return nameCapitalized;
  }

  if(data.length === 0 || weatherData.length === 0) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }



    return (
        <View style={{flex: 1, backgroundColor: "#0F103F"}}>
            <LocationTab location= {locationTerm} />
            <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={onRefresh} 
              colors={['#fff']}
              enabled
              progressBackgroundColor="#424778"
              tintColor="white"
              

            />}>
            <Text style={styles.headStyle}>{cardKey === 0 ? "Today" : cardKey === 1 ? "Tommorrow" : captialize(data[cardKey].day)}</Text>
            <WeatherCard 
                temp={weatherData[cardKey].temp}
                weather= {weatherData[cardKey].weather}
            />
            <View style={{flex: 6}}>
            <FlatList
                data={data}
                scrollEventThrottle={1}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                disableIntervalMomentum
                disableScrollViewPanResponder
                snapToInterval={cardWidth + 20}
                snapToAlignment="center"
                onScrollEndDrag={() => Haptics.selectionAsync()}
                contentInset={{
                  top: 0,
                  left: spaceForCardInset,
                  bottom: 0,
                  right: spaceForCardInset
                }}
                contentContainerStyle={{
                  paddingHorizontal: Platform.OS === "android" ? spaceForCardInset : 0 
                }}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                renderItem={({ item, index }) => (
                  <TouchableWithoutFeedback onPress={() => {
                    Haptics.selectionAsync()
                    navigation.navigate("TimeDetail", {data: item, weatherData: weatherData[index]})
                  }
                    }>
                    <View style={{marginHorizontal: 10}}>
                      <CrowdCard 
                      type={item.type}
                      crowd={item.crowd} 
                      percentage={item.percentage}
                      indicator={item.indicator}   
                      />
                    </View>
                    </TouchableWithoutFeedback>
                )}
                keyExtractor={item => item.date.toString()}
             />
            
            </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    headStyle: {
        fontSize: 42,
        fontWeight: 'bold',
        color: "white",
        fontFamily: "Helvetica Neue",
        flex: 1,
        paddingLeft: 20,
        paddingTop: 20
    },
    scrollView: {
        flex: 1
    }
})
