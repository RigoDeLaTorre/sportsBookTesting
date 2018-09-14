'use strict'

class PageController {

  async admin({response, request, view, auth}){

if(auth.user){
  return view.render('pages/reactAdmin')
  }else{
        return view.render('pages/welcome')
  }

  }

  async home({response, request, view, auth}){

if(auth.user){
  return view.render('pages/react')
  }else{
        return view.render('pages/welcome')
  }

  }

  async welcome({response,request, view}){
    return view.render('pages/welcome')
  }
}

module.exports = PageController
