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


export default router;