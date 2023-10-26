import { View, Text } from 'react-native'
import React from 'react'

const FooterData = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15}}>
    <Text style={{fontSize: 14, fontWeight: 500}}> owned: martinrocio.1992@gmail.com</Text>
    <Text style={{fontSize: 14,  fontWeight: 500}}> @2023</Text>
    </View>
  )
}

export default FooterData