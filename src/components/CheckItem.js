import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function CheckItem({ item }) {
    return (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.p}>{item.emoji}</Text>
        </TouchableOpacity>
    )
}


// DEFINE GAP
const gap = 8


const styles = StyleSheet.create({
    item: {
        fontSize: 64,
        backgroundColor: '#3C3F58',
        borderRadius: 4,
        padding: 8,
        marginHorizontal: gap / 2,
        marginVertical: gap / 2,
        padding: 16,
        borderRadius: 8,
        alignItems: 'stretch'
    },
    p: {
        color: 'white',
        textAlign: 'center'
    }

})

// ('Fire', 'Doubt', 'Nelson', 'Nope') 