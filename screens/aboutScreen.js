import React, {useState, useEffect} from 'react';
import {Stylesheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const AboutScreen = ({ navigation }) => {
    const [foodFav, setFoodFav] = useState ([]);

    const getFoodFav = async () => {
        try {
            const response = await fetch ("http://jennajackson.be/wp-json/wp/v2/posts?categories/", {

            })
            const json = await response.json();
            setFoodFav(json);
            console.log(foodFav);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setFoodFav();
    }, []);

    return (
      <View>
      <FlatList data={foodFav} renderItem={({item}) => (
      <Text>
          <Text>{item.title.rendered}</Text>
      </Text>    
)}/>
      <View>
          <Pressable>
          <Text>Bekijk product: {item.title.rendered}</Text>
          </Pressable>
      </View>
  </View>
      );
}

export default AboutScreen;

