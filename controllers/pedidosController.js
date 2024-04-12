import express from 'express';
const router = express.Router();
import PedidoService from "../services/PedidosService.js";

router.get('/pedidos', (req, res)=>{
    let titulo = "Pedidos";    
    let ativo = 3;

    PedidoService.SelectAll().then((pedidos) =>{
        res.render('pedidos', {
            titulo: titulo,
            ativo: ativo,
            pedidos: pedidos
        });
    })
    
})

export default router;