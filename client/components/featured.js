import React from 'react'
import { View, Text,TouchableOpacity ,ScrollView} from 'react-native'
import Rest_card from './rest_card'

export default function Featured({tittle,dis,restaurants}) {
    return (
        <View className="mb-2 ">
            <View className="flex-row items-center justify-between pl-3 pr-3">
                <View className="flex-col">
                    <Text className="font-bold text-lg">{tittle}</Text>
                    <Text>{dis}</Text>
                </View>
                <TouchableOpacity><Text className="text-lg ">see all</Text></TouchableOpacity>
            </View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
                {
                    paddingHorizontal:10
                }
            }
            className="overflow-visible py-5 ">
                

                    { restaurants.map((restaurants,index)=>{
                        return(
                            <Rest_card
                            image={restaurants.image}
                            name={restaurants.name}
                            ratings={restaurants.stars}
                            review={restaurants.reviews}
                            location={restaurants.address}
                            category={restaurants.category}
                            restaurants={restaurants}/>
                        )
                    })
                        
                    }

            </ScrollView>
        </View>
    )
}
