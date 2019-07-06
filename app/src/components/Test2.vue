<template>
    <div>
        <div >
            <h1>hello</h1>
            Id:{{$route.fullPath}}<br>
           
        </div>
        
        <!-- <h1>{{$route.fullPath}}</h1> -->

        <input v-model="search_text" @keyup="changeRoute()" type="text" >
    </div>
</template>

<script>
export default {
    name:'Test2',
    data(){
       return {
           search_text:''
       }
    },
    props:['id'],
    methods:{
        changeRoute(){
            
            // $route.push(id = this.search_text
            this.$route.params.id = this.search_text;
            location.href = `http://localhost:8080/#/test/${this.search_text}`
            // this.$route.fullPath = `/test/`+this.search_tex
        }
    }
}
</script>

