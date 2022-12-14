<template>
    <div id="mainLayout">
        <navbar />
        <router-view />
    </div>    
</template>

<style scoped>

</style>

<script>
import Navbar from "@/components/navbar.vue"
export default {
    name: 'mainLayout',
    components:{
        Navbar
    }
}
</script>
