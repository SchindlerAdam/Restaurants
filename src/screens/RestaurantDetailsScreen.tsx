import React, { useEffect, useState } from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AxiosHttp from "../services/AxiosHttp";


const RestaurantDetailsScreen = ({navigation}) => {

    const restaurantId = navigation.getParam("restaurantId");

    const [restaurant, setREstaurant] = useState(null);

    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = () => {
        AxiosHttp
                        .get(`/${restaurantId}`)
                        .then((response) => {
                            setREstaurant(response.data)
                        })
                        .catch((error) => {
                            setErrorMessage(error.message)
                        })
    }
    
    useEffect(
        () => searchApi(),
        []
        );
    
    if (!restaurant) {
        return null;
    } else {
        return (
            <View>
                <Text style = {styles.header}>{restaurant.name}</Text>
                <Image source = {{uri: restaurant.image_url}} />
                <FlatList 
                    data={restaurant.photos}
                    renderItem = {(element) => {
                        return <Image style = {styles.image} source={{uri: element.item}} />
                    }}
                    keyExtractor = {(photoUri) => photoUri}
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({

    header: {
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 10
    },

    image: {
        width: 350,
        height: 200,
        margin: 10,
        alignSelf: "center"

    }
})


export default RestaurantDetailsScreen;