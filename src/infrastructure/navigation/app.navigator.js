import React, { useContext } from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createMaterialBottomTabNavigator();

const Map = () => (
  <SafeArea>
    <Text>Maps</Text>
  </SafeArea>
);
const Restaurant = () => (
  <SafeArea>
    <Text>Restaurant</Text>
  </SafeArea>
);

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          initialRouteName="Restaurants"
          activeColor="#e91e63"
          inactiveColor="#bababa"
          barStyle={{ backgroundColor: "#fcfcfc" }}
        >
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsNavigator}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <Ionicons name="md-restaurant" size={21} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarLabel: "Maps",
              tabBarIcon: ({ color }) => (
                <Ionicons name="md-map" size={21} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsNavigator}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color }) => (
                <Ionicons name="md-settings" size={21} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
