export function getTodos (todos){
  return {
    type: 'GET_TODOS',
    payload: todos
  }
}

export function delTodo (id){
  return {
    type: 'DEL_TODO',
    id: id
  }
}

export function addTodo (todo){
  return {
    type: 'ADD_TODO',
    todo: todo
  }
}

export function updateTodo(todo){
  return {
    type: 'UPDATE_TODO',
    todo: todo
  }
}

