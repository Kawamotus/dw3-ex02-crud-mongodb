import express from 'express';
const router = express.Router();
import ProdutoService from '../services/ProdutoService.js';

router.get('/produtos', (req, res)=>{
    let titulo = "Produtos";
    let ativo = 4;

    ProdutoService.SelectAll().then((produtos) =>{
        res.render('produtos', {
            titulo: titulo,
            ativo: ativo, 
            produtos: produtos
        });
    });
    
});

router.post("/produtos/novoProduto", (req, res) => {
    ProdutoService.Create(
        req.body.nome,
        req.body.preco,
        req.body.categoria
    );
    res.redirect("/produtos");
});



export default router;