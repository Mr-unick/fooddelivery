

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Navigat from './navigation';
import { store } from './redux/store';
import { Provider } from 'react-redux';


function App() {
  
  return (
  <Provider store={store}>
    <Navigat/>
    </Provider>
  
  );
}




export default App;
