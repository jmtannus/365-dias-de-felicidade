import React from 'react';
import { View, Text } from 'react-native';
//import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import PrimeiraTela from './src/telas/PrimeiraTela';
import SegundaTela from './src/telas/SegundaTela';
import TerceiraTela from './src/telas/TerceiraTela';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  } return (
    <NavigationContainer>
        <Stack.Navigator defaultScreenOptions={SegundaTela}>
          <Stack.Screen name="PrimeiraTela" component={PrimeiraTela} options={{headerShown: false}} />
          <Stack.Screen name="SegundaTela" component={SegundaTela} options={{headerTransparent: true}} />
          <Stack.Screen name="TerceiraTela" component={TerceiraTela} options={{headerTransparent: true}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};