/* @flow weak */

import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";
import { Favourite } from "../../../components/favourites/favourite.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  RestaurantCard,
  CardCover,
  CardContent,
  Rating,
  RatingSection,
  SectionEnd,
  Address,
  Icon,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <Favourite restaurant={restaurant} />
      <CardCover key={name} source={{ uri: photos[0] }} />

      <CardContent>
        <Text variant="heading">{name}</Text>

        <RatingSection>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={25} height={25} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon style={{ width: 20, height: 20 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </RatingSection>
        <Address>{address}</Address>
      </CardContent>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
