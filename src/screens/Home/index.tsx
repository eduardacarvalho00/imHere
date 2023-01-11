import { StatusBar } from 'expo-status-bar';
import {  Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  function handleParticipantAdd(){
    console.log('click');
    
  }
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.textData}>25 de janeiro de 2023</Text>
     
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}> 
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name='duda'/>
      <Participant name='leonardo'/>
    </View>
  );
}
