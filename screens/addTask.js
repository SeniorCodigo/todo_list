import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import * as Components from '../components/index';
import {useSelector, useDispatch} from 'react-redux';
import {create_task} from '../redux/action';
import * as Location from 'expo-location';


const AddTask = (props) => {
    //Hook para obtener el input de la tarea y el error
    const [task, setTask] = useState("");
    const [errorMsg, setErrorMsg]= useState("");

    //Con useSelector se obtiene el estado desde la store de Redux
    //Data se utiliza para enivarlo por toda la app como props
    const data = useSelector(state => state.tasks);
    //UseDispatch para enviar acciones a la store (create_task)
    const dispatch = useDispatch();


    //Obtener ubicación
    const getLocation = async () =>{
        let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }

        let location = await Location.getCurrentPositionAsync({});
        //Obtener hora     
        let dateObject = new Date()
        //Dispatcho y uso las acciones pasando los parametros correspondientes para crearla
        if (task){
            dispatch(create_task(task, location, true, dateObject))
        }else{
            alert("No ha introducido una tarea")
        }
        
    }

    return (  
        <SafeAreaView style={styles.container}>
            {/* --Bienvenido al creador de tareas--
                Se importaron todos los componentes 
                desde el index de la carpeta Components
            */}
            <View>
                <Text style={styles.text}>Ingresa la tarea</Text>
                <Components.Input
                    style={styles.input}
                    placeholder="Introduce una tarea"
                    onChange={(text)=>setTask(text.target.value)}
                />
                <Components.Button 
                    onPress={()=> getLocation()}
                    text="Agregar tarea"
                    color ="#3b83bd"    
                    disable={true}
                />
               <Components.List
                navigate={props}
                data={data}
                />
            </View>
        </SafeAreaView>
    );
}

export default AddTask;
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
       fontSize:40,
       textAlign: "center"
      },
  

  });