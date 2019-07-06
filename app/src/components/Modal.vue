<template>
    <div class="modal">

        <p>{{msg}}
            <button class="close"  @click="close()">x</button>
        </p>
    </div>
</template>

<script>
    //actions and getters
    import { mapActions } from 'vuex';
import { setTimeout } from 'timers';
export default {

    name:'Modal',
    data(){
      return {
          showModal: false,
          modalMsg: ''
      }
    },
    props:['msg'],
    methods:{
        ...mapActions(['closeModal']),
        close(){
            const modalObj = {
                showModal: this.showModal,
                modalMsg: this.modalMsg
            }

            this.closeModal(modalObj)
        }
    },
    mounted(){
        console.log('Modal Showing')
        setTimeout(this.close,2000)
    }
}
</script>


<style scoped>
   .modal{
       background:#ca2323;
       color:#f0f0f0;
       border-radius:5px;
       position:fixed;
       right:3%;
       top:12%;
       padding:6px 14px;
       display:inline-block;
       font-size:14px;
       transition:0.5s all ease-out;
   }
   .close{
        border: 0;
        border-radius: 50%;
        background: transparent;
        color: #c5bfbfe8;
        font-weight: bold;
        font-size: 16px;
        cursor:pointer;
   }
</style>


