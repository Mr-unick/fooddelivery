import React from 'react'
import { View, Text, ScrollView ,TouchableOpacity,StatusBar, SafeAreaView, Image} from 'react-native'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import boy from "./boy2.png"
import  { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remcart } from '../redux/slice';
import Emptycart from './emptycart';

export default function Cart() {
   
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.coter.cart)
    const total = useSelector((state) => state.coter.total)
  const count=cart.length
   
   
 
    
   

    const handler2=(dish)=>{

        dispatch(remcart(dish));
        
       
    }
    return (
        <View> 
             <StatusBar backgroundColor={"white"} barStyle={"dark-content"}></StatusBar>
            {
            count?
                <View>
                    <View className="absolute bottom-0 flex-col p-4 bg-orange-500 w-full rounded-t-3xl z-50 animate__animated animate__fadeInUp" >
                        <View className="items-center justify-between p3 m-1 mx-3 flex-row "><Text className="text-base font-bold">Total</Text><Text>${total}</Text></View>
                        <View className="items-center justify-between p3 m-1 mx-3 flex-row"><Text >dilivery fee</Text><Text className="font-bold">$2</Text></View>
                        <View className="items-center justify-between p3 m-1 mx-3 mb-4 flex-row"><Text className="font-bold">order Total</Text><Text className="font-bold">${total+2}</Text></View>
                        <TouchableOpacity className="rounded-full w-full h-16 items-center justify-center bg-orange-50"
                        onPress={() => 
                            navigation.navigate("Loading")
                        }>
                            <Text className="font-bold text-xl text-wh">Place Order</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView >
                        <View className="relative">
                            <View className="p-4 items-center justify-between flex-row  bg-white">
                                <TouchableOpacity className=" p-2 rounded-full bg-orange-500 h-10 w-10 "onPress={()=>navigation.goBack()}>
                                                <Icon.ArrowLeft strokeWidth={4} stroke={"white"}/>
                                </TouchableOpacity>
                                <View className="flex-1 flex-col items-center justify-center">
                                    <Text className="mr-9 text-xl font-bold"> Your Cart</Text>
                                    <Text className="mr-9">papa johns</Text>
                                </View>
                            
                            </View>
                            <View className="items-center justify-between flex-row py-2 px-4 h-20 w-full bg-orange-400">
                                <View className=" h-16 w-16 overflow-hidden items-center justify-center bg-blend-screen">
                                <Image source={boy} className="h-20 w-20"/>
                                </View>
                                <Text className="font-bold"> Deliver in 20-30 minutes </Text>
                                <TouchableOpacity>
                                    <Text className="text-orange-200 font-bold">change</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="mt-1 py-2 min-h-screen ">
                              
                                { 
                                cart.map((dish)=>{
                                    return(
                                        <View className="rounded-full shadow-lg bg-white   m-2 items-center justify-between flex-row p-2 ">
                                        <View className="flex-row items-center"> 
                                               
                                                <View className="rounded-full h-16 w-16 items-center justify-center bg-slate-500 overflow-hidden">
                                                    <Image source={dish.image} height={10} width={10} className="h-20 w-20  shadow-inner ml-3 bottom-1"/>
                                                </View>
                                                <Text className="mx-3 text-base font-bold">{dish.name}</Text>
                                        </View>
                                        <View className="items-center justify-center flex-row">
                                                <Text className="text-2xl font-bold mr-1">{"$"+dish.price}</Text>
                                                <TouchableOpacity className="rounded-full h-8 w-8 bg-orange-500 mx-2 items-center justify-center"
                                                onPress={() => handler2(dish)}>
                                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"}/>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    )
                                })
                                }
                            </View>
                        </View>
                    </ScrollView>
                </View>
                :
                <View className="bg-white">
                    <Emptycart/>
                </View>
            }
           
            
        </View>
    )
}
