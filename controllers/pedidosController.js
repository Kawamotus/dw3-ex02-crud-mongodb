import express from 'express';
const router = express.Router();
import PedidoService from "../services/PedidosService.js";
import Auth from '../middleware/Auth.js';

router.get('/pedidos', Auth, (req, res)=>{
    let titulo = "Pedidos";    
    let ativo = 3;

    PedidoService.SelectAll().then((pedidos) =>{
        res.render('pedidos', {
            titulo: titulo,
            ativo: ativo,
            pedidos: pedidos
        });
    })
    
});

router.post("/pedidos/novoPedido", Auth, (req, res) => {
    PedidoService.Create(
        req.body.nome,
        req.body.numPedido,
        req.body.produto,
        req.body.quantidade,
        req.body.precoUnitario
    );
    res.redirect("/pedidos");
});

router.get("/pedidos/excluir/:id", Auth, (req, res) =>{
    const id = req.params.id;
    PedidoService.Delete(id);
    res.redirect("/pedidos");
});

router.get("/pedidos/editar/:id", Auth, (req, res) =>{
    let ativo = 3;
    const id = req.params.id;
    PedidoService.SelectOne(id).then((pedido) => {
        let titulo = ("Pedido de " + pedido.nome)
        res.render("pedidosEdit", {
            titulo:titulo,
            ativo: ativo,
            pedido: pedido
        });
    }).catch(err =>{
        console.log(err);
    });
});

router.post("/pedidos/update/:id", Auth, (req, res) =>{
    PedidoService.Update(
        req.body.id,
        req.body.nome,
        req.body.numPedido,
        req.body.produto,
        req.body.quantidade,
        req.body.precoUnitario
    );
    res.redirect("/pedidos");
});

export default router;