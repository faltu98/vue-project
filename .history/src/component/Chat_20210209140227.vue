<template>
  <h1>Chat</h1>
</template>

<script>
import {onMounted, reactive} from "vue";
import firebase from "../utilities/firebase";
export default {
setup(){
  onMounted(as()=>{
    const db = firebase.database();
    console.log(db);
  })
}
}
</script>

<style>

</style>