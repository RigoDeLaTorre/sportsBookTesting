'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

// Route.on('/').render('pages/home')
Route.get('/', 'PageController.home')
Route.get('/admin', 'PageController.admin')

//Authentication
Route.get('/register', 'AuthController.register')
Route.post('/register', 'AuthController.storeUser')
Route.get('/login', 'AuthController.login')
Route.post('/login', 'AuthController.loginUser')
Route.get('/forgot-password', 'AuthController.forgotPassword')
Route.get('/logout', 'AuthController.logout')

Route.get('/adminlogin', 'AuthController.loginAdminPage')
Route.post('/adminlogin', 'AuthController.loginAdmin')


//api

Route.get('/api/initialApp', 'ApiController.initialApp')
Route.get('/api/graded', 'ApiController.graded')
Route.get('/api/pending', 'ApiController.pending')
Route.get('/api/checkPendingWagers', 'ApiController.checkPendingWagers')
Route.post('/api/post', 'WagerController.store')
Route.get('/api/user/:id', 'UserController.profile')




Route.any('*', ({ view}) => view.render('pages/react'))
