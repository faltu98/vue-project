<template>
  <h1>Chat</h1>
</template>

<script>
import {onMounted} from vue
export default {
setup(){
  onMounted(()=>{
    const db =firebase.database();
  })
}
}
</script>

<style>

</style>