import 'react-native-gesture-handler';

import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';

import { Routes } from './src/routes';

import theme from './src/Styles/theme';

import { useEffect } from 'react';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[])

    if(!fontsLoaded){
      return undefined;
    } else {
      SplashScreen.hideAsync();
    }

  return(
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  ) 
}
