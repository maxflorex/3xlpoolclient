import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../components/Colors'

export default function QuestionFormScreen({ navigation, route }) {

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


	return (
		<View style={styles.box}>
			<TextInput
				placeholder="Type your question..."
				placeholderTextColor="#2e3047"
				style={styles.input}
				onChangeText={(text) => handleChange('title', text)}
			/>
			{!editing ? (
				<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
					<Text style={styles.btnText}>SAVE</Text>
				</TouchableOpacity>

			) : (
				<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
					<Text style={styles.btnText}>Update</Text>
				</TouchableOpacity>
			)}
			<View style={styles.container}>

				<Image
					style={styles.img}
					source={require('../assets/trompet.png')}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: 'white',
		flex: 1,
		paddingHorizontal: 16
	},
	input: {
		backgroundColor: `${COLORS.off}`,
		padding: 20,
		borderRadius: 16,
		marginTop: 16,
	},
	btn: {
		backgroundColor: `${COLORS.orange}`,
		padding: 20,
		borderRadius: 16,
		marginTop: 16,
		alignItems: 'center'
	},
	btnText: {
		color: `${COLORS.light}`,
		fontWeight: 'bold',
	},
	container: {
		marginTop: 68,
		alignSelf: 'center',
		justifyContent: 'center'
	},
	img: {
		alignSelf: 'center',
		height: 214,
		width: 60
	}
})