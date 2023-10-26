import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { colors } from "../styles/styles";

const FavoritesCard = ({ item }) => {
  console.log(item, "ITEN");
  return (
    <View style={{ alignItems: "center", margin: 8 }}>
      <StatusBar backgroundColor={colors.color3} />
      <Text style={{ fontSize: 16, fontWeight: 600, marginBottom: 5 }}>
        {item.name}
      </Text>
      <Image
        source={{ uri: item.images[0]?.url }}
        style={{
          width: 135,
          height: 135,
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default FavoritesCard;
