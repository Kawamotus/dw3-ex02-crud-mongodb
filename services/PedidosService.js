import mongoose from "mongoose";
import pedido from "../models/pedido.js";

const Pedido = mongoose.model("Pedido", pedido);

class PedidoService {
    SelectAll(){
        return Pedido.find();
    }

    Create(nome, numPedido, produto, quantidade, precoUnitario){
        const novoPedido = new Pedido({
            nome: nome,
            numPedido: numPedido,
            produto: produto,
            quantidade: quantidade,
            precoUnitario: precoUnitario
        });
        novoPedido.save();
    }

    Delete(id){
        Pedido.findByIdAndDelete(id).then(()=>{
            console.log("Pedido " + id + " deletado com sucesso!");
        }).catch(err =>{
            console.log(err);
        });
    }

    SelectOne(id){
        return Pedido.findOne({_id: id});
    }

    Update(id, nome, numPedido, produto, quantidade, precoUnitario){
        Pedido.findByIdAndUpdate(id, {
            nome: nome,
            numPedido: numPedido,
            produto: produto,
            quantidade: quantidade,
            precoUnitario: precoUnitario
        }).then(() =>{
            console.log("Dados do pedido " + numPedido + " atualizados com sucesso");
        }).catch(err =>{
            console.log(err);
        });

    }
}

export default new PedidoService();