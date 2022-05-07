const database = require("./database/database");
const ItemPatrimonio = require("./database/model/ItemPatrimonio");
const ItemRepoSeed = require("./database/seed/ItemPatrimonioSeed");

class ItemPatrimonioRepository{
    constructor(){
        // Quando definirmos o ORM, precisaremos adicionar o model aqui.
        // this.model = ItemPatrimonioModel;
        ItemRepoSeed(database);
        this.database = database;
    }

    async create(itemPatrimonio){
        const newItem = new ItemPatrimonio(itemPatrimonio);
        console.log(newItem);
        database.addItem(newItem);
        return newItem;
    }

    async find(itemPatrimonio){
        return database.findByPatrimonio(itemPatrimonio);
    }

    async all(){
        return database.getAllItems();
    }

    async remove(patrimonioId){
        return database.removeByPatrimonio(patrimonioId);
    }
}

module.exports = new ItemPatrimonioRepository();
