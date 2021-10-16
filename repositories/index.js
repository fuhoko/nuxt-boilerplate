import postRepository from '@/repositories/postRepository'

export default (axios) => ({
  post: postRepository(axios)
})