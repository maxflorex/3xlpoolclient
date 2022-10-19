import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'

export default function CardItem({ item }) {
    return (
        <View style={styles.card}>
            <Text style={{ fontSize: 8, alignSelf: 'flex-end', padding: 8 }}>Voted X Times</Text>
            <Text style={styles.quest}>{item.question}</Text>
            <View style={{padding: 8}}>
                <Text style={styles.txt}>Listed by</Text>
                <Text style={styles.txt}>{item.author}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: `${COLORS.orange}`,
        margin: 8,
        borderRadius: 12,
        flex: 1
        // width: 
    },
    quest: {
        color: `${COLORS.light}`,
        padding: 16,
        fontSize: 24,
        alignSelf: 'center'
    },
    txt: {
        fontSize: 8,
        color: `${COLORS.light}`
    }
})