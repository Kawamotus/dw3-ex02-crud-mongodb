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
        titulo: titulo
    });
});

router.get("/cadastro", (req, res) => {
    let ativo = 0;
    let titulo = "Cadastro de administrador";
    res.render("cadastro", {
        titulo: titulo,
        ativo: ativo
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
            res.send(`E-mail já cadastrado!<br><a href="/cadastro">Tentar novamente </a>`)
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
                res.redirect("/");
            }
            else{
                //return alert("Usuário ou senha incorretos!");       
            }
        }
    });
});


export default router;