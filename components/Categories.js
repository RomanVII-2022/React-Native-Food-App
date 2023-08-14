import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { categories } from '../constants/Constant'

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                categories.map((category, index) => (
                    <View style={{margin: 10, borderRadius: 3, backgroundColor: index === 0 ? 'tomato': 'white',
                    shadowColor: "#000", shadowOffset: {width: 0, height: 4}, shadowOpacity: 0.1, shadowRadius: 2}} key={category.id}>
                        <Text style={{...styles.cardText, color: index === 0 ? 'white' : 'black'}}>{category.category}</Text>
                    </View>
                ))
            }
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        marginVertical: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    card: {
        margin: 10,
        borderRadius: 3,
    },
    cardText: {
        padding: 5,
        fontSize: 15,
        fontWeight: 'bold'
    }
})