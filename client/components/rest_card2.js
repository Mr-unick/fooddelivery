import React, { useState } from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'
import * as Icon from "react-native-feather";
import {  useDispatch } from 'react-redux'
import {  addtocart, remcart } from '../redux/slice';





export default function Rest_card2({dish}) {
   
    const dispatch = useDispatch()
    

    const handler1=(dish)=>{
      
        dispatch(addtocart(dish))
       
    }
    const handler2=(dish)=>{

        dispatch(remcart(dish))
       
    }
    return (
        <View>
            {
                dish.map((dish)=>{
                    return(
                        <View className="flex-row my-2 py-2 rounded-2xl shadow-orange-50 bg-orange-50 p-2">
                        <Image source={dish.image} height={30} width={30} className="rounded-full h-28 w-28 border-2"/>
                        <View className="flex-col ml-3 flex-1">
                            <Text className="text-xl font-bold text-black">{dish.name}</Text>
                            <Text>{dish.description}</Text>
                           <View className="flex-row justify-between mt-6">
                                <Text className="text-3xl font-bold text-black ">{"$"+dish.price}</Text>
                                <View className="flex-row items-center">
                                <TouchableOpacity className="rounded-full bg-orange-600 h-8 w-8 items-center justify-center mx-2"
                                onPress={() =>handler2(dish) }>
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"}/>
                                    </TouchableOpacity>
                                    <Text>{}</Text>
                                <TouchableOpacity className="rounded-full bg-orange-600 h-8 w-8 items-center justify-center mx-2 "
                                onPress={() => handler1(dish)}>
                                <Icon.Plus strokeWidth={2} height={20} width={20} stroke={"white"}/>
                                    </TouchableOpacity>
                                </View>
                           </View>
                        </View>

                    </View>
                    )
                })
            }
                       
                    
            
           
        </View>
    )
}
