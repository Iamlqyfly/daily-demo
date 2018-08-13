<template>
    <childEmit @msgFunc="func"></childEmit>
</template>

<script>
import  childEmit from "./childEmit.vue"
export default {
  components:{
     childEmit
  },
  methods:{
      func(msg){
          console.log(msg)
      }
  }
}
</script>

<style>

</style>
