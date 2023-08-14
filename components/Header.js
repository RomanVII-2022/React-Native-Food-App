import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hi John</Text>
      <Feather name="bell" size={27} color="tomato" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userName: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})