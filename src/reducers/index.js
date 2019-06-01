const INITIAL_STATE = {
  todos: []
}
function reducer(state=INITIAL_STATE, action){
  switch (action.type){
    case 'GET_TODOS':{
      return {
        ...state, todos: action.payload
      }
    }
    case 'DEL_TODO':{
      return{
        ...state, 
        todos: state.todos.filter((elem)=>{
            return elem.id !== action.id
        })
      }
    }
    case 'ADD_TODO':{
      return {
        ...state,
        todos: [
          ...state.todos, action.todo 
        ]
      }
    }
    case 'UPDATE_TODO':{
      
      const updatedTodos = state.todos.map((elem)=>{
          if (elem.id===action.todo.id){
            return action.todo
          }
            return elem

      });
      
      return {
        ...state,
        todos: updatedTodos
      }
    }

    default:return state
  }
}


export default reducer;