import mongoose from 'mongoose';
import cliente from "../models/cliente.js";

const Cliente = mongoose.model("Cliente", cliente);

class ClienteService{
    SelectAll(){
        return Cliente.find();
    }

    Create(nome, cpf, endereco){
        const novoCliente = new Cliente({
            nome: nome,
            cpf: cpf, 
            endereco: endereco
        });
        novoCliente.save();
    }

    Delete(id){
        Cliente.findByIdAndDelete(id).then(() =>{
            console.log("Cliente com id " + id + " foi deletado com sucesso!");
        }).catch(err =>{
            console.log(err);
        });
    }
    
}

export default new ClienteService();