import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourits from '../components/NavFavourits'


const HomeScreen = () => {

    const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw`p-5`}>
        <Image
            style={{
                width:100, height:100, resizeMode: 'contain'
            }}
            source={{
                uri: "https://1000marcas.net/wp-content/uploads/2020/10/Uber-Logo.png",
            }}
        />
        <GooglePlacesAutocomplete
        placeholder="where from ?"
        styles={{
          container: {
            flex: 0,
          },
          textInput:{
            fontSize: 18,
          },
        }}
        onPress={( data, details = null) => {
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description  
          }))
          dispatch(setDestination(null))
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en'
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        />
        <NavOptions/>
        <NavFavourits/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({});