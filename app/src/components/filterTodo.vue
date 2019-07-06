<template>
    <div class="filter_box">
        Filter Tasks
         <select @change="filter('num', $event)" class="filter">
             <option value="200">200</option>
             <option value="100">100</option>
             <option value="50">50</option>
             <option value="20">20</option>
             <option value="5">5</option>
         </select>

        <div>
            Filter With Complete & Incomplete
         <select @change="filter('completion',$event)">
             <option value="completed">Completed</option>
             <option value="Incompleted">Incompleted</option>
         </select>
        </div>
         
    </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
    name:'filterTodo',
    methods: {
        ...mapActions(['filterTodos']),
         filter(type,event){
             if(type == 'num'){
                 console.log('its num')
                 const filterObj = {
                     f_type:'num',
                     e: event
                 }
                 this.filterTodos(filterObj)
                
             } else {
                 const filterObj = {
                    f_type: 'completion',
                    e: event
                 }
                 this.filterTodos(filterObj)
                
             }

         }
    }
}
</script>

<style scoped>
  .filter{
      border:0;
      padding:4px 16px;
      background:#f0f0f0;
       box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
      border-color: rgba(223,225,229,0);
      font-size:16px;
      margin:0 10px;
  }
</style>
