<template>
  <div class="page-wrapper">
    <div class="error">
      <h1 class="error__status">{{ statusCode }}</h1>
      <h2 class="error__msg">Sorry, something went wrong.</h2>
    </div>
    <nuxt-link to="/" class="home-link">Home page</nuxt-link>
  </div>
</template>
<script>
export default {
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    }
  }
}
</script>
<style lang="scss" scoped>
.page-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    125deg,
    red,
    yellow
  );
  color: white;
}
.error {
  margin-bottom: 20px;
  &__status,
  &__msg {
    text-align: center;
  }
}
.home-link {
  text-transform: uppercase;
  color: white;
}
</style>
