<template>
  <div class="card">
    <div class="row g-0">
    <div class="col-md-4">  
      <img :src="avatar" class="card-img-top rounded" alt="{{username}}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
    <h5 class="card-title"><a :href="url">{{username}}</a></h5>
        <a href="#" class="btn btn-sm btn-danger" @click.prevent="this.$parent.removeUser(userId)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
        </svg>
      </a>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
 userId : {
      type: Number,
      required: true,
      default: ''
    }, 
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