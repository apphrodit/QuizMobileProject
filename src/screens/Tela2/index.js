import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TelaQuest = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'Qual é a capital do Brasil?',
      options: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
      correctAnswer: 1,
    },
    {
      question: 'Quem pintou a Mona Lisa?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      correctAnswer: 0,
    },
    {
        question: 'teste',
        options: ['testando', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        correctAnswer: 3,
      },   {
        question: 'Quem pintou a Mona Lisa?',
        options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        correctAnswer: 1,
      },   {
        question: 'Quem pintou a Mona Lisa?',
        options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        correctAnswer: 1,
      },   {
        question: 'Quem pintou a Mona Lisa?',
        options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        correctAnswer: 1,
      },
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {   
      navigation.navigate('TelaResult', { score, totalQuestions: questions.length });
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <View>
      <Text>Pergunta {currentQuestion + 1}</Text>
      <Text>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => handleAnswer(index)}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TelaQuest;
