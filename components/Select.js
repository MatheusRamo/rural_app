
import { StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

export function Select({options, onChangeSelect, text}) {
    const [txt, setTxt] = useState(text)

    return (
        <TouchableOpacity style={styles.container}>
        <Text>{txt}</Text>
        <AntDesign name="down" size={24} color="black" />
      </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
      height: 40,
      backgroundColor: 'F8F9FA',
      paddingHorizontal: 20,
      marginHorizontal: 20,
      fontSize: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderRadius: 8,
    }
  });