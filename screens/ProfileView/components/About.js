import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../styles";

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>ABOUT ME</Text>
            <Text style={styles.about}>
                Nunc justo eros, vehicula vel vehicula ut, lacinia a erat. Nam fringilla eros... Nullam aliquam interdum
                ipsum et tempor. Phasellus odio felis, scelerisque eu purus quis.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
    about: {
        fontSize: 15,
        fontWeight: "500",
        color: colors.darkHl,
        marginTop: 8,
        lineHeight: 22,
    },
});
