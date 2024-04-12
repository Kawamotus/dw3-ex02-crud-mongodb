import mongoose from "mongoose";

const pedido = new mongoose.Schema({
    nome: String,
    numPedido: Number,
    quantidade: Number,
    produto: String,
    precoUnitario: Number
});

export default pedido;