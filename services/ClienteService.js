import mongoose from 'mongoose';
import cliente from "../models/cliente.js";

const Cliente = mongoose.model("Cliente", cliente);

class ClienteService{

}

export default new ClienteService();