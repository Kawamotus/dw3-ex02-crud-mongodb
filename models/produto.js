import mongoose from "mongoose";

const produto = mongoose.Schema({
    nome: String,
    preco: Number,
    categoria: String
});

export default produto;