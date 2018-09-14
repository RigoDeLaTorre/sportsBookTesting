'use strict'
const Wager = use('App/Models/Wager')

class WagerController {

  async store({auth, request, response}){

    const data = request.post()
    const data2 = data.wagers

const newWager = await Wager.createMany(data2)
    return auth.user
  }
  async update(){
return request.post()
  }
  async destroy(){
return 'destroyed'
  }

}

module.exports = WagerController
