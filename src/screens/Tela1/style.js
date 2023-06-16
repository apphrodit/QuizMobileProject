import { StyleSheet } from 'react-native';

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: generateRandomColor(),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: generateRandomColor(),
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: generateRandomColor(),
  },
  button: {
    backgroundColor: generateRandomColor(),
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
