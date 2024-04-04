import express from 'express';
const router = express.Router();

router.get("/clientes",function(req,res){
    let titulo = "Clientes";
    let ativo = 2;
    const listaClientes = [
        {
            nome: "João",
            cpf: "123.456.789-00",
            endereco: "Rua A, 123"
        },
        {
            nome: "Maria",
            cpf: "987.654.321-00",
            endereco: "Rua B, 456"
        },
        {
            nome: "José",
            cpf: "456.789.123-00",
            endereco: "Rua C, 789"
        },
        {
            nome: "Ana",
            cpf: "321.654.987-00",
            endereco: "Rua D, 246"
        },
        {
            nome: "Pedro",
            cpf: "789.123.456-00",
            endereco: "Rua E, 135"
        },
        {
            nome: "Carla",
            cpf: "654.987.321-00",
            endereco: "Rua F, 579"
        },
        {
            nome: "Mariana",
            cpf: "234.567.890-00",
            endereco: "Rua G, 753"
        },
        {
            nome: "Lucas",
            cpf: "876.543.210-00",
            endereco: "Rua H, 984"
        }
    ];
    
    res.render('clientes', {
        listaClientes: listaClientes,
        titulo: titulo,
        ativo: ativo
    });
})


export default router;