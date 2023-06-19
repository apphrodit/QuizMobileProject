import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from './src/screens/Tela1/index';
import TelaQuest from './src/screens/Tela2/index';
import TelaResult from './src/screens/Tela3/index';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaQuest"
          component={TelaQuest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaResult"
          component={TelaResult}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});