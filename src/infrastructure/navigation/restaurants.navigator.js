import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalTransition,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
