import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from '../styles/styles';

const ChangePassword = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const loading = false;

  const submitHandler = () => {
    alert('Yeah');
  };

  return (




    <SafeAreaView style={{flex: 1}}>
    <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70, marginTop: 35 }}>
        <Text style={formHeading}>Cambiar contraseña</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder='Antigua contraseña...'
          value={oldPassword}
          secureTextEntry={true}
          onChangeText={setOldPassword}
        />
        <TextInput
          {...inputOptions}
          placeholder='Nueva contraseña...'
          value={newPassword}
          secureTextEntry={true}
          onChangeText={setNewPassword}
        />

        <Button
          style={styles.btn}
          textColor={colors.color2}
          disabled={newPassword === '' || oldPassword === ''}
          onPress={submitHandler}
          loading={loading}
        >
          Actualizar
        </Button>
      </View>
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
    justifyContent: 'center',
    elevation: 10,
  },
  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginBottom: 10,
    alignSelf: 'flex-end',
    fontWeight: '100',
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 5,
  },
  or: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '100',
    color: colors.color2,
  },
  link: {
    color: colors.color2,
    alignSelf: 'center',
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
    textTransform: 'uppercase',
  },
});

export default ChangePassword;
