<template>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/page" class="mx-2">Page</router-link>
    <button v-if="!isLogedIn" @click="$emit('open-login-modal')" class="float-right mx-2">Log In</button>
    <button v-if="isLogedIn" @click="logout()" class="float-right mx-2">Log Out</button>
    <img data-src="" class="lazy"/>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  props : {
    authUser:On
    },
  methods:{
    logout(){
      firebase.auth().signOut()
      // .then((res) => {
      //   // Sign-out successful.
      //   console.log("res");
      // }).catch((e) => {
      //   // An error happened.
      //    console.log("e");
      // });
    }
  }

}
</script>
