import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import FooterData from "../components/FooterData";

const categories = [
  { category: "tazas", _id: 1 },
  { category: "platos", _id: 2 },
  { category: "mates", _id: 3 },
  { category: "masetas", _id: 4 },
];
export const products = [
  {
    _id: 1,
    name: "Taza Lorem Ipsum",
    category: 1, // id of category
    price: 199,
    stock: 12,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://i.pinimg.com/originals/70/cc/61/70cc61e9812a8bb148ee68eef39cddb7.jpg",
      },
    ],
  },
  {
    _id: 2,
    name: "Taza Sunshine",
    category: 1,
    price: 23,
    stock: 1,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://www.nomadbubbles.com/wp-content/uploads/taza-cafe-ceramica-blanca.jpg",
      },
    ],
  },
  {
    _id: 3,
    name: "Plato roble y blanco",
    category: 2,
    price: 1654,
    stock: 3,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_738022-MLA53444936380_012023-O.webp",
      },
    ],
  },
  {
    _id: 4,
    name: "Plato Bálsamo De Noche",
    category: 2,
    price: 19,
    stock: 6,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://http2.mlstatic.com/D_NQ_NP_753904-MLA53444886993_012023-O.webp",
      },
    ],
  },
  {
    _id: 5,
    name: "Mate Lamore",
    category: 3,
    price: 199,
    stock: 10,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://d2r9epyceweg5n.cloudfront.net/stores/001/546/478/products/matescera1-021374837e5b7b22d416254880278192-1024-1024.jpeg",
      },
    ],
  },
  {
    _id: 6,
    name: "Maceta beige y blanco",
    category: 4,
    price: 99,
    stock: 16,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem neque quidem ratione?",
    images: [
      {
        url: "https://acdn.mitiendanube.com/stores/001/652/601/products/fotomontajes-productos-casa_selvatica-maceta-combinada-arena-con-plato-11-563ace0dbc2e7a26fe16331021363223-640-0.jpg",
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
  
    <SafeAreaView style={{flex: 1}}>
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
          <Heading text1={"Nuestros"} text2={"Trabajos"} />

          {/* Searchbar */}
          {/* <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                color="gray"
                size={50}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View> */}
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
             if (!category) {
              return (
                <ProductCard
                  key={item._id}
                  i={index}
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
      <FooterData />
    </SafeAreaView>

  );
};

export default Home;
