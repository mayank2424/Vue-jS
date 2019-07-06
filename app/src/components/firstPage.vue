<template>
    <div>
        <AddToDo />
       <filterTodo />
     <Todos />
    </div>
    
</template>


<script>

import Modal from './Modal';
import TodoItem from './ToDoItem';
import Todos from './Todos';
import AddToDo from './AddToDo';
import filterTodo from './filterTodo';

export default {
    name:'firstPage',
    components:{
        Modal,
        Todos,
        AddToDo,
        filterTodo
    }
}
</script>
