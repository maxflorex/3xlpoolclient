import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { getQuestions } from '../../Api'

export default function PoolItem({ question, handleDelete }) {

    const navigation = useNavigation()

    return (
        <View styles={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('PoolFormScreen', { id: getQuestions.id })}>
                <Text style={styles.itemTitle}>{question.title}</Text>
                <Text style={styles.itemTitle}>{question.reaction}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        color: '#ffffff'
    }
})