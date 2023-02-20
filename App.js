import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TeamConditionForm from './screens/TeamConditionForm';
import TeamForm from './screens/TeamForm';
import AddNames from './screens/AddNames';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TeamCondition" component={TeamConditionForm} />
        <Stack.Screen name="TeamForm" component={TeamForm} />
        <Stack.Screen name="Add" component={AddNames} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;