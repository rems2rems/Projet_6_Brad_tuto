module.exports = {
    ensureAuthenticated: function(req,res,next){
        if(req.isAuthenticated()) {
            return next()
        //req.send('Please log in to view this page')
        res.redirect('users/login')
        }
    }
}