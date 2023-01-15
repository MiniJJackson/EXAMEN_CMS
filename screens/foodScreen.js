import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

const FoodScreen = ({ navigation }) => {
    const [foodFav, setFoodFav] = useState ([]);

    const getFoodFav = async () => {
        try {
            const response = await fetch ("http://jennajackson.be/wp-json/wp/v2/posts", {

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

     //laad search results wanneer je in textinput typt
  const getFoodByTitleSearch = async (enteredText) => {//argument meegegeven door onChangeText
    try {
      if (enteredText.length > 3) {
        const url = encodeURI("http://jennajackson.be/wp-json/wp/v2/posts" + enteredText + "/");
        console.log(url);
        
        const json = await response.json();
        console.log(json);
        setFoodFav(json);
        (json.results);
      }
    } catch (error) {
      console.error(error);
    }
  }


    return (
      <View>
        <TextInput
        placeholder="search movie"
        style={styles.input}
        onChangeText={getFoodByTitleSearch}
      />

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

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});

export default FoodScreen;

