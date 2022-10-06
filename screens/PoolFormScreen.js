import { useEffect, useState } from "react"
import { StatusBar, StyleSheet, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { getQuestion, saveQuestion, updateQuestion } from "../Api"
import Checkbox from "../src/components/CheckBox"
import Layout from "../src/components/Layout"


const PoolFormScreen = ({ navigation, route }) => {
    const [editing, setEditing] = useState(false)

    // FIELD STATES
    const [question, setQuestion] = useState({
        title: '',
        reaction: 4
    })

    // ON CHANGE
    const handleChange = (name, value) => {
        setQuestion({ ...question, })
    }

    // ON SUBMIT
    const handleSubmit = async () => {
        try {
            if (!editing) {
                saveQuestion(question)
            } else {
                updateQuestion(route.params.id, question)
            }
            navigation.navigate('Home')
        } catch (error) {
            console.log(error);
        }
    }

    // SIDE EFFECTS
    useEffect(() => {
        if (route.params && route.params.id) {
            setEditing(true)
            navigation.setOptions({ headerTitle: 'Updating Question' })
        }

        (async () => {
            const q = await getQuestion(route.params.id)
            setQuestion({ title: q.title, description: q.reaction })
        })()
    })

    // COMPONENT
    return (
        <Layout>
            <Text style={styles.h1}>PROPONER TOPICO</Text>
            <TextInput
                placeholder="What's on your mind"
                placeholderTextColor="#2e3047"
                style={styles.input}
                onChangeText={(text) => handleChange('title', text)}
                value={question.title}
            />
            <Checkbox />
        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 4
    },
    h1: {
        fontSize: 24,
        color: '#707793',
        paddingBottom: 16,
        fontWeight: 'bold'
    }
})

export default PoolFormScreen