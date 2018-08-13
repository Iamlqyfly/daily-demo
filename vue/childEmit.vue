<template>
    <button @click="handleClick">点我</button>
</template>

<script>
export default {
   props:{
       msg:{
           type:String,
           required: true
       }
   },
   methods: {
       handleClick(){
           this.$emit('msgFunc')
       }
   }
}
</script>

<style>

</style>
