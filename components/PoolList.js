import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deleteQuestion, getQuestions } from '../Api'
import { useIsFocused } from '@react-navigation/native'
import PoolItem from './PoolItem'

export default function PoolList() {
    const [q, setQ] = useState([])
    const [refreshing, setRrefreshing] = useState(false)

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


    return (
        <View>
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
        </View>
    )
}