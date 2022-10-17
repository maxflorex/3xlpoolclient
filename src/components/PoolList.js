import { View, Text, FlatList, RefreshControl, TextInput, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deleteQuestion, getQuestions, getSong } from '../../Api'
import { useIsFocused } from '@react-navigation/native'
import PoolItem from './PoolItem'
import Layout from './Layout'

export default function PoolList() {
    const [q, setQ] = useState([])
    const [refreshing, setRrefreshing] = useState(false)
    const [song, setSong] = useState('')
    const [artist, setArtist] = useState('')


    // CURRENT FOCUS OF THE STATE
    const focused = useIsFocused()

    // GET DATA
    const loadQ = async () => {
        const data = await getQuestions()
        setQ(data)
    }

    // LOADING EFFECT
    useEffect(() => {
        loadQ()
    }, [focused])

    // DELETE QUESTION
    const handleDelete = async (id) => {
        await deleteQuestion(id)
        await loadQ()
    }

    // ITEM RENDERING
    const renderItem = ({ item, handleDelete }) => {
        return <PoolItem question={item} handleDelete={handleDelete} />
    }

    // REFRESH
    const onRefresh = React.useCallback(async () => {
        setRrefreshing(true)
        await loadQ()
        setRrefreshing(false)
    })

    // GET SONGS
    const onSubmitSong = async () => {
        const data = await getSong(artist, song)
        setS(data)
    }


    return (
        <Layout>
            <Text>{q && q.length > 0 ? 'Yes' : 'Not working'}</Text>
            <FlatList
                style={{ width: '100%' }}
                data={q}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        colors={['#78e08f']}
                        progressBackgroundColor="ffffff95"
                        onRefresh={onRefresh}
                    />
                }
            />
            {
                artist !== '' &&
                <Text>{artist}</Text>
            }
            <View style={styles.box}>
                <TextInput
                    placeholder="Artist"
                    placeholderTextColor="#2e3047"
                    style={styles.input}
                    onChangeText={(text) => setArtist(text)}
                />
                <TextInput
                    placeholder="Song"
                    placeholderTextColor="#2e3047"
                    style={styles.input}
                    onChangeText={(text) => setSong(text)}
                />
            </View>
            <Button onPress={() => onSubmitSong()} title="Search"
                color="#841584" />


        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ffffff',
        width: '48%',
        padding: 8,
        marginBottom: 8,
        alignSelf: 'center',
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 8,
        margin: '2%'
    },
    box: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    }
})

