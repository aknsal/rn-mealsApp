import React, { useState } from "react";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetailsScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <ScrollView>
      <RestaurantInfoCard restaurant={restaurant} />
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title="Egg Benedict" />
        <List.Item title="Sandwich" />
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      >
        <List.Item title="Dal Makhni" />
        <List.Item title="Shahi Panner" />
        <List.Item title="Mix Veg" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <List.Item title="Spaghetti Bolognese" />
        <List.Item title="Kadhai Paneer" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      >
        <List.Item title="Coke" />
        <List.Item title="Tea" />
        <List.Item title="Coffee" />
        <List.Item title="Fresh Juice" />
      </List.Accordion>
    </ScrollView>
  );
};
