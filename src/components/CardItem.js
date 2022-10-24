import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'

export default function CardItem({ item }) {
    return (
        <View style={styles.card}>
            <Text style={{ fontSize: 8, alignSelf: 'flex-end', padding: 8 }}>Voted X Times</Text>
            <Text style={styles.quest}>{item.question.toUpperCase()}</Text>
            <View style={{padding: 8}}>
                <Text style={styles.txt}>BY</Text>
                <Text style={styles.txt2}>{item.author.toUpperCase()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: `${COLORS.orange}`,
        margin: 16,
        borderRadius: 12,
        flex: 1,
        padding: 8
        // width: 
    },
    quest: {
        color: `${COLORS.light}`,
        padding: 16,
        fontSize: 32,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    txt: {
        fontSize: 8,
        color: `${COLORS.light}`
    },
    txt2: {
        fontSize: 8,
        color: `${COLORS.light}`,
        fontWeight: 'bold'
    }
})