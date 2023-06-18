import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    opacity: 1,
    color: '#FFFFFF',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 1,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#26eaed',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
