export default {
  state() {
    return {
      posts: [],
      post: []
    }
  },

  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_POST(state, post) {
      state.post = post
    }
  },

  actions: {
    async getAllPosts({ commit }) {
      const response = await this.$api.post.all()
      commit('SET_POSTS', response?.data.data)
    },
  
    async getPost({ commit }, post) {
      const response = await this.$api.post.show(post)
      return response.data.data
    }
  }
}
