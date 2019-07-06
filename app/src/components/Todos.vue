<template>
    <div>
           <h2>Todos</h2>
        <div class="todos">
            <div 
              @dblclick="onDbClick(todo)" 
              class="todo" 
              :class="{'is-complete':todo.completed}"
              v-bind:key="todo.id" 
              v-for="todo in allTodos">
                <!-- <ToDoItem v-bind:todo="todo" @del-ToDo="$emit('del-ToDo',todo.id)" />
                -->
                {{todo.title}}
                 
                <button @click="deleteTo(todo)" class="del_btn">x</button>
                 
            </div>

            <Modal v-if="modal.showModal" v-bind:msg="modal.modalMsg" />
        </div>
    </div>
</template>

<script>

import ToDoItem from './ToDoItem';

import Modal from './Modal'

//Vuex Getters and actions
import { mapGetters, mapActions } from 'vuex';



export default {
    name:'Todos',
    data(){
       return {
           showModal:true,
           modalMsg:'Task Deleted',
       }
    },
    methods:{
        ...mapActions(['fetchTodos', 'deleteTodo','updateTodo']),
        onDbClick(todo){
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }

            this.updateTodo(updTodo);
        },
        deleteTo(todo){
            const deleteObj = {
                id:todo.id,
                showModal:this.showModal,
                modalMsg:this.modalMsg
            }

            this.deleteTodo(deleteObj)
        }
    },
    computed:mapGetters(['allTodos','modal']),
    created(){
       this.fetchTodos();
    },
    components:{
        ToDoItem,
        Modal
    }
}
</script>

<style scoped>
 .todos {
     display:flex;
     flex-flow:wrap;
 }
 .todo {
     background:seagreen;
     color:#f0f0f0;
     padding:14px 18px;
     border-radius:8px;
     margin:10px 5px;
     cursor: pointer;
 }
 .del_btn{
     border:0;
     border-radius:50%;
     background:#e0e0e0b5;
     font-weight:bold;
     font-size:16px;
     margin: 0 5px;
 }
 .is-complete{
     background: #35495e;
     color:#fff;
 }
</style>




