<template>
  <div id="app">
    <component :is="layout">
    </component>
  </div>
</template>

<style lang="scss">
</style>

<script>
import mainLayout from '@/layouts/mainLayout.vue'
import emptyLayout from '@/layouts/emptyLayout.vue'

export default {
  computed:{
    layout(){
      // console.log(this.$route.meta.layout);
      return (this.$route.meta.layout)+'-layout';
    }
  },
  components:{
    mainLayout,
    emptyLayout
  }
  
}
</script>

