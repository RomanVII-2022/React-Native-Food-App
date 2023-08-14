import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Recipes from '../components/Recipes';

const RecipeList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Categories />
      <Recipes navigation={navigation} />
    </View>
  )
}

export default RecipeList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lavender',
        padding: 10
    }
})