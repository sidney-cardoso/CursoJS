// -------------------------------- HERANÇA COM CLASSES -------------------------------- //

class ElectronicDevice {
    constructor(model) {
        this.model = model
        this.connected = false
    }
    connect() {
        if (this.connected) {
            console.log(`${this.model} já está conectado!`)
            return
        }
        this.connected = true
    }
    disconnect() {
        if (!this.connected) {
            console.log(`${this.model} está desconectado!`)
            return
        }
        this.connected = false
    }
}

// class Television extends ElectronicDevice {} // Herda todas as propriedades da classe (ElectronicDevice)
class Television extends ElectronicDevice {
    constructor(model, size) {
        super(model) // Chamando o construtor da classe pai e executando aqui dentro
        this.size = size
    }
}

const tv = new Television('Samsung Smart TV', 55)

tv.connect()
console.log(tv)

class Smartphone extends ElectronicDevice {
    constructor(model, color) {
        super(model)
        this.color = color
    }
}

const smartphone = new Smartphone("Galaxy S-20 FE", "Red")
smartphone.connect()
console.log(smartphone);