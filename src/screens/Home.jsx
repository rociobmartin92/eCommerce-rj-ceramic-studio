import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import FooterData from "../components/FooterData";
import {useGetProductsQuery, useGetCategoriesQuery, useGetFavoritesQuery} from "../services/productsApi"
import { usePutFavoritesMutation } from "../services/productsApi";
import { useDispatch } from "react-redux";
import { setFavoritesStore } from "../redux/slices/favoritesSlice";




const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigation();
  const [favorites, setFavorites] = useState([])
  const dispatch = useDispatch()

  const [putFavorites, result] = usePutFavoritesMutation()

  const {data: fav, isLoading, error, refetch} = useGetFavoritesQuery()

 const {data: categories} = useGetCategoriesQuery()
 const {data: products} = useGetProductsQuery()

console.log("fav", fav)

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id, stock) => {
    console.log("add to cart", id, stock);
  };

  const getFavorites = async () => {
    await putFavorites(favorites)
    dispatch(setFavoritesStore(favorites))
  }

useEffect(() => {  
getFavorites()

refetch()
}, [favorites])


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
            paddingTop: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Main Heading */}
          <Heading text1={"RJ Cerámica"} text2={"Nuestro trabajos"} />

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
                   setFavorites={setFavorites}
                   favorites={fav}
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
                setFavorites={setFavorites}
                favorites={favorites}
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
