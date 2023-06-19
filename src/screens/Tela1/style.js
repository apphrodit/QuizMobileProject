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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    opacity: 1,
    color: '#CDE0C9',
    marginTop: 20
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    opacity: 1,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#CDE0C9',
    padding: 20,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 85,
    marginBottom: 45,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C6975',
  },
  text: {
    fontFamily: 'Poppins',
  },
});
