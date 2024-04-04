import express from 'express';
const router = express.Router();

router.get('/pedidos', (req, res)=>{
    let titulo = "Pedidos";    
    let ativo = 3;
    const pedidos = [
        {
            nome: "Lucas",
            numPedido: 18857,
            quantidade: 5,
            produto: "Placa-Mãe",
            precoUnitario: 149.99
        },
        {
            nome: "Carla",
            numPedido: 54234,
            quantidade: 1,
            produto: "Placa de Vídeo",
            precoUnitario: 399.99
        },
        {
            nome: "Ana",
            numPedido: 51146,
            quantidade: 3,
            produto: "SSD",
            precoUnitario: 129.99
        },
        {
            nome: "Maria",
            numPedido: 90857,
            quantidade: 2,
            produto: "SSD",
            precoUnitario: 129.99
        },
        {
            nome: "José",
            numPedido: 74119,
            quantidade: 1,
            produto: "Mouse",
            precoUnitario: 29.99
        }
    ];
    res.render('pedidos', {
        titulo: titulo,
        ativo: ativo,
        pedidos: pedidos
    });
})

export default router;