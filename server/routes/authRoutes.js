const passport = require('passport');

module.exports = (app) => {

    /**
     * @author Ivelin Ivanov
     * @description GET Route for Google Authentication
     * @param {}
     */

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    /**
     * @author Ivelin Ivanov
     * @description callback route
     * @param {Object} req
     */

    app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
        res.redirect('/surveys');
    });

    /**
     * @author Ivelin Ivanov
     * @description Current logged in user Route
     * @param {Object} req
     */

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    /**
     * @author Ivelin Ivanov
     * @description Logout Route 
     * @param {Object} req
     */

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
        // res.send(req.user);
    });
};