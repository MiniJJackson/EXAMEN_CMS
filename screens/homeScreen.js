import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const HomeScreen =({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text style={styles.h1}>HOME SCREEN</Text>
      <Text style={styles.h2}> Welcome to my favorite foods catalog</Text>
      <Text style={styles.paragraph}> In this app you will see all the foods I like to eat and the recipies or restaurants where I love to eat.</Text>
      <Button style={styles.buttonStyle} title="Continue" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}



const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  h1:{
    fontSize: 24,
    fontWeight: '800',
    marginTop: 0,
    marginBottom: 10,
  },
  h2:{
    fontSize: 16,
    fontWeight: '400',
  },
  paragraph:{
    alignContent: 'cnter',
    alignItems: 'center',
  },
  buttonStyle:{
    color: 'green',
    borderRadius: 3,
  }
});


export default HomeScreen;