import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";

import ListItemDetails from "./ListItemDetails";


const ListItem = ({title, restaurants}) => {

    if (!restaurants.length) {
        return null;
    } else {
        return (
            <View style = {styles.container}>
                <Text style = {styles.headerText}>{title}</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    data={restaurants}
                    renderItem = {(element) => {
                        return <ListItemDetails restaurant={element.item} />
                    }}
                    keyExtractor = {(restaurant) => {
                        return restaurant.id;
                    }}
                />
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginHorizontal: 10,
    },

    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 15,
    }
});


export default ListItem;