import React from 'react';
import {Text, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width} = Dimensions.get("screen");

const Button  = (props) => {
    return (
        <TouchableOpacity 
        style={{
            backgroundColor: props.color ,
            padding: 10,
            borderWidth: 0,
            width: width/1.1,
            alignItems: "center",
            borderRadius: 20,
          }
        }
        onPress={props.onPress}
        >
            <Text style={{fontSize:18, color: "white"}}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

export default Button ;
