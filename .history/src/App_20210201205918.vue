<template>
<AppNav />
  <p class="text-3xl">{{ title }}</p>
<home
<AppFooter/>
<LoginModal/>
</template>

<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
import Home from './pages/home.vue'
export default {
  components: {AppNav, AppFooter, LoginModalHome},
  name: 'App',
  data() {
    return {
      title: 'App'
    }
  }
}
</script>

<style>

</style>
