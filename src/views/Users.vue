<template>
  <div class="container py-3">
    <h2 class="fs-1 py-4">Users list</h2>
    <div v-if="repositories.length > 0">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="repo in repositories" :key="repo.id">
          <UserCard
            :key="repo.id"
            :avatar="repo.avatar_url"
            :url="repo.url"
            :username="repo.login"
          ></UserCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserCard from "@/components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  name: "Users",
  data() {
    return {
      repositories: [],
      errors: [],
    };
  },

  async created() {
    try {
      const response = await axios.get(
        `https://api.github.com/users?page=1&per_page=10`
      );
      this.repositories = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>

<style>
</style>