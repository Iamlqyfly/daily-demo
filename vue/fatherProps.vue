
<template>
    <child :msg="message"></child>
</template>

<script>
import child from "./child.vue"
export default {
   components: {
        child
    },
    data () {
        return {
            message: 'father message'
        }
    }
}
</script>

<style>

</style>

