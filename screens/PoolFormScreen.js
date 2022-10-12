import { useEffect, useState } from "react"
import { Button, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { getQuestion, saveQuestion, updateQuestion } from "../Api"
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
        setQuestion({ ...question, [name]: value })
    }

    // ON SUBMIT
    const handleSubmit = async () => {
        try {
            if (!editing) {
                await saveQuestion(question)
            } else {
                console.log(route.parmas.id, task);
                await updateQuestion(route.params.id, { ...question })
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

                (async () => {
                    const q = await getQuestion(route.params.id)
                    setQuestion({ title: q.title, description: q.reaction })
                })()
        }
    }, [])

    // COMPONENT
    return (
        <Layout>
            <Text style={styles.h1}>PROPONER TOPICO</Text>
            <TextInput
                placeholder="What's on your mind"
                placeholderTextColor="#2e3047"
                style={styles.input}
                onChangeText={(text) => handleChange('title', text)}
            />
            {!editing ? (
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text>Save</Text>
                </TouchableOpacity>

            ) : (
                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text>Update</Text>
                </TouchableOpacity>
            )}
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
    },
    btn: {
        backgroundColor: '#3BBA9C',
        padding: 8,
        marginTop: 16,
        borderRadius: 4
    }
})

export default PoolFormScreen