import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from './Colors'

export default function Intro({ navigation }) {
    return (
        <View style={styles.box}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/a2d.png')}
            />
            <View style={styles.box}>
                <Text style={styles.reg}>“Goodness is something chosen. When a man cannot choose he ceases to be a man.”</Text>
                <Text style={{ fontSize: 8, padding: 16 }}>― Anthony Burgess, A Clockwork Orange</Text>
                <TouchableOpacity><Text style={styles.btn1}>New Account</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btn2}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: `${COLORS.light}`,
        flex: 1,
        padding: 8,
        width: '100%',
        alignContent: 'center',
        justifyContent: 'flex-end',
        paddingTop: 80,
        paddingBottom: 40
    },
    tinyLogo: {
        alignSelf: 'center',
        padding: 70,
        height: 240,
        width: 60
    },
    reg: {
        alignSelf: 'center',
    },
    btn1: {
        backgroundColor: `${COLORS.orange}`,
        padding: 16,
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 16
    },
    btn2: {
        backgroundColor: 'white',
        padding: 16,
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
        color: `${COLORS.dark}`,
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 16,
        // borderWidth: 1,
        // borderColor: `${COLORS.orange}`
    },
})