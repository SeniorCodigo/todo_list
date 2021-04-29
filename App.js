  import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Screens from './screens/index';
import {Provider} from 'react-redux';
import {store} from './redux/store'

const {Screen, Navigator} = createStackNavigator();

//Navigation de react native
const App = (props) =>(
  <Provider store={store}>
    <NavigationContainer>
      <Navigator
      screenOptions= {{
        headerShown: false,
      }}
      >
        {/**Se crearon las screens en la carpeta screens y se importan como *as **/}
        <Screen name="addTask" component={Screens.AddTask } />
        <Screen name="update" component={Screens.Update } />
      </Navigator>
    </NavigationContainer>
    </Provider>
);

export default App;