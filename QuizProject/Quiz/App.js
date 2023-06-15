import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from './src/screens/Tela1/index';
import TelaQuest from './src/screens/Tela2/index';
import TelaResult from './src/screens/Tela3/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name= "TelaPrincipal"
          component={TelaPrincipal}
          options={{ title: 'History.io'}}
        />
        <Stack.Screen
          name= "TelaQuest"
          component={TelaQuest}
          options={{ title: 'Perguntinas'}}
        />
        <Stack.Screen
          name= "TelaResult"
          component={TelaResult}
          options={{ title: 'RESULTADOS'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}