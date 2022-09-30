import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import { withNavigation } from "react-navigation";


const ListItemDetails = ({restaurant, navigation}) => {

    return (
        <TouchableOpacity onPress = {() => navigation.navigate("RestaurantDetails", {restaurantId: restaurant.id})}>
            <View style = {styles.container}>
            <Image style = {styles.image} source={{uri: restaurant.image_url}}/>
            <Text style = {styles.headerText}>{restaurant.name}</Text>
            <View style = {styles.infoContainer}>
                <Text style = {styles.rating}>Rating {restaurant.rating} stars</Text>
                <Text style = {styles.reviews}>{restaurant.review_count} Reviews</Text>
                <Text style = {styles.openStatus}>{restaurant.is_closed ? "Open" : "Close"}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({

    container: {
        display: "flex",
        marginHorizontal: 10,
        marginVertical: 15,

    },

    image: {
        marginTop: 20,
        width: 300,
        height: 150,
        bottom: 20,
    },

    headerText: {
        fontWeight: "bold"
    },

    infoContainer: {
        flexDirection: "row",
        marginVertical: 1,
        
    },

    rating: {
        flex: 1
    },

    reviews: {
        flex: 1
    },

    openStatus: {
        flex: 1
    }

});


export default withNavigation(ListItemDetails);