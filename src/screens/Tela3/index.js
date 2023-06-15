import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TelaResult = ({ navigation, route }) => {
  const { score, totalQuestions } = route.params;

  const handleRestartPress = () => {
    navigation.popToTop(); 
  };

  return (
    <View>
      <Text>Parabéns! Você concluiu o quiz!</Text>
      <Text>Pontuação: {score}/{totalQuestions}</Text>
      <TouchableOpacity onPress={handleRestartPress}>
        <Text>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaResult;
