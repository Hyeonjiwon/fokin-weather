import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
    }, 

    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#89F7FE", "#66A6FF"],
    },

    Rain: {
        iconName: "weather-pouring",
        gradient: ["#00C6FB", "#005BEA"],
    }, 

    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
    },

    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
    },

    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
    },

    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
    },

    Haze: {
        iconName: "weather-fog",
        gradient: ["#403B4A", "#E7E9BB"],
    }, 

    Mist: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
    },

    Dust: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
    },
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={ weatherOptions[condition].gradient }
        style={ styles.container }
      >
        <StatusBar barStyle="light-content"/>
        <View style={ styles.halfContainer }>
            <MaterialCommunityIcons 
            name= { weatherOptions[condition].iconName } 
            size= {96} 
            color= "white" />
            <Text style= { styles.temp }>{ temp }°</Text>
        </View>

        <View style={styles.halfContainer}>
            <Text style={styles.temp}>{condition}</Text>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white",
    }
});