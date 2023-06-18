import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './style';

const TelaResult = ({ navigation, route }) => {
  const { score, totalQuestions } = route.params;
  const errors = totalQuestions - score;

  const handleRestartPress = () => {
    navigation.popToTop(); 
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
          <Text style={styles.title}>Parabéns! Você concluiu o quiz!</Text>
          <Text style={styles.description}>Perguntas: {totalQuestions}</Text>
          <Text style={styles.description}>Pontuação: {score}</Text>
          <Text style={styles.description}>Número de erros: {errors}</Text>
          <TouchableOpacity style={styles.button} onPress={handleRestartPress}>
            <Text style={styles.buttonText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default TelaResult;
