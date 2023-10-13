import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  { category: "makeup", _id: 1 },
  { category: "skincare", _id: 2 },
  { category: "fragance", _id: 3 },
  { category: "accessories", _id: 4 },
];
export const products = [
  {
    _id: 1,
    name: "Labial Líquido Maybelline Superstay",
    category: 1, // id of category
    price: 199,
    stock: 12,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_925767-MLU70461698120_072023-F.webp",
      },
    ],
  },
  {
    _id: 2,
    name: "Labial Revlon Colorstay Matte",
    category: 1,
    price: 23,
    stock: 1,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_668120-MLA54288440381_032023-F.webp",
      },
    ],
  },
  {
    _id: 3,
    name: "Crema Light La Roche-Posay",
    category: 2,
    price: 1654,
    stock: 3,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_973037-MLA54894429099_042023-F.webp",
      },
    ],
  },
  {
    _id: 4,
    name: "Avene Dermabsolu Bálsamo De Noche",
    category: 2,
    price: 19,
    stock: 6,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_899729-MLA51602569122_092022-F.webp",
      },
    ],
  },
  {
    _id: 5,
    name: "Dior Jadore EDP 100 ml",
    category: 3,
    price: 199,
    stock: 10,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_706785-MLA45824998631_052021-F.webp",
      },
    ],
  },
  {
    _id: 6,
    name: "Scrunchie Satén Seda",
    category: 4,
    price: 99,
    stock: 16,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_2X_948098-MLA51004196823_082022-F.webp",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id, stock) => {
    console.log("add to cart", id, stock);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={{ ...defaultStyle, flex: 1 }}>
        {/* Header */}
        <Header />

        {/* Heading row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Main Heading */}
          <Heading text1={"Our"} text2={"Products"} />

          {/* Searchbar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color="gray"
                size={50}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category.toUpperCase()}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => {

            //  console.log("Item selected", item.category)
            //  console.log("Category selected", category)


             if (category === item.category ) {
               return (
                 <ProductCard
                   key={item._id}
                   i={index}
                  //  category={item.category}
                  //  name={item.name}
                  //  price={item.price}
                  //  image={item.images[0]?.url}
                  item={item}
                   addToCartHandler={addToCartHandler}
                   navigate={navigate}
                   stock={item.stock}
                 />
               )
             }
            })}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
