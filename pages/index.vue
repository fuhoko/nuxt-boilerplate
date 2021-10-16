<template>
  <div>
    <div v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  async fetch() {
    await this.getAllPosts()
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts
    })
  },
  methods: {
    ...mapActions({
      getAllPosts: 'post/getAllPosts'
    })
  }
}
</script>
