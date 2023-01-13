import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#0D2231',
    padding: 24,
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    color: '#5DD46B',
  },
  textData: {
    color: '#8C99A2',
    fontSize: 18,
  },
  input: {
    flex: 1,
    backgroundColor: '#8C99A2',
    height: 56,
    borderRadius: 5,
   
    padding: 10,
    fontSize: 18,
    marginRight: 7,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#5DD46B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 26,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmpty: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  },
});