import { createStackNavigator } from '@react-navigation/stack'
import Intro from '../components/Intro'
import LoginScreen from './LoginScreen'


const Stack = createStackNavigator()

export default function IntroScreen() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen name='Intro' component={Intro} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

