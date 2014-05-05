mongoose-express-pagination
===========================

Pagination for express.js, mongoose.js and jade using Bootstrap 3, jQuery and HTML5 localStorage Object. 

<h3>Usage / Description</h3>
This code showcases the admin area of an app listing all users in db, with an option to select the number of users per page you want to be displayed. Data fetched with XHR requests (jQuery .ajax()). <br><br>
1) If you want to follow the exact example with the User model, type "npm install -d" command in terminal. This, will install libraries such as "bcrypt" in order to encrypt users's credentials. Otherwise, you can bypass this step. Check the "package.json" file to see the libraries will be installed with the above command.<br>
2) Copy "routes/admin.js" file in your routes folder.<br>
3) From "app.js" file, ignore most of the lines apart from 2, 5, 30, 33 and 39: <br>
  line 2, defines the db schema and model. Use it if you want to create a model similar to User. Otherwise replace it with yours.<br>
  line 5, defines the folder in which controllers are located.<br>
  line 30, defines the controller for admin's landpage. By default, 3 users per page are fetched.<br>
  line 33, defines the controller where the number of results (users) per page, were posted (from a drodown menu) and fetched.<br>
  line 39, defines the controller that is responsible for pagination of users's list in admin's area. <br>
4) Copy and paste "layout.jade" and "admin.jade" files into your "views" folder. <br>
5) Copy and paste "pagination.js" file into your "public/javacripts" folder . <br>
6) Copy and paste "style.css" file into your "public/stylesheets" folder. <br>
