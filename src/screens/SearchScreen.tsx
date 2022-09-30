import React, { useEffect, useState } from "react";
import {ScrollView,View, Text, StyleSheet} from "react-native";

import SearchBar from "../components/SearchBar";
import AxiosHttp from "../services/AxiosHttp";
import ListItem from "../components/ListItem";
import { Ionicons } from '@expo/vector-icons'; 


const SearchScreen = () => {

    const [searchTerm, setInputText] = useState("");

    const [restaurants, setRestaurants] = useState([]);

    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = (inputTerm: string) => {
        AxiosHttp.get("/search", {
            params: {
                limit: 50,
                term: inputTerm,
                location: "san jose"
            }
        }).then((response) => {
            setRestaurants(response.data.businesses);
        }).catch((error) => setErrorMessage(error.message))
    }

    const filterRestaurantsByPrice = (price: string) => {
        return restaurants.filter((restaurant) => {
            return restaurant.price === price;
        });
    }

    useEffect(
        () => searchApi("pasta"),
        []
        )

    if (!restaurants.length) {
        return (
            <View>
                <SearchBar
                    inputText = {searchTerm}
                    onChangeInputText = {setInputText}
                    onTextSubmit = {() => searchApi(searchTerm)}
                />
                <View style = {styles.noRestaurant}>
                <Ionicons name="alert-circle" size={24} color="black" />
                <Text>No restaurant found!</Text>
                </View>
            </View>
        )
    } else {

    return (
        <View>
            <SearchBar
                inputText = {searchTerm}
                onChangeInputText = {setInputText}
                onTextSubmit = {() => searchApi(searchTerm)}
            />
            
            <ScrollView>
                <ListItem title = "Cost Effective" restaurants = {filterRestaurantsByPrice("$")}/>
                <ListItem title = "Bit Pricer" restaurants = {filterRestaurantsByPrice("$$")}/>
                <ListItem title = "Big Spender" restaurants = {filterRestaurantsByPrice("$$$")}/>
                <ListItem title = "Financial Bankruptcy" restaurants = {filterRestaurantsByPrice("$$$$")}/>
                {errorMessage ? <Text>{errorMessage}</Text> : null}
            </ScrollView>

        </View>
    )
    }
};


const styles = StyleSheet.create({

    noRestaurant: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    }

});


export default SearchScreen;