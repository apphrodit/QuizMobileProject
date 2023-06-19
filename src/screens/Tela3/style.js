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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#CDE0C9',
  },
  description: {
        fontSize: 16,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#CDE0C9',
    padding: 20,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius:30,
    alignSelf: 'center',
    marginTop: 85,
    marginBottom: 45,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C6975',
  },
});
