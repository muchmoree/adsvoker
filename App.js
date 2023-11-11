import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import OnboardingStack from './src/stacks/OnboardingStack';

const Stack = createNativeStackNavigator();

export default function App() {


  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
