<template>
  <nav class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 text-xl ">
    <router-link to="/home" class="mx-2">Home</router-link>
    <router-link to="/page" class="mx-2">Page</router-link>
    <button @click="$emit('op')" class="mx-2">Login</button>
  </nav>
</template>

<script>
export default {

}
</script>
