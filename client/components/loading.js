import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import {  useEffect ,useState} from "react";
import { useNavigation } from '@react-navigation/native';
import load from "./load.png"
import del from "./del.png"
import * as Icon from "react-native-feather";




export default function Loading() {
   const [timer,settimer]=useState(true)

    const navigation = useNavigation();
    useEffect(() => {
         setTimeout(() => {
    settimer(false)
        }, 4000);
        
      }, []);
    return (
        <View className="items-center justify-center bg-blend-multiply relative h-screen bg-orange-500  ">
<StatusBar backgroundColor={"#f97216"} className="bg-orange-500"/>
           <Image source={load} className="h-80  w-full  mb-11 mix-blend-multiply"/>
                {
                  timer?<View>
                  <Text>Order is being placed</Text>
                </View>:
                <View className=" h-19 w-full  absolute  bottom-0 rounded-t-3xl py-5 px-2 justify-between bg-white">
                          <View className="p-4">
                              <Text className="text-lg font-bold">Estimate Arrival</Text>
                              <Text className="text-3xl font-bold text-gray-950">20-30 Minutes</Text>
                              <Text className="text-base  text-gray-800 font-extrabold">your order is on its way!</Text>
                          </View>
                          <View className="rounded-full w-full h-18 bg-orange-400 flex-row p-2 items-center justify-between">
                            <View className="rounded-full    overflow-hidden h-14 w-14  items-center justify-center bg-white p-1"> 
                              <Image source={del} height={10} width={10} className="h-12 w-12 m-2 " />
                            </View>
                            <View className="flex-1 ml-3">
                              <Text className="text-xl font-bold text-white">Nikhil Lende</Text>
                              <Text className="  text-white text-sm">Your Delivery Person</Text>
                            </View>
                              <View className="flex-row p-1">
                                <View className="rounded-full  h-10 w-10 mx-2 items-center justify-center bg-red-600"> 
                                  <Icon.X height={25} width={25} stroke={"white"} strokeWidth={5}/>
                                 </View>
                                <View className="rounded-full h-10 w-10 items-center justify-center bg-green-500"> 
                                    <Icon.Phone height={25} width={25} stroke={"white"} strokeWidth={3} />
                                </View>
                              </View>
                          </View>

                </View>
                }
           
        
        </View>
    )
}
