import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInput: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 16,
    width: 250,
    borderRadius: 8,
    height: 48
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
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textOut: {
    fontSize: 16,
    lineHeight: 21, 
    letterSpacing: 0.25,
    marginTop: 60,
    marginBottom: 16,
    color: 'black',
  },
  textCall: {
    paddingLeft: 10,
    textDecorationLine: 'underline',
    fontSize: 16,
    lineHeight: 21, 
    letterSpacing: 0.25,
    color: 'black',
  },
});

export default AppStyles;
