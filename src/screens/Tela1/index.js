import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TelaPrincipal = ({ navigation }) => {
  const handleComecarPress = () => {
    navigation.navigate('TelaQuest');
  };

  return (
    <View>
      <Text>Bem-vindo ao History.io</Text>
      <Text>Este é um pequeno QUIZ de História. Veja o quanto você consegue acertar!</Text>
      <TouchableOpacity onPress={handleComecarPress}>
        <Text>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaPrincipal;
