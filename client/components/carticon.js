import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
export default function Cart_icon() {
  
    const navigation = useNavigation();

    const total = useSelector((state) => state.coter.total)
    const cart = useSelector((state) => state.coter.cart)
       const count=cart.length
    

    return (
        <View className=" absolute bottom-5 z-50  h-16 w-full  items-center px-4 ">
            <TouchableOpacity className="rounded-full bg-orange-600  p-2 px-3 w-full my-4 items-center justify-between flex-row "
              onPress={() => 
                navigation.navigate("Cart")
              }>
            <View className="rounded-full bg-orange-200 items-center justify-center w-12 h-12">
            <Text className="text-2xl text-white">{count?count:0}</Text> 
            </View>
            <Text className="text-2xl text-white mr-2">view cart</Text>
            <Text className="text-2xl text-white mr-2">${total}</Text>
            
            </TouchableOpacity>
               
        
        </View>
    )
}
