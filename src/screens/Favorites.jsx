import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { colors, defaultStyle, formHeading } from '../styles/styles';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { Headline } from 'react-native-paper';
import OrderItem from '../components/OrderItem';
import { useSelector } from 'react-redux';




const Favorites = () => {
  const loading = false;

const favorites = useSelector(state => state.favoritesSlice.favorites)

console.log("Favorites in Fav Screen", favorites)

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70, marginTop: 35 }}>
        <Text style={formHeading}>Mis Favoritos</Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View style={{ padding: 10, flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  index={index}
                  id={item._id}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderOn={item.createdAt.split('T')[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country}, ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: 'center' }}>No Order Yet</Headline>
            )} */}
          </ScrollView>
        </View>
      )}
    </View>
    </SafeAreaView>
  );
};

export default Favorites;
