Express Auth Server for authentication in react-native

Todos:
* Lowercase passwords
* Save jwt to db and delete on logout
* Edit user model to add validation so that you can only try to sign in a couple of times to avoid brute force attacks on login form. Mongoose schema.virtual could be one method to look into. It's called account locking.
* Add a password validation so that you can't write any password
