//Se asigna un nuevo idice y se suma 1 cada que se crea una nueva tarea
let nextTodoId = 0

//Acctión de crear con sus parametros que se pidieron en los requerimientos
export const create_task = (task, location, status, date) => ({
    type: 'CREATE_TASK',
    payload: {
        id: nextTodoId++,
        task: task,
        latitude: location.coords.latitude.toFixed(2),
        longitude: location.coords.longitude.toFixed(2),
        status: status,
        time: date.getHours()+":"+ date.getMinutes()
    }
})
//Sólo se necesita el id para la acción elminar
export const delete_task = (id) => ({
    type: 'DELETE_TASK',
    payload: {
        id: id
    }
    
})
//Acción para actualizar
export const update_task = (id, task, latitude,longitude, status, date) => ({
    type: 'UPDATE_TASK',
    payload: {
        id: id,
        task: task,
        latitude: latitude,
        longitude: longitude,
        status: status,
        time: date.getHours()+":"+ date.getMinutes()
    }
})
