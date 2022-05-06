const ItemPatrimonio = require("./model/ItemPatrimonio");

// Classe que serve de banco de dados temporário. Será substituído pelo ORM.
class Banco {
    constructor() {
        this.items = []
    }

    getAllItems() {
        return this.items;
    }

    addItem(novoItem) {
        if(novoItem instanceof ItemPatrimonio){
            this.items.push(novoItem)
        }else{
            throw Error("DB: Objeto não é do tipo ItemPatrimonio")
        }
    }

    findByPatrimonio(patrimonio) {
          return this.items.filter(item => item.patrimonio === patrimonio)[0];
    }

    removeByPatrimonio(patrimonio) {
        const item = this.items.filter(item => item.patrimonio === patrimonio);
        return item ? item.pop(item) : null;
    }
}

let banco = new Banco();

module.exports = banco;