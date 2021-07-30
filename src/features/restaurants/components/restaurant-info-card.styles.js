import styled from "styled-components/native";
import { View, StyleSheet, Image, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: #fff;
  margin: ${(props) => props.theme.space[2]};
  border-radius: 10px;
  overflow: hidden;
`;
export const CardCover = styled(Card.Cover)``;

export const CardContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Image)`
  width:20px;
  height20px;
`;

export const RatingSection = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} 0;
  justify-content: space-between;
`;

export const SectionEnd = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Address = styled(Text)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
