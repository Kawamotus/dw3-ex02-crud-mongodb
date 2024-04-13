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



export default router;