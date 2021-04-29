const initialState ={
    tasks: [],
};

//Se creo un caso reducer para CREATE, UPDATE Y DELETE
export const reducer = (state =  initialState, action) =>{
    console.log("type =>", action.type);

    switch(action.type){
        case 'CREATE_TASK':
            return {
            //Spredeas el estado original pasado y metes el estado actual en tasks
                ...state, 
                tasks: [...state.tasks, action.payload]
        };
        case 'UPDATE_TASK':{
            //Buscas por indice el estado que se va actualizar en el action.payload
            //Y se asigna a un nuevo array para ingresarlo a state
            const index = state.tasks.findIndex(task => task.id ==action.payload.id); 
            const newArray = [...state.tasks]; 
            newArray[index]=action.payload;
            return {
                ...state, 
                tasks: newArray, 
            };
        }
            //Se filtra el estado para eliminarlo y se asigna a tasks
        case 'DELETE_TASK':
            return {
              ...state,
              tasks: state.tasks.filter((task) => task.id !== action.payload.id)
            };
        default:
            return state;
    }

};