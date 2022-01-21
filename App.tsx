import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import theme from './src/global/styles/theme';

import { AppRoutes } from './src/routes/app.routes';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
