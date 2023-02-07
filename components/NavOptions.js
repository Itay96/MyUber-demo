import {Text, FlatList, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';



const data = [
    {
    id: "123",
    title: "Get a ride",
    image: "https://pngimg.com/uploads/taxi_logos/taxi_logos_PNG14.png",
    screen: "MapScreen",
}
// {
//     id: "333",
//     title: "Order Food",
//     image: "https://th.bing.com/th/id/R.b917640c6338683f538986066b82d5c7?rik=k2m97JkaJcTsvA&pid=ImgRaw&r=0",
//     screen: "FoodsScreen",
//  },
];




const NavOptions = () => {

const navigation = useNavigation();
const origin = useSelector(selectOrigin);

  return (
    <FlatList
    data={data}
    horizontal
    {...{scrollEnabled:false}}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
    <TouchableOpacity
    onPress={() => navigation.navigate(item.screen)}
    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-300 m-2 w-40`}
    disabled={!origin}
    >
        <View style={tw`${!origin && 'opacity-20'}`}>
          <Image 
          style = {{ width: 120, height:120, resizeMode: "contain" }}
          source = {{ uri: item.image }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
          style={tw`p-2 bg-black rounded-full w-10 mt-4`}
          name='arrowright'
          color='white' 
          type='antdesign'
          />
          </View>  
    </TouchableOpacity>
    )}
    /> 
  );
};

export default NavOptions;