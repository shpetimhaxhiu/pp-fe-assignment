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
    <div v-if="!loaded" class="d-flex flex-column text-center justify-content-center p-5">
        <div><p>There are users loaded</p></div>
        <div class="w-20">
            <button type="button" @click="updateUsersList()" class="btn btn-primary w-20">Get users</button>
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
    ...mapGetters({ loadedUsers: "usersList", loaded: "haveUsers" }),
  },

  methods: {
    ...mapActions(["updateUsersList", "removeUser", "setUnloaded"]),

    removeUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.loadedUsers.data.splice(id, 1);
      }
      // Update state if last one is removed
      if(this.loadedUsers.data.length==0){
        this.setUnloaded();
      }
    },
  },

  created() {
    // Get users only when there are none loaded
    if(!this.loaded){
      this.updateUsersList();
    }
  },
};
</script>

<style>
</style>