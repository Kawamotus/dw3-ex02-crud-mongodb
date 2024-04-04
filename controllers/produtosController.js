import express from 'express';
const router = express.Router();

router.get('/produtos', (req, res)=>{
    let titulo = "Produtos";
    let ativo = 4;
    const produtos = [
        { 
            nome: "Notebook", 
            preco: 1999.99, 
            categoria: "Computadores" 
        },
        { 
            nome: "Mouse", 
            preco: 29.99, 
            categoria: "Periféricos" 
        },
        { 
            nome: "Teclado", 
            preco: 49.99, 
            categoria: "Periféricos" 
        },
        { 
            nome: "Monitor", 
            preco: 299.99, 
            categoria: "Periféricos" 
        },
        { 
            nome: "Impressora", 
            preco: 149.99, 
            categoria: "Periféricos" 
        },
        { 
            nome: "Disco Rígido (HD)", 
            preco: 99.99, 
            categoria: "Armazenamento" 
        },
        { 
            nome: "SSD", 
            preco: 129.99, 
            categoria: "Armazenamento" 
        },
        { 
            nome: "Roteador Wi-Fi", 
            preco: 79.99, 
            categoria: "Redes" 
        },
        { 
            nome: "Placa de Vídeo", 
            preco: 399.99, 
            categoria: "Componentes" 
        },
        { 
            nome: "Placa-Mãe", 
            preco: 149.99, 
            categoria: "Componentes" 
        }
      ];
    res.render('produtos', {
        titulo: titulo,
        ativo: ativo, 
        produtos: produtos
    });
})



export default router;