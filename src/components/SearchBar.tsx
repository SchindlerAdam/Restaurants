import React from "react";
import {View, TextInput, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 



const SearchBar = ({inputText, onChangeInputText, onTextSubmit}) => {

    return (
        <View style = {styles.viewContainer}>
            <Ionicons 
            name = "search" 
            style = {styles.icon}
            />
            <TextInput 
                  style = {styles.textInput}
                autoCapitalize="none"
                autoCorrect = {false}
                value = {inputText}
                onChangeText = {onChangeInputText}
                onEndEditing = {onTextSubmit}
                placeholder="Search"
            />
        </View>
    )
};


const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: "#e6e6e6",
        height: 40,
        margin: 20,
        borderRadius: 5,
        flexDirection: "row",
       
    },

    icon: {
        alignSelf: "center",
        fontSize: 30,
        marginHorizontal: 10
    },

    textInput: {
        flex: 1,
        fontSize: 18
    }
});


export default SearchBar;