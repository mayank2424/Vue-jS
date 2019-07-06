<template>
    <div class="todo-item" v-bind:class="{'is-completed':todo.isCompleted}">
        <p style="width:100%">
            <input type="checkbox" v-bind:checked="todo.isCompleted" @change="markComplete">
            {{todo.title}}
            
            <button class="del" @click="$emit('del-ToDo', todo.id)">x</button>    
        </p>
    </div>
</template>

<script>
export default {
    name:"ToDoItem",
    props:["todo"],
    methods:{
        markComplete:function(){
            this.todo.isCompleted =  !this.todo.isCompleted
        }
    }
}
</script>


<style scoped>
.todo-item{
    background:'#f5f5f5';
    padding:1px 20px;
    margin: 15px 0;
    border: 1px solid #dfe1e5;
    border-radius:10px;
    box-shadow:0 2px 2px 4px solid #f7f7f7;
    display:flex;
    flex-flow:row;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
    border-color: rgba(223,225,229,0);
}

.is-completed{
    text-decoration: line-through;
}

.del{
    background: red;
    color:#f0f0f0;
    border-radius:50%;
    border:none;
    padding:4px 8px;
    float:right;
    font-size:16px;
    font-weight:bold;
}
</style>