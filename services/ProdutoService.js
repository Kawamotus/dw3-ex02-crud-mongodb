import mongoose from "mongoose";
import produto from "../models/produto.js";

const Produto = mongoose.model("Produto", produto);

class ProdutoService{
    SelectAll(){
        return Produto.find();
    }
}

export default new ProdutoService();