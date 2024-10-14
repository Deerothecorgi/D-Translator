// components/PageStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerPlain: { flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 250
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 250,
  },
  svgBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  input: {
    height: 100,
    fontSize: 25,
    borderBottomWidth: 0,  // Set border width to 0
    borderColor: 'transparent',  // Set border color to transparent
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  inputRight: {
    height: 100,
    fontSize: 25,
    borderBottomWidth: 0,  // Set border width to 0
    borderColor: 'transparent',  // Set border color to transparent
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'right', // Align text to the right
    width: '100%',
  },
  tb1:{
    height: 100,
    fontSize: 25,
    borderColor: 'gray',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  tb2:{
    height: 100,
    fontSize: 25,
    borderColor: 'gray',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  replicatedContainer: {
    marginTop: 20,
    width: '80%',
  },
  replicatedInput: {
    height: 100,
    fontSize: 25,
    borderColor: 'gray',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  picker: {
    height: 50,
    width: '80%',
    marginBottom: 20,
  },
});

export default styles;
