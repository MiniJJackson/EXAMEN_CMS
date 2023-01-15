import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackView } from '@react-navigation/native-stack';// nodig voor stack navigation
import { ScreenStack } from 'react-native-screens';// nodig voor stack navigation

//ADDED
const Stack = createNativeStackNavigator(); // nodig voor stack navigation

import HomeScreen from './screens/homeScreen';
import DetailsScreen from './screens/detailScreen';
import AboutScreen from './screens/aboutScreen';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96D3E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
