const clientes = [

    {
        id : 1,
        nome :"Lúcio",
        profissao : "Gestor",
        altura:1.5
    }
];

function retornaCliente(){
return clientes;
}

function listaCliente(id){
    return clientes.find(c => c.id == id);
    }
    

module.exports = {
    retornaCliente,
    listaCliente
    
}