 // Change the name of the model (User) to be the same with that you want to fetch records from.
var mongoose = require('mongoose'); 
var User = mongoose.model('User', User); 

var limit = 3, skip = 0; // default values

exports.index = function(req, res){
	User.find({}, null, {limit: limit, skip: skip}, function(err, user) {
		User.count({}, function(err, num){
			if (err) throw err;
			res.render('admin', {
				title: 'Admin Panel',
				listofusers: user,
				limit: limit,
				count: num
			});
		});
	});
};

exports.page = function(req, res) {
	User.find({}, null, {limit: req.body.pagin, skip: req.params.id * req.body.pagin}, function(err, user) {
		User.count({}, function(err, num){
			if (err) throw err;
			res.render('admin', {
				title: 'Admin Panel',
				listofusers: user,
				limit: req.body.pagin,
				count: num
			});
		});
	});
};

exports.usersperpage = function(req, res) {
	User.find({}, null, {limit: req.body.pagin, skip: skip}, function(err, user) {
		User.count({}, function(err, num){
			if (err) throw err;
			res.render('admin', {
				title: 'Admin Panel',
				listofusers: user,
				limit: req.body.pagin,
				count: num
			});
		});
	});
};