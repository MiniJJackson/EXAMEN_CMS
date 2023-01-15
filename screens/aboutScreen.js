import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const AboutScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> ABOUT ME SCREEN</Text>

          <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida eu ante eget vehicula. Sed.</Text>
          <Button title="got to top screen in stack" onPress={() => navigation.popToTop()} />
          <Button title="got to Details" onPress={() => navigation.navigate("Details")} />
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


export default AboutScreen;

