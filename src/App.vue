<template>
<div>
  <Navbar></Navbar>
  <router-view/>
</div>
</template>

<script>
import Navbar from './components/shared/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style>
@import './assets/base.css';
</style>
