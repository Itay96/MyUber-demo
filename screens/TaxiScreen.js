import { StyleSheet, Text, View, Animated, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from '@rneui/base'
import tw from 'twrnc' 


const TaxiScreen = () => {
    
  return (
    <SafeAreaView>
    <View style={tw`h-full w-full`}>
    <Image
    source={{
        uri:"https://media4.giphy.com/media/3oFzmrP8ZDnNZxsyFW/giphy.gif?cid=ecf05e47cpssu6pd7xw3fuzz81qdohuwx7djckcxyc3sor4g&rid=giphy.gif&ct=g"
     }}
        style={tw`h-1/2 h-full w-full`}
    />
    </View>

    <View style={tw`m-auto h-1/2`}>
        <Text style={tw`text-semibold text-center underline`}>Your's Uber is on the way :)</Text>
    </View>
    </SafeAreaView>
  );
}

export default TaxiScreen

const styles = StyleSheet.create({});