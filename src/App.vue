<template>
<div>
  <Navbar></Navbar>
  <div 
  v-if="repositories.length > 0">
  <div class="row px-2">
  <UserCard  v-for="repo in repositories" :key="repo.id" :avatar="repo.avatar_url" :url="repo.url" :username="repo.login"></UserCard>
    
  </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';
import Navbar from './components/shared/Navbar.vue';
import UserCard from './components/UserCard.vue';

export default {
  components: {
    Navbar,
    UserCard
  },
  data(){
    return {
      repositories: [],
      errors: []
    }
  },

  async created(){
    try {
      const response = await axios.get(`https://api.github.com/users?page=1&per_page=10`)
      this.repositories = response.data
    } catch (e) {
      this.errors.push(e)
    }
  }
};
</script>

<style>
@import './assets/base.css';

#app {

}
</style>
