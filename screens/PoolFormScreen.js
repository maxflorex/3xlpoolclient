import { StatusBar, StyleSheet, Text } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import Layout from "../components/Layout"


const PoolFormScreen = () => {
    return (
        <Layout>
            <Text style={styles.h1}>Propuesta</Text>
            <TextInput 
            placeholder="What's on your mind"
            placeholderTextColor="#2e3047"
            style={styles.input}
            />
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