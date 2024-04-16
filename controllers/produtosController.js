import express from 'express';
const router = express.Router();
import ProdutoService from '../services/ProdutoService.js';
import Auth from "../middleware/Auth.js";

router.get('/produtos', Auth, (req, res)=>{
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

router.post("/produtos/novoProduto", Auth, (req, res) => {
    ProdutoService.Create(
        req.body.nome,
        req.body.preco,
        req.body.categoria
    );
    res.redirect("/produtos");
});

router.get("/produtos/excluir/:id", Auth, (req, res) => {
    const id = req.params.id;
    ProdutoService.Delete(id);
    res.redirect("/produtos");
});

router.get("/produtos/editar/:id", Auth, (req, res) => {
    let ativo = 4;
    const id = req.params.id;
    ProdutoService.SelectOne(id).then((produto) =>{
        let titulo = produto.nome;
        res.render("produtosEdit", {
            ativo: ativo,
            titulo: titulo,
            produto: produto
        });
    }).catch(err =>{
        console.log(err);
    });;
});

router.post("/produtos/update/:id", Auth, (req, res) =>{
    ProdutoService.Update(
        req.params.id,
        req.body.nome,
        req.body.preco,
        req.body.categoria
    );
    res.redirect("/produtos");
});



export default router;