const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../schema/UserCredentials.js');

passport.serializeUser((user, done)=>{
    done(null, user._id);
})
passport.deserializeUser((id, done)=>{
    const findUser = async () => {
        await User.findOne({
            _id: id
        })
    }
    return done(null, findUser);
})

const loginCallback = (req, userName, userPass, done) => {
    const exists = async () => {
        await User.findOne({
            username: userName
        })
    }
    if(exists){
        if(userPass == exists.password){
            console.log("Usuario autentificado");
            return done(null, exists);
        }else{
            console.log("Contraseña incorrecta");
            return done(null, false)
        }
    }else{
        console.log("Usuario no encontrado")
        return done(null, false);
    }
}
/* const signinCallback = (req, userName, userPass, done) => {
} */
passport.use('Login-Method', new LocalStrategy({
    usernameField: 'loginUserName',
    passwordField: 'loginUsePass'
}), loginCallback)

/* passport.use('Signin-Method', new LocalStrategy({
    usernameField: 'signinUserName',
    passwordField: 'signinUserPass'
}), signinCallback) */

module.export = passport;