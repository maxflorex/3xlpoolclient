import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'

// COMPONENT

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#DE5C4D' />
            {children}
        </View>
    )
}

// STYLES

const styles = StyleSheet.create({
    container: {
        backgroundColor: `${COLORS.dark}`,
        padding: 16,
        flex: 1,
        alignItems: 'center'
    }
})

export default Layout