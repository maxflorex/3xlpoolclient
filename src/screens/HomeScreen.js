import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CardItem from '../components/CardItem'
import { COLORS } from '../components/Colors.js'

export const Items = [
    {
        id: 0,
        question: 'Hey hey, hey?',
        voted: 4,
        author: 'Somebody'
    },
    {
        id: 1,
        question: 'Hey hey, hey?',
        voted: 2,
        author: 'Thor'
    },
    {
        id: 2,
        question: 'Hey hey, hey?',
        voted: 5,
        author: 'Love'
    },
]

// ITEM TO BE RENDER
const renderItem = ({ item }) => {
    return <CardItem item={item} />
}

const HomeScreen = () => {
    return (
        <View style={styles.box}>
            <FlatList
                data={Items}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: `${COLORS.dark}`,
        flex: 1,
        heigth: 400
    }
})

export default HomeScreen