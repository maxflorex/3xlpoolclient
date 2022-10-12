import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'




export default function CheckItem(props) {
    return (
        <TouchableOpacity key={props.key} style={styles.item} onPress={props.fn} >
            <Text style={styles.p}>{props.emoji}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#3C3F58',
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginBottom: 16
    },
    p: {
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center'
    }

})

// ('Fire', 'Doubt', 'Nelson', 'Nope') 