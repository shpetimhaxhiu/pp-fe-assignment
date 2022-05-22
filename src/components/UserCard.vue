<template>
  <div class="card">
  <img :src="avatar" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{username}}</h5>
    <p class="card-text">{{otherData}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
 username : {
      type: String,
      required: true,
      default: ''
    },
    avatar: {
      type: String,
      required: true,
      default: ''
    },
    url : {
      type: String,
      required: true,
      default: ''
    },
    otherData : {
      type: Object,
      required: false,
      default: {}
    }
  }
   
  }
;
</script>

<style>

</style>