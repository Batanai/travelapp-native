import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gs, colors } from "../../../styles";

export default function Stats() {
    return (
        <View style={styles.container}>
            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>12k</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>

            <View style={[styles.statContainer, styles.divider]}>
                <Text style={styles.statNumber}>1.7k</Text>
                <Text style={styles.stat}>Following</Text>
            </View>

            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>48</Text>
                <Text style={styles.stat}>Trips</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        ...gs.rowBetween,
        marginHorizontal: 16,
        borderRadius: 16,
        marginTop: -48,
    },
    statContainer: {
        ...gs.center,
        flex: 1,
    },
    statNumber: {
        fontSize: 20,
        fontWeight: "600",
        color: colors.text,
    },
    stat: {
        fontSize: 11,
        fontWeight: "600",
        letterSpacing: 1,
        textTransform: "uppercase",
        color: colors.lightHl,
        marginTop: 6,
    },
    divider: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.darkHl,
    },
});
