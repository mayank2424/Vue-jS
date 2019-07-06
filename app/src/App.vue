<template>
  <div id="app">
      <Header />
      <transition name="moveInUp">         <router-view/>  </transition>
   
  </div>
</template>

<script>


// ToDolist Component
import Todos from './components/Todos';
//Header Component
import Header from './components/Header';
// Add To-Do Component
import AddToDo from './components/AddToDo';

//filter
import filterTodo from './components/filterTodo'

//Modal Component
import Modal from './components/Modal';

export default {
  name: 'app',
  components: {
     Todos,
     Header,
     AddToDo,
     Modal,
     filterTodo
  },
  data(){
      return {
          todos:[
              {
                  id:1,
                  title:"One",
                  isCompleted:false
              },
              {
                  id:2,
                  title:"Two",
                  isCompleted:true
              },
              {
                  id:3,
                  title:"Three",
                  isCompleted:false
              }
          ],
          isShown:false,
          emptyMsg:"",
          taskEmpty:'',
          todoEmpty:true
      }
  },
  methods:{
      deleteToDo(id){
          this.isShown = true;
          this.emptyMsg= "Task Deleted"
         this.todos =  this.todos.filter(todo => todo.id !== id)
      },
      addToDo(newToDo){
         
           this.todos = [...this.todos, newToDo]
        
      },
      closeModal(){
          this.isShown = false;
      },
      activateModal(empty){
          if(empty == '') {
              this.isShown =true;
             this.emptyMsg = "Please Enter Something"
          }
          
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
