import { View, Text, ScrollView, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { colors, defaultStyle, formHeading } from '../styles/styles';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { Headline } from 'react-native-paper';
import FavoritesCard from '../components/FavoritesCard';
import { useGetFavoritesQuery } from '../services/productsApi';



const Favorites = () => {

const {data, isLoading, error} = useGetFavoritesQuery()

console.log("DATA", data)

console.log("IS LOADING", isLoading)

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70, marginTop: 35 }}>
        <Text style={formHeading}>Mis Favoritos</Text>
      </View>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={{ padding: 10, flex: 1 }}>
          <View showsVerticalScrollIndicator={false}>
            {data ? (
              // data.map((item, index) => (
              //   <FavoritesCard item={item} />
              // ))
              <FlatList
              data={data}
              numColumns={2}

              renderItem={({item}) => <FavoritesCard item={item} />}
              />
            ) : (
              <Headline style={{ textAlign: 'center' }}>No tienes favoritos</Headline>
            )}

          </View>
        </View>
      )}
    </View>
    </SafeAreaView>
  );
};

export default Favorites;
