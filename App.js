import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  useFonts as useOpenSans,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";
import {
  useFonts as useQuickSand,
  Quicksand_400Regular,
} from "@expo-google-fonts/quicksand";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { restaurantsRequest } from "./src/services/restaurants/restaurants.services";

import { Navigation } from "./src/infrastructure/navigation/index";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
const firebaseConfig = {
  apiKey: "AIzaSyCBrG5tApToOsrQBdOlFcwhcv70gw6jDCU",
  authDomain: "mealstogo-44d8f.firebaseapp.com",
  projectId: "mealstogo-44d8f",
  storageBucket: "mealstogo-44d8f.appspot.com",
  messagingSenderId: "78487242037",
  appId: "1:78487242037:web:62642f06cdda4d6d58387c",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [openSansLoaded] = useOpenSans({
    OpenSans_400Regular,
  });

  const [quicksandLoaded] = useQuickSand({
    Quicksand_400Regular,
  });
  if (!openSansLoaded || !quicksandLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
