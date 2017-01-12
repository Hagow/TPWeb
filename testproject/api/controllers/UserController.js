/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	perso: function (req, res){
	return res.view('perso');
	},
	moncompte: function (req, res){
	var data ={};

  data.user = req.user;

	data.mesdata ={
	title : "Mon compte",
	content : "Vous trouverez ici les informations de votre compte",
	};

	console.log(req.user);
          return res.view('perso',data);
      }
};

