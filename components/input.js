import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get("screen");


const Input  = (props) => {
    return (
        <View style={{marginVertical:15, alignItems:"center"}}>
            <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            onChange={props.onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
      borderColor: '#555',
      borderWidth: 1,
      padding: 10,
      width: width/1.1,
      borderRadius: 20,
      textAlign:'center'
    },
  });
export default Input ;
