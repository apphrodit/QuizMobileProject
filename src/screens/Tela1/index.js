import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './style';

const TelaPrincipal = ({ navigation }) => {
  const handleComecarPress = () => {
    navigation.navigate('TelaQuest');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/noite.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />
        <View style={styles.contentContainer}>
          <Text style={[styles.title, styles.text]}>Bem-vindo ao History.io</Text>
          <Text style={[styles.description, styles.text]}>
            Este é um pequeno QUIZ de História. Veja o quanto você consegue acertar!
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleComecarPress}>
            <Text style={[styles.buttonText, styles.text]}>Começar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TelaPrincipal;
