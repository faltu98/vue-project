<template>
  <h1>Chat</h1>
</template>

<script>
import {onMounted, reactive} from "vue";
import firebase from "../utilities/firebase";
export default {
setup(){
  const state = reactive({
    chats:{},
  });
  onMounted(async()=>{
    const db = firebase.database();
    const collection = db.ref("chats")
    console.log(db);
  })
}
}
</script>

<style>

</style>