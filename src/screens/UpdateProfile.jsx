import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from "../styles/styles";
import { useDispatch } from "react-redux";
import {
  setAddress,
  setCity,
  setCountry,
  setEmail,
  setName,
  setPinCode,
} from "../redux/slices/userSlice";

const UpdateProfile = ({navigation}) => {
  const [userEmail, setuserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userPinCode, setUserPinCode] = useState("");
  const dispatch = useDispatch();

  const loading = false;

  const submitHandler = () => {
    dispatch(setEmail(userEmail));
    dispatch(setName(userName));
    dispatch(setCity(userCity));
    dispatch(setAddress(userAddress));
    dispatch(setCountry(userCountry));
    dispatch(setPinCode(userPinCode));
    alert("Tus datos han sido actualizados correctamente!");
    navigation.navigate("profile")
  };

  const disableBtn =
    !userName ||
    !userEmail ||
    !userAddress ||
    !userCity ||
    !userCountry ||
    !userPinCode;

  return (
    
    <SafeAreaView style={{flex: 1}}>
    <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
      
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70, marginTop: 35 }}>
        <Text style={formHeading}>Editar Perfil</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <View>
          <TextInput
            {...inputOptions}
            placeholder="Nombre"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput
            {...inputOptions}
            placeholder="Email"
            value={userEmail}
            onChangeText={setuserEmail}
            keyboardType="email-address"
          />
          <TextInput
            {...inputOptions}
            placeholder="Dirección"
            value={userAddress}
            onChangeText={setUserAddress}
          />
          <TextInput
            {...inputOptions}
            placeholder="Ciudad"
            value={userCity}
            onChangeText={setUserCity}
          />
          <TextInput
            {...inputOptions}
            placeholder="País"
            value={userCountry}
            onChangeText={setUserCountry}
          />

          <TextInput
            {...inputOptions}
            placeholder="Código Postal"
            value={userPinCode}
            onChangeText={setUserPinCode}
          />

          <Button
            style={styles.btn}
            textColor={colors.color2}
            disabled={disableBtn}
            onPress={submitHandler}
            loading={loading}
          >
            Actualizar
          </Button>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },

  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 5,
  },
  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
    color: colors.color2,
  },
  link: {
    color: colors.color2,
    alignSelf: "center",
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
    textTransform: "uppercase",
  },
});

export default UpdateProfile;
