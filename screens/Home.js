import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'lavender'} />
        <Image source={require('../assets/images/welcome1.png')} />
        <Text style={styles.text}>40k+ Premium Recipies</Text>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Recipes')}>
            <Text style={styles.btnName}>Let's Go</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    },
    btn: {
        backgroundColor: 'tomato',
        marginVertical: 20,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center'
    },
    btnName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 5
    }
})