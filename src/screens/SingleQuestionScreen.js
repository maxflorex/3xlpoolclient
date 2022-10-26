import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../components/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const data = {
	title: 'Hey man, wasuP!',
	author: 'Chika Inu'
}

const reaction = [
	{
		id: 0,
		icon: 'heart'
	},
	{
		id: 1,
		icon: 'thumbs-up'
	},
	{
		id: 2,
		icon: 'thumbs-down'
	},
	{
		id: 3,
		icon: 'skull'
	},
]

const RenderItem = ({ icono }) => {
	return (<TouchableOpacity>
		<Ionicons name={icono} style={styles.icon} />
	</TouchableOpacity>)
}

export default function SingleQuestionScreen() {

	const [active, setActive] = useState(false)

	return (
		<View style={styles.box}>
			<View style={styles.orange}>
				<Text style={styles.maintxt}>{data.title}</Text>
				<View>
					<Text style={styles.txt}>By</Text>
					<Text style={styles.txt2}>{data.author}</Text>
				</View>
			</View>
			<FlatList
				data={reaction}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <RenderItem icono={item.icon} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: 'white',
		flex: 1,
		padding: 16
	},
	orange: {
		backgroundColor: `${COLORS.orange}`,
		padding: 16,
		borderRadius: 12
	},
	maintxt: {
		color: `${COLORS.light}`,
		padding: 16,
		fontSize: 32,
		alignSelf: 'center',
		fontWeight: 'bold'
	},
	txt: {
		fontSize: 8,
		color: `${COLORS.light}`
	},
	txt2: {
		fontSize: 8,
		color: `${COLORS.light}`,
		fontWeight: 'bold'
	},
	icon: {
		width: '100%',
		backgroundColor: `${COLORS.light}`,
		alignSelf: 'center',
		fontSize: 24,
		textAlign: 'center',
		padding: 16,
		borderRadius: 12,
		marginTop: 8,
		color: `${COLORS.dark}`
	}
})