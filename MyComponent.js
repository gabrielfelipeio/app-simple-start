import React from 'react';

import { StyleSheet, Text, View } from 'react-native';


export default function MyComponent() {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>React Native</Text>
            <Text style={styles.cardSubTitle}>Building applications for Android and IOS.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 3,
        marginVertical: 12
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardSubTitle: {
        fontSize: 14,
        color: '#999'
    }
});
