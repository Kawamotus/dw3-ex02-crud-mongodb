import express from 'express';
const app = express();

import mongoose from 'mongoose';
import session from 'express-session';

import clientesController from "./controllers/clientesController.js";
import pedidosController from "./controllers/pedidosController.js";
import produtosController from "./controllers/produtosController.js";
import usersController from "./controllers/usersController.js";

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(session({
    secret: "sistemaLojasecret",
    cookie: {maxAge:3600000},
    saveUninitialized: false,
    resave: false
}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/", clientesController);
app.use("/", pedidosController);
app.use("/", produtosController);
app.use("/", usersController);

mongoose.connect("mongodb://localhost:27017/sistemaLoja");


app.get('/', (req, res) =>{
    let titulo = "Home";
    let ativo = 1;
    const produtosHome = [
        {
            titulo: "Notebook Gamer Acer Nitro 5",
            descricao: 'Intel Core i7-11600H, 16GB RAM, NVIDIA GeForce RTX 3050, SSD 512GB, 17.3" FHD 144Hz IPS, Linux, Preto com vermelho - AN517-54-765V',
            imagem: "notebook.jpg"
        },
        {
            titulo: "Monitor Gamer KBM! GAMING MG330 31.5'",
            descricao: "Led, Curvo, 165 Hz, Full Hd, 1ms, Adaptive Sync, Hdmi/Displayport, Ajuste De Ângulo - KGMG33031PT",
            imagem: "monitor.jpg"
        },
        {
            titulo: "Cadeira Gamer KBM! GAMING Tempest CG500",
            descricao: "Preta Com Almofadas, Descanso Para Pernas Retrátil, Reclinável - KGCG500PT",
            imagem: "cadeira.jpg"
        },
        {
            titulo: "Placa de Vídeo RTX 4060 VENTUS",
            descricao: "2x Black OC MSI NVIDIA GeForce, 8GB GDDR6, DLSS, Ray Tracing",
            imagem: "4060.jpg"
        }
    ];
    res.render('index', {
        titulo: titulo,
        ativo: ativo,
        produtosHome: produtosHome
    });
});




app.listen(8080, erro => {
    if(erro){
        console.log("Ocorreu um erro");
    }
    else{
        console.log("Servidor iniciado com sucesso!");
    }
});