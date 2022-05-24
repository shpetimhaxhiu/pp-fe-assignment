



  <template>
  <div>
    <div class="px-4 py-5 my-5 text-center">
      <!-- <img class="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <h1 class="display-5 fw-bold">Page not found</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead  mb-4 text-black">Sorry, looks like we sent you the wrong way.<br>Let us guide you back!</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          Go <router-link to="/">Home</router-link> or to <router-link to="users">Users list</router-link>
          <!-- <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
</style>