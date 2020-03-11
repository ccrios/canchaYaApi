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

  /*STAGES*/
  'GET /stages': 'StageController.listStages',
  'GET /stage/:id': 'StageController.getStage',
  'POST /create-stage': 'StageController.createStage',
  'PUT /update-stage/:id': 'StageController.updateStage',
  'DELETE /delete-stage/:id': 'StageController.deleteStage',

  /*OCCUPATIONS*/
  'GET /occupations/:id': 'OccupationController.listOccupations',
  'GET /occupation/:id': 'OccupationController.getOccupation',
  'POST /create-occupation': 'OccupationController.createOccupation',
  'PUT /update-occupation/:id': 'OccupationController.updateOccupation',
  'DELETE /occupation/:id': 'OccupationController.deleteOccupation',

  //'POST /register': 'RegisterUserController.postRegister',
  //'POST /registerPerson': 'RegisterPersonController.postRegister',
  //'POST /validateAccount':'RegisterPersonController.getvValidateAccount',
  'POST /login': 'LoginController.postLogin',
  'POST /regiterAccountAdmin': 'RegisterAccountController.postRegisterAccountAdmin',
  'POST /regiterAdministrator': 'RegisterAccountController.postRegisterAdmin',




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
