import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';


const DetailFood = ({naviation}) =>{ 


    return (
        <View>
            <FlatList data={DetailFood} renderItem={({item}) => (
            <Text>
                <Text>{item.title.rendered}</Text>
            </Text>    
    )}/>
            <View>
                <Pressable>
                <Text>Bekijk mijn Recepten {item.title.rendered}</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
    }
  });
export default DetailFood;

