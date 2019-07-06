<template>
    <div class="addToDo">
        <form @submit="onSubmit">
            <input type="text" @keyup="checkEmpty" v-model="title" placeholder="Enter To-Do" class='add_to_do'>
            <input type="submit" Value="Add To-Do" class="add_btn"><br>
            <p class="err_msg" v-if="isEmpty">{{err_msg}}</p>
        </form>
    </div>
</template>

<script>

//Random Id Generator
import uuid from 'uuid';

//Vuex Actions
import  { mapActions } from 'vuex';

//Vuex Getters

import { mapGetters } from 'vuex';



export default {
    name:"AddToDo",
    data(){
        return {
            title:'',
            isEmpty:false,
            err_msg:'',
            taskPresent:false
        }
    },
    props:[],
    methods:{
        ...mapActions(['addTodo']),
        onSubmit(e){
            e.preventDefault();
            if(this.title == ''){
                this.isEmpty = true;
                this.err_msg = "Please Enter Valid Task"
            }  else if(this.title.length < 8){
                 this.isEmpty = true;
                 this.err_msg = 'Task Should be greater than 8 Keywords'
              } else {
                this.isEmpty = false
                this.err_msg ='';
                this.isEmpty = false;
                this.err_msg = '';
                this.addTodo(this.title);
            } 
        },
        checkEmpty(){
            if(this.title.length > 8){
                this.isEmpty = false;
                this.err_msg ='';
            } else {
                this.isEmpty =true;
                this.err_msg = 'Task Should be greater than 8 Keywords'
            }
        }
    //    addToDo(e){
    //        e.preventDefault()
    //        if(this.title == ''){
    //            this.isEmpty = true;
    //            this.err_msg = "Please Enter Something"
    //        } else {
    //            this.isEmpty = false;
    //            this.err_msg = ''
    //             const newToDo = {
    //                 id:uuid.v4(),
    //                 title:this.title,
    //                 isCompleted:false
    //             }
    
    //         //Send to parent element using emit event
    //         this.$emit('add-ToDo',newToDo)
    //        }
    //    }
    },
    computed:{
        ...mapGetters(['allTodos'])
    }
}
</script>

<style scoped>
     .add_to_do{
         border:none;
         padding:14px 8px;
         color:#8e8e8e;
         margin:10px 5px;
         border:2px solid #7e7e7e;
         border-radius:5px;
         /* box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28); */
         outline:none;
     }
     .add_btn{
         border:none;
         padding:15px 8px;
         background:#426ef4;
         color:#f0f0f0;
         margin:10px 5px;
         border-radius:5px;
         box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
         cursor:pointer
     }
     .err_msg{
         color:red;
         font-weight:normal;
         font-size:14px;
         margin:10px px;
     }
</style>


