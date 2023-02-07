import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourits from './NavFavourits';
import { Icon } from '@rneui/base';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
            placeholder="Where to?"
            styles={toInputBoxStyles}
            autoFillOnNotFound={true}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
                dispatch (
                    setDestination ({
                    location: details.geometry.location,
                    description: data.description,
                })
             );
                navigation.navigate('RideOptionsCard');
            }}
            enablePoweredByContainer={false}   
            query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            />
        </View>
        <NavFavourits/>
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t
       border-gray-100 `}
       >
        <TouchableOpacity
        onPress={() => navigation.navigate("RideOptionsCard")}
        style={tw`flex flex-row  bg-black justify-between w-24 px-4 py-4
         rounded-full`}
         >
            <FontAwesome name="car" type='font-awsome' color="white" size={16}/>
            <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3
         rounded-full`}
        >
          <MaterialCommunityIcons
           name="food" 
           size={20} 
           color="black" />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,    
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})