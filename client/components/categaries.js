import React from 'react'
import { View, Text,ScrollView ,TouchableOpacity,Image} from 'react-native'
import { categories } from '../const'
import  { useState } from 'react';
export default function Categaries() {

   

    return (
        <View className="">
           <ScrollView
           horizontal
           showsHorizontalScrollIndicator={false}
           className="overflow-visible mt-1"
           contentContainerStyle={{
            paddingBottom:20
           }}
           >

            {
            categories.map((categary ,index)=>{
        
                  return ( <View key={ index} className={" m-3 items-center "}>
                        <TouchableOpacity
                        onPress={()=>{}}
                         className={"rounded-full items-center  flex-row overflow-hidden shadow-md"}>
                        <Image style={{height:60 ,width:60}} source={categary.image} />
                        </TouchableOpacity>
                      
                        <Text className={"text-gray-900  text-sm mt-1"}>{categary.name}</Text>
                       
                    </View>)
                })
            }

           </ScrollView>     
        </View>
    )
}
