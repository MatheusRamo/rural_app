import { View } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { Button } from '../components/Button';
import { HeaderForm } from '../components/HeaderForm';

import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Select from '../components/Select';


const TeamForm = ({ navigation }) => {


  return (
    <>
      <HeaderForm title="Cadastro da Equipe" />
      <ScrollView>

      <Select text="Selecione o Motorista"/>

      <Select text="Selecione o Veiculo"/>
 
      <View style={styles.container}>
        <Button
          title="Proximo" onPress={() => navigation.navigate('TeamCondition')}
        />
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingTop: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 4,
    borderColor: '#E3E3E3',
    backgroundColor: "#1967FB",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 0.2,
    padding:10,
    margin:10,
  },
});

export default TeamForm;
