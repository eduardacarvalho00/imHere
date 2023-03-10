import { useState } from 'react';
import {  Alert, Button, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');
  

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
     return Alert.alert('Participante existe', 'Já existe um participante com esse nome')
    };
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  };

  function handleParticipantRemove(name : string){
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>  setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  };
  const date = new Date()
  console.log(date.toLocaleDateString())
  const dateFormat = date.toLocaleDateString()

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.textData}>{dateFormat}</Text>
     
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}> 
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />


    </View>
  );
}
