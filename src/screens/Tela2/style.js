import { StyleSheet } from 'react-native';

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Certifique-se de que o container ocupe todo o espaço da tela
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    flex: 1, // Certifique-se de que o conteúdo também ocupe todo o espaço da tela
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    color: '#FFFFFF',
  },
  description: {
        fontSize: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#26eaed',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  text: {
    fontFamily: 'Poppins', 
  },
});
