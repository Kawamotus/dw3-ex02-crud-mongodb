import express from 'express';
const router = express.Router();
import ClienteService from '../services/ClienteService.js';

router.get("/clientes",(req,res) =>{
    let titulo = "Clientes";
    let ativo = 2;
    ClienteService.SelectAll().then((listaClientes) =>{
        res.render("clientes", {
            listaClientes: listaClientes,
            titulo: titulo,
            ativo: ativo
        })
    });
});

router.post("/clientes/novoCliente", (req, res) =>{
    ClienteService.Create(
        req.body.nome,
        req.body.cpf,
        req.body.endereco
    );
    res.redirect('/clientes');
});

router.get("/clientes/excluir/:id", (req, res) => {
    const id = req.params.id;
    ClienteService.Delete(id);
    res.redirect("/clientes");
});


export default router;