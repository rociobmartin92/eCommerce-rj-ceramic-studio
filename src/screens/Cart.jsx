import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import Heading from '../components/Heading';
import { colors, defaultStyle } from '../styles/styles';
import { Button } from 'react-native-paper';
import CartItem from '../components/CartItem';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { orders } from './Orders';



const Cart = () => {
  const navigate = useNavigation();

const cartItems = useSelector(state => state.cartSlice.cartItems)

console.log(cartItems)

  const incrementHandler = (id, quantity, stock) => {
    console.log('incrementHandler', id, quantity, stock);
  };
  const decrementHandler = (id, quantity) => {
    console.log('decrementHandler', id, quantity);
  };

  return (

    <SafeAreaView style={{flex: 1}}>
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      <Header emptyCart={true} back={true} />
      {/* Heading  */}
      <Heading
        text1={'Carrito de'}
        text2={'Compras'}
        containerStyle={{ marginLeft: 35, paddingTop: 70, marginTop: 35 }}
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((item, index) => (
            <CartItem
              navigate={navigate}
              key={item._id}
              item={item}
              index={index}
            
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 35,
        }}
      >
        <Text> {cartItems.length} </Text>
        <Text>${cartItems[0].price} </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: colors.color3,
          borderRadius: 100,
          padding: 5,
          margin: 30,
        }}
        activeOpacity={0.9}
        onPress={
          cartItems.length > 0 ? () => navigate.navigate('confirmorder') : null
        }
      >
        <Button textColor={colors.color2} icon={'cart'}>
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default Cart;
