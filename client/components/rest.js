import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image ,SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import Rest_card2 from './rest_card2';
import Cart_icon from './carticon';


export default function Rest() {

    const {params}=useRoute();
    let restaurants=params;
    const navigation = useNavigation();

    return (
       
           <View>
                  <Cart_icon/>
                <ScrollView>
                  
                  <View className="relative">
                           <Image className="w-full h-72 " source={restaurants.image}/>
                           <TouchableOpacity className="absolute top-5 left-4 bg-gray-50 p-2 rounded-full"onPress={()=>navigation.goBack()}>
                               <Icon.ArrowLeft strokeWidth={4} stroke={"orange"}/>
                           </TouchableOpacity>
                   <View >
                 
                   <View style={{borderTopLeftRadius:50,borderTopRightRadius:50}}className="-mt-12 pt-5 bg-gray-50">
       
                           <Text className=" font-bold text-gray-950  ml-5 mt-2 text-2xl">{restaurants.name}</Text>
                           <View className="flex-row items-center mt-2">
                                   <Icon.Star  height={18} width={18} stroke={"yellow"} fill={"yellow"} className="mt-1 ml-4"/>
                                   <Text className="ml-1 font-semibold">{restaurants.stars+"("+ restaurants.reviews+" "+"reviews"+")"}</Text>
                                   <Text className="text-base font-semibold ml-2">{"."+restaurants.category}</Text>
                           </View>
                           <View className="flex-row items-center mt-1 ">
                                   <Icon.MapPin height={18} width={18} stroke={"grey"} className="ml-4"/>
                                   <Text className="ml-1 mr-2 ">{"Nearby ,"+restaurants.address}</Text>
                           </View>
                            <Text className="text-s font-semibold ml-5 mt-2">{restaurants.description}</Text>
                            <Text className=" font-bold text-gray-950  ml-5 mt-4 text-xl">Menu</Text>

                            <View className="p-4 mb-14">
                              
                            <Rest_card2 dish={restaurants.dishes}/>  
                                            
                            </View>
                   </View>
              
                   </View>
                   </View>
                  </ScrollView>
           </View>
        
    )
}
