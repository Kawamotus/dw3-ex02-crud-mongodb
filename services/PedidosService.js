import mongoose from "mongoose";
import pedido from "../models/pedido.js";

const Pedido = mongoose.model("Pedido", pedido);

class PedidoService {
    SelectAll(){
        return Pedido.find();
    }
}

export default new PedidoService();