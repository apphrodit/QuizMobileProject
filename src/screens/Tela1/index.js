import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const TelaPrincipal = ({ navigation }) => {
  const handleComecarPress = () => {
    navigation.navigate('TelaQuest');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao History.io</Text>
      <Text style={styles.description}>
        Este é um pequeno QUIZ de História. Veja o quanto você consegue acertar!
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleComecarPress}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TelaPrincipal;
