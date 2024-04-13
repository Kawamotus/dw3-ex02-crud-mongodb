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

    Delete(id){
        Produto.findByIdAndDelete(id).then(()=>{
            console.log("Produto " + id + " deletado com sucesso");
        }).catch(err =>{
            console.log(err);
        });
    }
}

export default new ProdutoService();