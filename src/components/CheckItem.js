import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { generateReaction } from '../features/reactionSlice';




export default function CheckItem( props ) {
    return (
        <TouchableOpacity style={styles.item} >
            <Text style={styles.p}>{props.emoji}</Text>
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
        alignItems: 'stretch',
        width: '100%'
    },
    p: {
        color: 'white',
        textAlign: 'center'
    }

})

// ('Fire', 'Doubt', 'Nelson', 'Nope') 