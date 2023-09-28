
import { SafeAreaView, StatusBar, Text, TextInput, View ,ScrollView,TouchableOpacity} from 'react-native';
import * as Icon from "react-native-feather";
import Categaries from './components/categaries';
import { featured } from './const';
import Featured from './components/featured';


const Homescreen=()=>{
 
    return(
        <SafeAreaView>
           <StatusBar backgroundColor={"white"} barStyle={"dark-content"}></StatusBar>
        <View className="flex-row items-center align-middle space-x-2 px-4 pb-2 bg-white">
            <View className="bg-white-300 rounded-full p-0 pr-1 border border-gray-300  items-center flex-1 flex-row mt-2 ">
              <Icon.Search height="25" width="25" stroke="gray" className="ml-3"></Icon.Search>
              <TextInput placeholder='Restaraunts' className="ml-2 flex-1" />
                <View className="flex-row items-center space-x-1 border-0 border-l-2 border-gray-300 pl-2">
                  <Icon.MapPin height="20" width={"20"} stroke={"gray"}/>
                  <Text className="text-gray-800 mr-2"> New york NYC</Text>
               </View>
            </View>
                <View className="rounded-full p-4 mt-2  items-center bg-orange-500">
                  <Icon.Sliders height={"20"} width={"20"} stroke={"white"} />
                </View>
        </View>
        



        <ScrollView showsVerticalScrollIndicator={false} className="bg-white"
        contentContainerStyle={
        {  paddingBottom:60}
        }>

          <Categaries />
         
         <View>
          {
            featured.map((item,index)=>{
              return(
                <Featured
                key={index}
                tittle={item.title}
                restaurants={item.restaurants}
                dis={item.description}/>
              )
            })
          }
         </View>
        


        </ScrollView>
            

        </SafeAreaView>
    )
}
export default Homescreen;
