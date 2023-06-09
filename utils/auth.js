const withAuth = (req, res, next) => {
    // is this user logged in?
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    } else 
    next();
};
  
module.exports = withAuth;