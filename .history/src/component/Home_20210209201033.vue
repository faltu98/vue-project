<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message" class="w-full" :class="chat.userId === UserId ? 'text-right' : '' ">{{chat.message}}</div>
        </div>
        <div class="h-8 p-2">
          <input class="p-1 border rounded shadow" v-model="state.message" @keydown.enter="addMessage" placeholder="Start Typing...."/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import {useStore} from "vuex";
export default {
  setup(){
    const store = useStore();
    const User = computed(() => store.state.authUser);

    return {User}
  }
}
</script>

<style>

</style>