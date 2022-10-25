import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../components/Colors'

export default function LoginScreen() {

	const [editing, setEditing] = useState(false)

	const handleSubmit = () => {
		console.log('hey');
	}

	const handleChange = () => {
		console.log('Hey')
	}


	return (
		<View style={styles.box}>
			<View style={styles.imgbox}>
				<Image source={require('../assets/drums.png')} style={styles.img} />
			</View>
			<TextInput
				placeholder="Enter your email..."
				placeholderTextColor="#2e3047"
				style={styles.input}
				onChangeText={(text) => handleChange('title', text)}
			/>
			<TextInput
				placeholder="Enter your password..."
				placeholderTextColor="#2e3047"
				style={styles.input}
				onChangeText={(text) => handleChange('title', text)}
			/>
			{!editing ? (
				<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
					<Text style={styles.btnText}>LOGIN</Text>
				</TouchableOpacity>

			) : (
				<TouchableOpacity style={styles.btn} onPress={handleSubmit}>
					<Text style={styles.btnText}>REGISTER</Text>
				</TouchableOpacity>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: `${COLORS.light}`,
		flex: 1,
		paddingHorizontal: 16
	},
	input: {
		backgroundColor: 'white',
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
		height: 130,
		width: 140,
		marginTop: 40,
		marginBottom: 20
	},
	imgbox: {
		alignSelf: 'center',
		width: '60%'
	}
})