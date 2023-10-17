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
import {useGetProductsQuery, useGetCategoriesQuery} from "../services/productsApi"



const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigation();

 const {data: categories, isLoading, error} = useGetCategoriesQuery()
 const {data: products} = useGetProductsQuery()

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  console.log(products)

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
          <Heading text1={"Mira mis"} text2={"Trabajos"} />

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
            {categories && categories.map((item, index) => (
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
            {products && products.map((item, index) => {

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
