import React, {useState} from 'react';
import {Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, SafeAreaView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {delete_task} from '../redux/action';
import * as Components from './index'
const {width} = Dimensions.get("screen");

const List  = (props) => {  
    //Creo hook para cambiar de  color y estado con un booleano
    const [showStatus, setShowStatus]=useState(false);
    //UseDispatch para enviar acciones a la store (delete_task)
    const dispatch = useDispatch();

    return (
        <SafeAreaView >
            <View style={{height: 10}}/>
              <Components.Button
                //Cambio de colores con ShowStatus
                text= {showStatus ? "Mostrar tareas por": "Mostrar tareas completadas"}
                color= {showStatus ? "#3b83bd": "green"}
                onPress={()=> setShowStatus(showStatus==false ? true:false)}
            />
            {/*Lista de todas las tareas */}
            <FlatList
                //Filtro las tarea en el flatlist dependiendo del estatus
                data={showStatus===true ? props.data.filter((item) => item.status==false): props.data.filter((item) => item.status==true) }
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=>(
                    <TouchableOpacity>
                        <View>
                        <Text 
                            key={item.id} 
                            style={styles.item}
                        >
                            Tarea: {item.task}
                            {'\n'}
                            Latitud: {item.latitude}
                            {'\n'}
                            Longitude: {item.longitude}
                            {'\n'}
                            Tiempo: {item.time}
                            {'\n'}
                            {item.status==true ? "Por hacer" : "Terminada"}
                            </Text>
                        <Components.Button
                            onPress={()=>dispatch(delete_task(item.id))}
                            text="Borrar"
                            color="red"
                        />
                        <View style={{height: 10}}/>
                        <Components.Button
                            onPress={()=>props.navigate.navigation.navigate("update", {item})}
                            text="Actualizar"
                            color="purple"
                        />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#3b83bd',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 32,
        width: width/1.1,
      },
  });
export default List ;
