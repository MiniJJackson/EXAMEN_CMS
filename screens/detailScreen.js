import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';


const detailFood = ({naviation}) =>{


    return (
        <View>
            <FlatList data={detailFood} renderItem={({item}) => (
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

export default detailFood;

