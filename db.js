var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt');

var User = new Schema({
	username : {
		type: String,
		required : true,
		unique: true,
		index: true
	},
	password : {
		type : String,
		required : true,
	},
	email : {
		type: String,
		required : true,
		unique: true,
		index: true
	},
	created : Date,
	profileimage: {
		type: String,
		required : false
		//data: Buffer,
		//required : false,
		//contentType: String
	}
});

User.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
};
User.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Uncomment the code below in order to insert a user
/* var user6 = new User({
	username: 'user6',
	password: 'user6',
	email: 'user6@user6.com',
	created: Date.now
});
user6.save(function(err, user6){
	if (err) throw err;
	console.log('user6 saved');
}); */

//Always set the model after defining the methods
var User = mongoose.model('User', User);
mongoose.connect('mongodb://localhost/db');