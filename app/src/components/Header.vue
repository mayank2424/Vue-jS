<template>
    <div class="header">
        <router-link to="/">Back To Home</router-link>
        <router-link :to="{ name:'Test2', params:{id: 24324}}">Go</router-link>
        <h3>To-Do-List</h3>
    </div>
</template>

<script>
export default {
    name:'Header',

}
</script>

<style scoped>

.header{
    background:#2e2e2e;
    text-align:center;
    font-weight:bold;
    color:#f0f0f0;
    padding:3px;
}

</style>

