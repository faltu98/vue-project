<template>
<AppNav />
<div class="">
<router-view></router-view>
</div>
<AppFooter/>
<LoginModal/>
</template>

<script>
import AppNav from './component/AppNav'
import AppFooter from './component/AppFooter'
import LoginModal from './component/LoginModal'
export default {
  components: {AppNav, AppFooter, LoginModal},
  data() {
    return {
      title: 'App'
    }
  }
}
</script>

<style>

</style>
