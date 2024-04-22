function Auth(req, res, next) {
    if(req.session.user != undefined){
        next();
    }
    else{
        let ativo = 5;
        let titulo = "Login";
        let errLogin = "";
        res.render("login", {
            ativo: ativo,
            errLogin: errLogin,
            titulo: titulo,
            loggedOut: true
        });
    }
}

export default Auth;