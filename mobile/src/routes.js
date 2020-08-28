import React from 'react';
import { NavigatorContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
    <NavigatorContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Incidents" component={Incidents} />  
      <AppStack.Screen name="Detail" component={Detail} />

      </AppStack.Navigator>
         
    </NavigatorContainer>
    );
}