<template>
  <h1>Chat</h1>
</template>

<script>
import {onMounted, re} from "vue";
import firebase from "../utilities/firebase";
export default {
setup(){
  onMounted(()=>{
    const db = firebase.database();
    console.log(db);
  })
}
}
</script>

<style>

</style>