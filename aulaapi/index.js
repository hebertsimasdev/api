require("dotenv").config();

const  express = require("express");
const app = express();

const db = require("./db");

app.get("/clientes", (request, response)=>{
    response.json(db.retornaCliente());
});

app.get("/clientes/:id", (request, response)=>{
    const id = request.params.id;
    response.json(db.listaCliente(id));
});



app.get("/", (request, response)=>{
    response .json(
        {
            message:"Rout sucess"
        }
    )
});

app.listen(process.env.PORT, () =>{
    console.log("Rout ok");
});
