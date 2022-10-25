import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import PoolFormScreen from './src/screens/PoolFormScreen';
import { COLORS } from './src/components/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import QuestionFormScreen from './src/screens/QuestionFormScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import IntroScreen from './src/screens/IntroScreen';
import SingleQuestionScreen from './src/screens/SingleQuestionScreen';

// ! SCREEN NAMES
const homeName = 'Home'
const profileName = 'User'
const askScreen = 'Ask'
const resultScreen = 'Results'

const Tab = createBottomTabNavigator()

export default function App() {

	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName={homeName}
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						let rn = route.name;
						if (rn === homeName) {
							iconName = focused ? 'home' : 'home-outline'
						} else if (rn === profileName) {
							iconName = focused ? 'heart' : 'heart-outline'
						} else if (rn === askScreen) {
							iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
						} else if (rn === resultScreen) {
							iconName = focused ? 'person' : 'person-outline'
						}

						return <Ionicons name={iconName} size={size} color={color} />
					},
				})}
			>
				<Tab.Screen name={homeName}
					component={HomeScreen}
					options={{
						title: 'A2D - QUESTIONS',
						tabBarStyle: {
							marginBottom: 16,
							marginHorizontal: 16,
							position: 'absolute',
							borderRadius: 12,
							shadowOpacity: 100,
							height: 60,
							elevation: 0
						},
						headerStyle: {
							backgroundColor: `${COLORS.dark}`,
							height: 96
						},
						headerShadowVisible: false,
						headerTitleStyle: {
							color: `${COLORS.off}`,
							fontWeight: 'bold'
						},
						tabBarShowLabel: false,
						// headerShown: false,
						
					}} />
				<Tab.Screen name={profileName} component={IntroScreen}
					options={{
						title: 'A2D - QUESTIONS',
						tabBarStyle: {
							marginBottom: 16,
							marginHorizontal: 16,
							position: 'absolute',
							borderRadius: 12,
							shadowOpacity: 100,
							height: 60,
							elevation: 0
						},
						headerStyle: {
							backgroundColor: `${COLORS.dark}`,
							height: 96
						},
						headerShadowVisible: false,
						headerTitleStyle: {
							color: `${COLORS.off}`,
							fontWeight: 'bold'
						},
						tabBarShowLabel: false,
						// headerShown: false
					}}
				/>
				{/* <Tab.Screen name={askScreen} component={QuestionFormScreen} */}
				<Tab.Screen name={askScreen} component={SingleQuestionScreen}

					options={{
						title: 'ASK A QUESTION',
						tabBarStyle: {
							marginBottom: 16,
							marginHorizontal: 16,
							position: 'absolute',
							borderRadius: 12,
							shadowOpacity: 100,
							height: 60,
							elevation: 0
						},
						headerStyle: {
							backgroundColor: 'white',
							height: 96
						},
						headerShadowVisible: false,
						headerTitleStyle: {
							color: `${COLORS.dark}`,
							fontWeight: 'bold'
						},
						tabBarShowLabel: false,
						tabBarHideOnKeyboard: true
					}} />
				<Tab.Screen name={resultScreen} component={IntroScreen}

					options={{
						title: 'A2D - PROFILE',
						tabBarStyle: {
							marginBottom: 16,
							marginHorizontal: 16,
							position: 'absolute',
							borderRadius: 12,
							shadowOpacity: 100,
							height: 60,
							elevation: 0
						},
						headerStyle: {
							backgroundColor: `${COLORS.light}`,
							height: 96,
													},
						headerShadowVisible: false,
						headerTitleStyle: {
							color: `${COLORS.dark}`,
							fontWeight: 'bold'
						},
						tabBarShowLabel: false,
						headerShown: false,
					}} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}