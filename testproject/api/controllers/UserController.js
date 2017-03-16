/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var path= require("path");
//var where = {id = rep.user.id, avatar_url:path.basename(upladedFiles[0].fd)};

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

	   User.findOne(req.user.id).populate('addresses').exec(function(err,user){
                console.log(user);
                data.user = user;
                return res.view('perso',data);
            });

	   User.update(req.user.id).exec(function(err,user){
                console.log(user);
                data.user = user;
                return res.view('perso',data);
            });
        },

  /**
   * Upload avatar for currently logged-in user
   *
   * (POST /user/avatar/)
   */
  uploadAvatar: function (req, res) {

    req.file('avatar').upload({
      dirname: path.resolve(sails.config.appPath, 'assets/images/avatar')
    },function (err, uploadedFiles) {
      if (err) return res.negotiate(err);
      console.log(path.basename(uploadedFiles[0].fd));
      return res.json({
        message: uploadedFiles.length + ' file(s) uploaded successfully!'
      });
    });


  }

};

