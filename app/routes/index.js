'use strict';

var path = process.cwd();
var BlogPostHandler = require(path + '/app/controllers/blogPostHandler.server.js');

module.exports = function (app) {
    
    
    var blogPostHandler = new BlogPostHandler();
    
    app.route('/')
        .get(function (req, res) {
        res.sendFile(path + 'index.html');
        });
	    
// 	app.route('/login')
//     	.get(function (req, res) {
//     		res.sendFile(path + '/public/login.html');
//     	});
    	
//     app.route('/logout')
//     	.get(function (req, res) {
//     		req.logout();
//     		res.redirect('/login');
//     	});
    	
//     app.route('/profile')
//     	.get(isLoggedIn, function (req, res) {
//     		res.sendFile(path + '/public/profile.html');
//     	});
        
    
//     app.route('/api/:id')
//     	.get(isLoggedIn, function (req, res) {
//     		res.json(req.user.github);
//     	});
    	
//     app.route('/auth/github')
// 	    .get(passport.authenticate('github'));
	    
// 	app.route('/auth/github/callback')
//     	.get(passport.authenticate('github', {
//     		successRedirect: '/',
//     		failureRedirect: '/login'
//     	}));

//     app.route('/api/:id/clicks')
//     	.get(isLoggedIn, clickHandler.getClicks)
//     	.post(isLoggedIn, clickHandler.addClick)
//     	.delete(isLoggedIn, clickHandler.resetClicks);
    
// 		.get(clickHandler.getClicks)
// 		.post(clickHandler.addClick)
// 		.delete(clickHandler.resetClicks);

}