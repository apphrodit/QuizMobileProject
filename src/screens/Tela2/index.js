import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import questions from '../../../mocks/question';
import { styles } from './style';

const TelaQuest = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === true) {
      setScore(score + 1);
    }
  
    if (currentQuestion === questions.length - 1) {
      navigation.navigate('TelaResult', { score: score + (selectedOption ? 1 : 0), totalQuestions: questions.length });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
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
          <Text style={[styles.title, styles.text]}>
            Pergunta {currentQuestion + 1}
          </Text>
          <Text style={[styles.description, styles.text]}>
            {questions[currentQuestion].pergunta}
          </Text>
          {questions[currentQuestion].respostas.map((opcao, index) => (
            <TouchableOpacity style={[styles.description, styles.text]}
              key={index}
              onPress={() => handleAnswer(opcao.status)}
            >
              <Text style={[styles.description, styles.text]}>{opcao.resp}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  ); 
};

export default TelaQuest;
