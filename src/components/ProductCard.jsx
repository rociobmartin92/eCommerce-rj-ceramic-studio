import { View, Image, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Button } from "react-native-paper";
import { setProduct } from "../redux/slices/productSlice";
import { useDispatch } from "react-redux";
import { Entypo } from '@expo/vector-icons'; 


const ProductCard = ({ stock, item, addToCartHandler, i, navigate }) => {
  const { category, name, price, images, _id } = item;
const dispatch = useDispatch()

  const handleOnPressProduct = () => {
   dispatch(setProduct(item))
    navigate.navigate("productdetails", { _id })
  }
  return (
    <TouchableOpacity
      onPress={() => handleOnPressProduct()}
      activeOpacity={1}
    >
      <View
        style={{
          zIndex: 1,
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
        }}
      >
        <Pressable style={{position: "absolute", top:10, right: 15, zIndex: 2}}>
        <Entypo name="heart-outlined" size={24} color={ i % 2 === 0 ? colors.color2 : colors.color3} />
        </Pressable>
        <Image
          source={{ uri: images[0]?.url }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            marginTop: 36
            // position: "absolute",
            // left: 50,
            // top: 105,
          }}
        />

        {/* <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            width: "100%",
            // alignItems: 'center',
          }}
        > */}
          <Text
            // numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 22,
              fontWeight: "300",
          paddingHorizontal: 10
            }}
          >
            {name}
          </Text>
          {/* <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            ${price}
          </Text> */}
        {/* </View> */}
        <TouchableOpacity
          style={{
            backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            width: "100%",
            borderBottomEndRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <Button
            textColor={i % 2 === 0 ? colors.color1 : colors.color2}
            onPress={() => addToCartHandler(id, stock)}
          >
            Ver más
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
