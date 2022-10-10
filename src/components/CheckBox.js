import { useEffect, useState } from "react"
import { Alert, FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux"
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

    useEffect(() => {
        console.log(result);
    }, [result])

    // REDUX
    const dispatch = useDispatch()

    return (
        <Layout>
            <Text>{result}</Text>
            <CheckItem emoji='❤' onPress={() => setResult('emoji')} />
            <CheckItem emoji='💔' onPress={() => setResult('emoji')} />
        </Layout>
    )
}


export default Checkbox