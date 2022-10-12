import { useEffect, useState } from "react"
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native"
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
    const [result, setResult] = useState('')

    const handleClick = (res) => {
        setResult(res)
    }

    return (
        <View style={styles.box}>
            <Text>{result === '' ? 'Select an option' : result}</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.reaction}
                renderItem={({ item }) => <CheckItem emoji={item.emoji} fn={() => handleClick(item.title)} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        flex: 2,
    }
})

export default Checkbox