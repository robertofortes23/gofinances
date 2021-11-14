import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Montserrat_400Regular, 
  Montserrat_500Medium,
  Montserrat_600SemiBold, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import theme from './src/global/styles/theme'

import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';

export default function App() {
  const [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
