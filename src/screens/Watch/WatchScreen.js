import React, {useState, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image, Animated } from 'react-native';
import Modal from 'react-native-modal';
import ImageZoom from 'react-native-image-pan-zoom';
import * as Haptics from 'expo-haptics';




import LocationTab from '../../components/LocationTab';
import StatusCard from '../../components/StatusCard';
import { Ionicons } from '@expo/vector-icons';




const {width, height} = Dimensions.get("screen");


const WatchScreen = ({navigation}) => {

    const [modal, setModal] = useState(true);

    const checkModal = () => {
        if(modal === true) {
            Haptics.selectionAsync();
            setModal(false);
        } else {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            setModal(true);
        }
    }

    const setModalFalse = () => {
      Haptics.selectionAsync();
      setModal(false);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
              <TouchableOpacity onPress={() => checkModal()} style={{marginRight: 14}}>
                   <Ionicons name="md-map" size={24} color="#888CB2" />
              </TouchableOpacity>
          ),
        });
      }, [modal]);


     
    return (
        <View style={{flex: 1, backgroundColor: "#0F103F"}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            >
            <Text style={styles.headStyle}>Status</Text>
            <StatusCard loc="Fashion" crowd="Medium" />
            <StatusCard loc="Grocery" crowd="Low" />
            <StatusCard loc="Dairy" crowd="Very High" />
            <StatusCard loc="Electronics" crowd="High" />
            <StatusCard loc="Cosmetics" crowd="Very Low" />
            </ScrollView>
            <Modal 
            isVisible={modal}
            coverScreen={false}
            onSwipeComplete={() => checkModal()}
            swipeDirection={['down']}
            style={styles.view}
            hasBackdrop={false}
            deviceHeight={height}
            deviceWidth={width}
            hideModalContentWhileAnimating={true}
            >
            <View style={styles.modal}>
            <Image source={require('../../../assets/dash.png')} style= {{top: 10, position: "absolute", zIndex: 2}} resizeMode="contain" />
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={250}
                       imageWidth={width * 0.8}
                       maxOverflow={1}
                       useNativeDriver={true}
                       onClick={() => setModalFalse()}
                       centerOn={{x: 1, y: 1, scale: 1}}
                       enableSwipeDown={false}
                       maxScale={1.5}
                       imageHeight={height * 0.25}>
                <Image source={require('../../../assets/blueprint.png')} style= {{width: width * 0.8, height: height * 0.25}} resizeMode="contain" />
            </ImageZoom>
           </View>
            </Modal>
           </View>
    )
}

export default WatchScreen

const styles = StyleSheet.create({
    headStyle: {
        fontSize: 42,
        fontWeight: 'bold',
        color: "white",
        fontFamily: "Helvetica Neue",
        paddingLeft: 20,
        paddingTop: 20
    },
    modal: {
        backgroundColor: "#40415F", 
        justifyContent: "center", 
        alignItems: "center", 
        borderTopEndRadius: 20, 
        borderTopStartRadius: 20
    },
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
})
