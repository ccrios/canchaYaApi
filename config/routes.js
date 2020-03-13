/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'POST /test': 'TestController.test',

  //'POST /register': 'RegisterUserController.postRegister',
  //'POST /registerPerson': 'RegisterPersonController.postRegister',
  //'POST /validateAccount':'RegisterPersonController.getvValidateAccount',
  'POST /login': 'LoginController.postLogin',
  'POST /regiterAccountAdmin': 'RegisterAccountController.postRegisterAccountAdmin',
  'POST /regiterAdministrator': 'RegisterAccountController.postRegisterAdmin',
  'POST /apiCreateTournament': 'TournamentController.postCreateTournament',
  'GET /apiViewTournamentNoStarting/:id?' : 'TournamentController.getViewTournamentNoStarting',
  'GET /apiViewTournamentActive/:id?' : 'TournamentController.getViewTournamentActive',
  'POST /apiViewDetailTournament' : 'TournamentController.postViewDetailTournament',
  'POST /verifyEmailRegisterTournament' : 'TournamentController.postVerifyEmailRegisterTournament',
  'POST /registerNewTournamentParticipant' : 'TournamentController.postRegisterNewTournamentParticipant',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
