import express from "express";
import UsersService from "../services/UsersService.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.get("/login", (req, res) =>{
    let ativo = 5;
    let titulo = "Login";
    let errLogin = "";
    res.render("login", {
        ativo: ativo,
        errLogin: errLogin,
        titulo: titulo,
        loggedOut: true
    });
});

router.get("/cadastro", (req, res) => {
    let ativo = 0;
    let titulo = "Cadastro de administrador";
    let mensagem;
    res.render("cadastro", {
        titulo: titulo,
        ativo: ativo,
        mensagem: mensagem,
        loggedOut: true,
        messages: req.flash()
    });
});

router.post("/createUser", (req, res) => {
    
    const email = req.body.email;
    const password = req.body.password;

    UsersService.SelectOne(email).then(user => {
        if(user == undefined){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            UsersService.Create(email, hash);
            res.redirect("/login");
        }
        else{
            req.flash("danger", "Usuário já cadastrado, execute o login :D");
            res.redirect("/cadastro");
        }
    });
});

router.post("/authenticate", (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    UsersService.SelectOne(email).then(user =>{
        if(user != undefined){
            const verificacao = bcrypt.compareSync(password, user.password);

            if(verificacao){
                req.session.user = {
                    id: user._id,
                    email: user.email
                }
                //criando a flash-message
                req.flash('success', 'Login efetuado com sucesso!');
                res.redirect("/");
            }
            else{
                req.flash('danger', 'Usuário ou senha incorretos!');
                res.redirect("/login");
            }
        }
        else{
            req.flash('danger', 'Usuário inexistente');
            res.redirect("/login");
        }
    });
});

router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/");
});


export default router;