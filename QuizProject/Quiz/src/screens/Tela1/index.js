import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const TelaPrincipal = ({ navigation }) => {

    const handleComecarPress = () => {
        navigation.navigate('TelaQuest')
    }

return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem - Vindo ao History.io</Text>
        <Text style={styles.title}>Este é um pequeno QUIZ de História, veja o quanto você consegue acertar !</Text>
        <TouchableOpacity style={styles.button} onPress={handleComecarPress}>Começar</TouchableOpacity>
    </View>
)
}

export default TelaPrincipal;
