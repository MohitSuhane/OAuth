const router = require('express').Router();
const passport = require('@passport-next/passport');
//auth login
router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/logout', (req, res) => { res.render('login'); });

//auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

//auth with google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    scope: ['profile']
});

module.exports = router;
