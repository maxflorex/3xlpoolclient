import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// COMPONENT

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#3BBA9C"/>
            {children}
        </View>
    )
}

// STYLES

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2e3047',
        padding: 16,
        flex: 1,
        alignItems: 'center'
    }
})

export default Layout