import Vue from 'vue';
import Router from 'vue-router';

//components import
import firstPage from '../components/firstPage.vue';
import Test from '../components/Test.vue';
import Test2 from '../components/Test2.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            name:'firstPage',
            component:firstPage,
        },
        {
            path:'/test',
            name:'Test',
            component:Test,
            children:[
                {
                    path:':id',
                    name:'Test2',
                    props:true,
                    component:Test2
                }
            ]
        },
        
    ]
})