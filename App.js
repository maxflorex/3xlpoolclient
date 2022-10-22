import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PoolFormScreen from './src/screens/PoolFormScreen';
import { COLORS } from './src/components/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()

// ! SCREEN NAMES
const homeScreen = 'Home'
const user = 'User'

const Tab = createBottomTabNavigator()


export default function App() {

	return (
		<NavigationContainer>
			{/* <Stack.Navigator> */}
			{/* HOME */}

			{/* <Stack.Screen
					name='Home'
					component={HomeScreen}
					options={({ navigation }) => ({
						title: 'A2D',
						headerStyle: { backgroundColor: `${COLORS.orange}` },
						headerTitleStyle: { color: `${COLORS.off}` },

						// ADD NEW BUTTON

						headerRight: () => (
							<TouchableOpacity onPress={() => navigation.navigate('PoolFormScreen')}>
								<Text style={{ color: '#ffffff', marginRight: 20, fontSize: 15 }}>Pool</Text>
							</TouchableOpacity>
						)
					})}
				/> */}

			{/* POOL */}

			{/* <Stack.Screen name='PoolFormScreen'
					component={PoolFormScreen}
					options={{
						title: 'Pool',
						headerStyle: {
							backgroundColor: '#707793'
						},
						headerTitleStyle: { color: '#ffffff' },
						headerTintColor: '#3BBA9C'
					}}
				/> */}
			{/* </Stack.Navigator> */}
		<Tab.Navigator
		initialRouteName={homeScreen}
		screenOptions={({route}) => ({
			// tabBar
		})} 
		>

		</Tab.Navigator>
		
		</NavigationContainer>
	);
}