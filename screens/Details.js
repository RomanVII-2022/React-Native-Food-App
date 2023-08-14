import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 

const Details = ({navigation, route}) => {

  const {Item} = route.params

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={24} color="tomato" />
        </Pressable>
        
        <Feather name="heart" size={24} color="tomato" />
      </View>
      <View style={styles.card}>
          <View style={styles.cardImage}>
            <Image style={styles.rdImg} source={Item.image} />
          </View>
          <View style={styles.description}>
            <Text style={styles.title}>{Item.name}</Text>
            <Text style={styles.desc}>{Item.description}</Text>
          </View>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender'
  }, 
  card: {
    flex: 1,
    marginTop: 250,
    backgroundColor: 'white',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: 'center'
  },
  cardImage: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: -100
  },
  rdImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  description: {
    marginTop: 100
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  desc: {
    paddingHorizontal: 10,
    marginVertical: 20
  }
})