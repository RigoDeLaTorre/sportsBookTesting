'use strict'
const Post = use('App/Models/Post')
class PostController {
  async store({auth, request, response}){
    const newPost = await Post.create({
      // content is the name of the input
      content:request.input('content'),
      user_id:auth.user.id,
      type:'text'
    })

    return 'item was saved'
  }
  async update(){
return request.post()
  }
  async destroy(){
return 'destroyed'
  }
}

module.exports = PostController
