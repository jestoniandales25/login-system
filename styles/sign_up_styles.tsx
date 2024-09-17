import { StyleSheet } from 'react-native';

const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },  
  button: {
      marginTop: 16,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: 'black',
      width: 250,
      height: 50,
    },
  textHeader: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    marginBottom: 30,
  },
  signupInput: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 8,
    width: 300,
    borderRadius: 8,
  },
  textOut: {
    fontSize: 16,
    lineHeight: 21, 
    letterSpacing: 0.25,
    marginTop: 16,
    color: 'black',
  },
  textCallLogin: {
    paddingLeft: 10,
    textDecorationLine: 'underline',
    fontSize: 18,
    letterSpacing: 0.25,
    color: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default signupStyles;