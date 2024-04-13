import mongoose from "mongoose";
import produto from "../models/produto.js";

const Produto = mongoose.model("Produto", produto);

class ProdutoService{
    SelectAll(){
        return Produto.find();
    }

    Create(nome, preco, categoria){
        const novoProduto = new Produto({
            nome: nome,
            preco: preco,
            categoria: categoria
        });
        novoProduto.save();
    }
}

export default new ProdutoService();