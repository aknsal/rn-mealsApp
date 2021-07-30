/* @flow weak */

import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import {
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
