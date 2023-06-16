import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import questions from '../../../mocks/question';

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
    <View>
      <Text>Pergunta {currentQuestion + 1}</Text>
      <Text>{questions[currentQuestion].pergunta}</Text>
      {questions[currentQuestion].respostas.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswer(opcao.status)}
        >
          <Text>{opcao.resp}</Text>
        </TouchableOpacity>
      ))}
    </View>
  ); 
};

export default TelaQuest;
