import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 

const SearchBar = () => {
  return (
    <View style={styles.container}>
            <FontAwesome name="search" size={20} color="tomato" />
            <TextInput style={styles.input} cursorColor={'black'} placeholder='Enter your fave recipe ...' />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'white',
        flexDirection: 'row',
        padding: 3,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 7
    },
    input: {
        marginLeft: 5
    }
})