import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Nick:</Text>
      </View>
      <Text style={styles.text}>miawe</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8a36df',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    background: '#4d4357',
    height: 20
  },
  title: {
    fontSize: 20,
    color: '#000000',
  },
  text: {
    color: 'white',
    fontSize: 18,
  }
});
