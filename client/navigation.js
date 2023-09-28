import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens';
import Homescreen from './home';
import Rest from './components/rest';
import Cart from './components/cart';
import Loading from './components/loading';


enableScreens();
const Stack = createNativeStackNavigator();
function Navigat() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="Rest" component={Rest} />
          <Stack.Screen name="Cart" options={{presentation:"modal"}} component={Cart} />
          <Stack.Screen name="Loading" options={{presentation:"fullScreenModal"}} component={Loading} />
         

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  export default Navigat;