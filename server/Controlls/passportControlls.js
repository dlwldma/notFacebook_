const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../Schema/UserCredentials.js');

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

const loginCallback = async (req, userName, userPass, done) => {
    const exists = await User.findOne({
        email: userName
    })
    if(exists){
        console.log(exists.password)
        if(userPass == exists.password){
            console.log("Credenciales acertadas")
            return done(null, exists);
        }else{
            console.log("Contraseña incorrecta");
            return done(null, false)
        }
    }
    console.log("Usuario no encontrado")
    return done(null, false);

}

passport.use('Login-Method', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, loginCallback))

module.export = passport;