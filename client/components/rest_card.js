import React from 'react'
import { View, Text ,TouchableOpacity,Image} from 'react-native'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';




export default function Rest_card({image,name,ratings,location,review,category,restaurants}) {

  const navigation = useNavigation();
    return (
        <TouchableOpacity 
        onPress={() => 
          navigation.navigate("Rest",{...restaurants})
        }
        className="shadow-md"
      >
    <View  className=" mr-4 overflow-hidden rounded-3xl border border-gray-300 border-t-0 shadow-md">
    <Image source={image} className="h-40 w-72 "/>
     <View className=" p-2 ">
     <Text className="text-lg font-bold text-black ml-1">{name}</Text>
       <View className="flex-row items-center mt-2">
       <Icon.Star height={18} width={18} stroke={"yellow"} fill={"yellow"} className="mt-1 "/>
       <Text className="ml-2 mr-2">{ratings}</Text>
       <Text className="ml-2 mr-2">{"("+review+")"}</Text>
       <Text className="text-base font-semibold">{category}</Text>
       </View>
       <View className="flex-row items-center mt-2 mb-4 ">
        <Icon.MapPin height={18} width={18} stroke={"grey"}/>
        <Text className="ml-2 mr-2 ">{location}</Text>
       </View>
       <View className="">

       </View>
     </View>
    </View>
        </TouchableOpacity>
    )
}
