
const {ItemPatrimonio} = require("../../database/models")

module.exports = {
    getAllItemPatrimonio: async function (){
        const data = await ItemPatrimonio.findAll();
        return data;
    },

    getItemPatrimonioById: async function (patrimonioId){
        const data = await ItemPatrimonio.findOne({ where: { patrimonio: patrimonioId }});
        return data;
    },

    addNewItemPatrimonio: async function (itemPatrimonio){
        const data = await ItemPatrimonio.create(itemPatrimonio);
        if(data) return {status: "Item criado com sucesso."}
        else return {status: "Não foi possível criar o item"}
    },
    
    removeItemPatrimonioById: async function(patrimonioId) {
        const status = await ItemPatrimonio.destroy(patrimonioId);
        if(status) return {status: "Item removido com sucesso."}
        else return {status: "Item não encontrado."}
    }
}