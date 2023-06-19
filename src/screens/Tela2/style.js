import { StyleSheet } from 'react-native';

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    color:'#CDE0C9',
  },
  description: {
    alignItems: 'center',
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    color: '#FFFFFF',
  },
  text: {
    fontFamily: 'Poppins',
  },
});
