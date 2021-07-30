import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
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
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
