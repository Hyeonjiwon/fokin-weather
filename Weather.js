import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp, condition }) {
    return (
    <View style={styles.container}>
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="green" />
            <Text style={styles.temp}>{temp}°</Text>
        </View>

        <View style={styles.halfContainer}>
            <Text style={styles.temp}>{condition}</Text>
        </View>
    </View>
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
    }
});