import React from 'react';
//import { StatusBar, SafeAreaView, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PrimeiraTela from './src/telas/PrimeiraTela';
import SegundaTela from './src/telas/SegundaTela';
import mock from './src/mocks/primeiraTela';

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
        <Stack.Navigator>
          <Stack.Screen
            name="PrimeiraTela"
            component={PrimeiraTela}
            options={{ title: "Bem vindo!"}}
          />
          <Stack.Screen name="SegundaTela" component={SegundaTela}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};