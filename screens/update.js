import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Components from '../components/index';
import {update_task} from '../redux/action';

const Update = (props) => {
  //Hook para agarrar el item 
  const [task, setTask] = useState("");
  //UseDispatch para enviar acciones a la store (update_task)
  const dispatch = useDispatch();

  //Se obtine como params desde el promos de navigate del componente list
  const item = props.route.params.item
  //Hook para status y actualizar
  const [showStatus, setShowStatus]= useState(item.status);
  //Se crea un objeto para la hora de la modificación
  let dateObject = new Date();
    return (  
        <View style={styles.container}>
          <Text style={styles.text}>Modificar tarea</Text>
          <Components.Input
            style={styles.input}
            placeholder={item.task}
            onChange={(text)=>setTask(text.target.value)}
          />
        <Components.Button
          onPress={()=>setShowStatus(!showStatus ? true:false) }
          text= {showStatus ? "Activar tarea completada": "Activar tarea activa"}
          color= {showStatus ? "#3b83bd": "green"}
        />
        <View style={{height: 10}}/>
        <Components.Button 
            onPress={()=> dispatch(update_task(item.id, task, item.latitude, item.longitude ,showStatus, dateObject))}
            text="Actualizar"
            color = "#3b83bd"    
        />
        <View style={{height: 10}}/>
        <Components.Button
          onPress={()=>props.navigation.navigate("addTask")}
            text="Ir a ingresar tareas"
            color="#3b83bd"
        />

        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      backgroundColor: '#3b83bd',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      fontSize: 32,
    },
    text: {
      fontSize:40,
      textAlign: "center"
     },

  });
export default Update;