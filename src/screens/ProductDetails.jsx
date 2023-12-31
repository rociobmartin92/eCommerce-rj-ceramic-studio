import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { Avatar, Button } from "react-native-paper";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useSelector } from "react-redux";
import FooterData from "../components/FooterData";
import { setCartStore, setOrdersStore } from "../redux/slices/cartSlice";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};

const ProductDetails = ({ route }) => {
  const isCarousel = useRef(null);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()
  const productItem = useSelector((state) => state.productSlice.productItem);
const cartItems = useSelector(state => state.cartSlice.cartItems)


  const { name, price, stock, description, images } = productItem;

  console.log(stock);

  // const images = [
  //   {
  //     id: 1,
  //     url: 'https://assets.sutori.com/user-uploads/image/d2b2b74d-8c49-4089-b709-27b4ef8afb26/17a21af7c77dda3c92f78a623a49274c.jpeg',
  //   },
  //   {
  //     id: 2,
  //     url: 'https://cdn.pixabay.com/photo/2023/05/23/15/26/bengal-cat-8012976_1280.jpg',
  //   },
  //   {
  //     id: 3,
  //     url: 'https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg',
  //   },
  // ];

  const incrementQty = () => {
    if (quantity >= stock) return;

    setQuantity(() => quantity + 1);
  };
  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity(() => quantity - 1);
  };

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Disculpa, no hay stock",
      });
// console.log("PRODUCT ITEM", productItem)

const itemCarts = []

itemCarts.push(productItem)
dispatch(setCartStore(itemCarts))
    Toast.show({
      type: "success",
      text1: "El producto fue agregado al carrito",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.color3} />
      <View
        style={{
          ...defaultStyle,
          padding: 0,
          backgroundColor: colors.color1,
        }}
      >
        <Header back={true} />

        {/* carousel */}
        <View style={{ height: 60, marginTop: 10 }}></View>
        <Carousel
          layout="stack"
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          ref={isCarousel}
          data={images}
          renderItem={CarouselCardItem}
        />

        <View
          style={{
            backgroundColor: colors.color2,
            padding: 35,
            flex: 1,
            marginTop: -380,
            borderTopLeftRadius: 55,
            borderTopRightRadius: 55,
          }}
        >
          <Text numberOfLines={2} style={{ fontSize: 25 }}>
            {name}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "900" }}>${price}</Text>
          <Text
            style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
            numberOfLines={8}
          >
            {description}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ color: colors.color3, fontWeight: "100" }}>
              Cantidad
            </Text>
            <View
              style={{
                width: 80,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => decrementQty()}>
                <Avatar.Icon icon={"minus"} {...iconOptions} />
              </TouchableOpacity>
              <Text style={style.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQty}>
                <Avatar.Icon icon={"plus"} {...iconOptions} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={style.btn}
            activeOpacity={0.9}
            onPress={() => addToCartHandler()}
          >
            <Button icon={"cart"} textColor={colors.color2}>
              Añadir al carrito
            </Button>
          </TouchableOpacity>
        </View>
        <FooterData />
      </View>
    </SafeAreaView>
  );
};

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={style.container} key={index}>
      <Image source={{ uri: item.url }} style={style.image} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantity: {
    backgroundColor: colors.color4,
    width: 25,
    height: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export default ProductDetails;
