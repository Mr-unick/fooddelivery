import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import cart from "../images/carticon.png"
import { useNavigation } from '@react-navigation/native';



export default function Emptycart() {
    const navigation = useNavigation();
    return (
        <View className="items-center justify-center flex-col">
            <Image source={cart} className="w-56 h-56 mr-9 mt-44"/>

            <Text className="text-3xl font-extrabold mt-12 mb-2">Your cart is empty</Text>
            <Text className="mb-8" >Looks like you havent added anything to your cart</Text>
            <TouchableOpacity className=" p-2 rounded-full bg-orange-500 h-12 w-56 items-center justify-center mb-60  "onPress={()=>navigation.navigate("Home")}>
                <Text className="text-lg font-bold text-white">Go To Dashboard</Text>
            </TouchableOpacity>
        </View>
    )
}
