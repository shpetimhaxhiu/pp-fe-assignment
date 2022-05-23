<template>
  <div class="container py-3">
    <h2 class="fs-1 py-4">Users list</h2>
    <div v-if="loadedUsers">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          class="col"
          v-for="(user, index) in loadedUsers.data"
          :key="user.id"
        >
          <UserCard
            :key="user.id"
            :avatar="user.avatar_url"
            :url="user.html_url"
            :username="user.login"
            :userId="index"
          ></UserCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserCard from ".././components/UserCard.vue";

export default {
  components: {
    UserCard,
  },
  name: "Users",
  computed: {
    ...mapGetters({ loadedUsers: "usersList" }),
  },

  methods: {
    ...mapActions(["updateUsersList", "removeUser"]),

    removeUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.loadedUsers.data.splice(id, 1);
      }
    },
  },

  created() {
    this.updateUsersList();
  },
};
</script>

<style>
</style>