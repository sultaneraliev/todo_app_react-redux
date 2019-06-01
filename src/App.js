import React from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
// import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {getTodos, delTodo, updateTodo, addTodo } from './actions';

class App extends React.Component {
 
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.props.getTodos(res.data)) 
  }


//Toggle Complete 
markComplete=(todo)=>{
  console.log(todo);
  axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    ...todo,
    completed: !todo.completed
  })
    .then(res => this.props.updateTodo(res.data));
}


//Delete todo 
delTodo = (id)=>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
.then(res=> this.props.delTodo(id))
;
}


//Add Todo
addTodo=(title) => {
 axios.post('https://jsonplaceholder.typicode.com/todos',{title,
completed: false })
  .then(res => this.props.addTodo(res.data));
  
}

  render (){ 
    return (
      <Router>
    <div className="App">
      <div className="container">
          <Header />
          <Route exact path="/" render ={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.props.todos} markComplete={this.markComplete} 
              delTodo={this.delTodo} />
            </React.Fragment>
          )} />
           <Route path="/about" component={About} />
      </div>
    </div>
    </Router>
  );
}
}


function mapStateToProps (state){
  return {
    todos: state.todos
  }
}

function mapDispatchToProps (dispatch){
  return {
    getTodos: (todos)=>dispatch(getTodos(todos)),
    delTodo: (id)=>dispatch(delTodo(id)),
    addTodo: (todo)=>dispatch(addTodo(todo)),
    updateTodo:(todo)=>dispatch(updateTodo(todo))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(App);

