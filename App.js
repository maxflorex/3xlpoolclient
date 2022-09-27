import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PoolFormScreen from './screens/PoolFormScreen';

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* HOME */}

				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={({ navigation }) => ({
						title: '3XL Pool',
						headerStyle: { backgroundColor: '#3BBA9C' },
						headerTitleStyle: { color: '#ffffff' },

						// ADD NEW BUTTON

						headerRight: () => (
							<TouchableOpacity onPress={() => navigation.navigate('PoolFormScreen')}>
								<Text style={{ color: '#ffffff', marginRight: 20, fontSize: 15 }}>Pool</Text>
							</TouchableOpacity>
						)
					})}
				/>

				{/* POOL */}

				<Stack.Screen name='PoolFormScreen' component={PoolFormScreen}
					options={{
						title: 'Pool',
						headerStyle: {
							backgroundColor: '#707793'
						},
						headerTitleStyle: { color: '#ffffff' },
						headerTintColor: '#3BBA9C'
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}