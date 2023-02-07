import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc' 
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';



const data = [
  {
    id:"Uber-X-123",
    title:"UberX",
    multiplier:1,
    image:"https://img.freepik.com/premium-photo/blue-city-car-with-blank-surface-your-creative-design-d-rendering_101266-5844.jpg?w=1060",

},
{
  id:"Uber-XL-456",
  title:"Uber XL",
  multiplier:1.2,
  image:"https://img.freepik.com/premium-photo/blue-premium-business-sedan-car-sports-configuration-white-background-3d-rendering_101266-26564.jpg?w=1060",
},
{

  id:"Uber-LUX-789",
  title:"Uber LUX",
  multiplier:1.75,
  image:"https://img.freepik.com/premium-vector/car-sport_74218-217.jpg?w=1060",
},
];


const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
        onPress={() => navigation.navigate("NavigateCard")}
        style={[tw`absolute top-3 left-5 z-50 p-3 rounded-full`]}
        >
        <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
      <Text style={tw`text-center py-5 text-xl`}>
        Select a Ride - {travelTimeInformation?.distance.text}
      </Text>
      </View>

      <FlatList  
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item:{ id, title, multiplier, image}, item }) => (
        <TouchableOpacity
        onPress={() => setSelected(item)}
        style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
          <Image
          style={{
            width:100,
            height:100,
            resizeMode: "contain",
          }}
          source={{ uri: image }}
          />
          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`}>{title}</Text>
            <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
          </View>
          <Text style={tw`text-xl`}>

            {new Intl.NumberFormat('en-gb', {
              style:'currency',
              currency:'USD',

            })
            .format(

              (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100

            )}
          </Text>
        </TouchableOpacity>
       )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} 
        onPress={() => navigation.navigate("TaxiScreen")}
        style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-200"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default RideOptionsCard;

const styles = StyleSheet.create({});