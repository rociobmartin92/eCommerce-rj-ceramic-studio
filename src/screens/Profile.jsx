import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors, defaultStyle, formHeading } from '../styles/styles';
import { Avatar, Button } from 'react-native-paper';
import ButtonBox from '../components/ButtonBox';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import FooterData from '../components/FooterData';




const logoutHandler = () => {
  console.log('sign out');
};



const Profile = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState(null);
  const loading = false;


const email = useSelector(state => state.userSlice.email)
const name = useSelector(state => state.userSlice.name)


  const navigateHandler = (text) => {
    switch (text) {
      case 'Admin':
        navigation.navigate('adminpanel');
        break;
      case 'Ordenes':
        navigation.navigate('orders');
        break;
      case 'Favoritos':
        navigation.navigate('favorites');
        break;
      case 'Perfil':
        navigation.navigate('updateprofile');
        break;
      case 'Contraseña':
        navigation.navigate('changepassword');
        break;
      case 'Salir':
        logoutHandler();
        break;

      default:
        navigation.navigate('orders');
        break;
    }
  };
  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params?.image);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 50 }}>
          {/* <Text style={formHeading}>Profile</Text> */}
        </View>

        {/* Loading */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{
                  uri: avatar,
                }}
                size={100}
                style={{ backgroundColor: colors.color1 }}
              />

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('camera', { updateProfile: true })
                }
              >
                <Button textColor={colors.color2}>Cambiar Foto</Button>
              </TouchableOpacity>

              <Text style={styles.name}>{name ? name : "Nombre Apellido"}</Text>
              <Text
                style={{
                  fontWeight: '300',
                  color: colors.color2,
                }}
              >
                {email ? email : "email"}
              </Text>
            </View>

            <View style={styles.boxButton}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  justifyContent: 'space-between',
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={'Ordenes'}
                  icon={'format-list-bulleted-square'}
                />
                <ButtonBox
                  handler={navigateHandler}
                  icon={'view-dashboard'}
                  text={'Admin'}
                  reverse={true}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={'Perfil'}
                  icon={'pencil'}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={'Contraseña'}
                  icon={'pencil'}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={'Favoritos'}
                  icon={'star'}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={'Salir'}
                  icon={'exit-to-app'}
                />
              </View>
            </View>
          </>
        )}
      </View>

      <Footer />
      <FooterData />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    color: colors.color2,
  },
  boxButton: {
    marginTop: 10
  }
});

export default Profile;
