import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { BarChart } from "react-native-chart-kit";


//import components
import WeatherCardSmall from '../../components/WeatherCardSmall';
import CrowdCard from '../../components/CrowdCard';

const {width} = Dimensions.get("window");

const TimeDetail = ({ route, navigation }) => {

   
    const {crowd, date, type, percentage, indicator} = route.params.data;
    const {weather} = route.params.weatherData;
    const [data, setData] = useState([]);



      function formatDate (input) {
        var datePart = input.match(/\d+/g),
        year = datePart[0].substring(0),
        month = datePart[1], day = datePart[2];
      
        return month+'-'+day+'-'+year;
      }
      

      useEffect(() => {
        
         const fetchData = async () => {

          var dateToFetch = formatDate(date.substr(0, 10));
          
            
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          const url = `https://walmart-sense-309306.et.r.appspot.com/api/dates/${dateToFetch}`;
          
          var result = await fetch(url, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));

          setData(result);
         }


         fetchData();
       
      }, [])
        

      if(data.length === 0) {
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Loading</Text>
          </View>
        );
      }

      const times = data.map(data => {
        return data.time
      })

      const crowds = data.map(data => {
        return data.crowd
      })


      const chartData = {
        labels: times,
        datasets: [
          {
            data: crowds
          }
        ]
      };
    
    

      const chartConfig = {
        backgroundGradientFrom: "#1B244E",
        backgroundGradientFromOpacity: 1,
        backgroundGradientTo: "#1B244E",
        backgroundGradientToOpacity: 1,
        fillShadowGradient: "#888CB2",
        fillShadowGradientOpacity: 1,
        color: () => "#545581",
        strokeWidth: 2, 
        barPercentage: 0.2,
      };

    return (
        <View style={{flex: 1, backgroundColor: "#0F103F"}}>
            <View style={{flex: 1, flexDirection: "row"}}>
            <CrowdCard 
                type={type}
                crowd={crowd} 
                percentage={percentage}
                indicator={indicator}   
                width= "small"
             />
            <WeatherCardSmall 
                weather= {weather}
            />
            </View>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
            <View style={{flex: 1, backgroundColor: "#1B244E", height: 250, justifyContent: "space-evenly", alignItems: "flex-end", marginLeft: 10, paddingVertical: 20 }}>
                <Text style={{color: "#D3542B"}}>veryhigh</Text>
                <Text style={{color: "#87371D"}}>high</Text>
                <Text style={{color: "#F2CD49"}}>medium</Text>
                <Text style={{color: "#248D3B"}}>low</Text>
                <Text style={{color: "#27C34A"}}>verylow</Text>
            </View>
            <View style={{flex: 4}}>
            <BarChart
              data={chartData}
              width={width - 90}
              height={250}
              fromZero
              withHorizontalLabels={false}
              withInnerLines={true}
              chartConfig={chartConfig}
              verticalLabelRotation={30}
              showBarTops
              showValuesOnTopOfBars
            />
            </View>
            </View>
        </View>
    )
}

export default TimeDetail

const styles = StyleSheet.create({
})
