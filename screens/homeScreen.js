import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const HomeScreen =({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text> HOME SCREEN</Text>
      <Text> Wolcome to my favorite foods catalog</Text>
      <Text> In this app you will see all the foods I like to eat and the recipies or restaurants where I love to eat.</Text>
      <Button title="got to Details" onPress={() => navigation.navigate("Details")} />
      <Button title="got to About me" onPress={() => navigation.navigate("About")} />
    </View>
  );
}



const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  }
});


export default HomeScreen;