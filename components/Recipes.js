import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { recList } from '../constants/Constant';

const Recipes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes</Text>
      <FlatList keyExtractor={item => item.id} data={recList} numColumns={2} renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {Item: item})} style={styles.card}>
                <Image style={styles.image} source={item.image} />
                <Text>{item.name}</Text>
                <Text>{item.time} | {item.rating}</Text>
            </TouchableOpacity>
      )}  />
    </View>
  )
}

export default Recipes

const styles = StyleSheet.create({
    container:{
        marginVertical: 16,
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    card: {
        backgroundColor: 'white',
        margin: 10,
        flex: 1,
        alignItems: 'center',
        borderRadius: 4
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'center' 
    }
})