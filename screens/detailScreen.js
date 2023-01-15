import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text> DETAILS SCREEN</Text>
            <Button style={{ backgroundColor: "green" }} title="got to Home" onPress={() => navigation.navigate("Home")}// gaat naar home
            />
            <Button title="got to About me" onPress={() => navigation.navigate("About")} // gaat naar about
            />

            <Button title="got to Details again..." onPress={() => navigation.navigate("Details")}// we staan al op dit scherm er gebeurt niks 
            />
            <Button title="got to Details again and again..." onPress={() => navigation.push("Details")}// we herladen de pagina nog eens met een animaties 
            />
            <Button title="Go Back" onPress={() => navigation.goBack()}// terug naar je vorige scherm dat is opgeslagen
            />
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


export default DetailsScreen;