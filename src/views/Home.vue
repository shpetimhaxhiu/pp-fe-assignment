<template>
  <div class="container py-3">
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-2">
        <h1 class="display-5 mb-3 mt-3 pt-0">Top-rated PR software for industry leading organizations</h1>
        <p class="text-muted fs-4">A newsroom where you have full control: create and publish content instantly with fully branded and seamlessly integrated media and news pages.</p>
<p class="text-muted fs-4">Enhance your stories with rich media and add key PR elements like media libraries or press kits. Avoid technical challenges by easily building and editing pages with our custom drag-and-drop modules.</p>
        <button class="btn btn-primary btn-lg" type="button" onclick="alert('This is a dummy button :( ... Try Users list')">Home button</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import UserCard from "@/components/UserCard.vue";

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