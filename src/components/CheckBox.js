import { useState } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import CheckItem from "./CheckItem"
import Layout from "./Layout"

const data = [
    {
        title: 'Strongly Agree',
        reaction: 1,
        emoji: '❤'
    },
    {
        title: 'Agree',
        reaction: 2,
        emoji: '👍'
    },
    {
        title: 'Disagree',
        reaction: 3,
        emoji: '👎'
    },
    {
        title: 'Strongly Disagree',
        reaction: 4,
        emoji: '💔'
    },
]

const Checkbox = () => {
    const [result, setResult] = useState(0)
    return (
        <>
            <Text>{result}</Text>
            <FlatList
                style={{ width: '100%' }}
                data={data}
                keyExtractor={item => item.reaction}
                renderItem={(item) => CheckItem(item)}
            />
        </>
    )
}


export default Checkbox