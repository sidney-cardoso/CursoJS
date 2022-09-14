class RemoteController {
    constructor(tv) {
        this.tv = tv
        this.sound = 0
    }
    // Método de instância
    turnUpSound() {
        if (this.sound === 100) return
        this.sound += 2
    }
    turnDownSound() {
        if (this.sound === 0) return
        this.sound -= 2
    }

    // Método estático

    static batteryPercentage() {
        console.log('Percentage: 98%')
    }
}

const controller = new RemoteController('LG Smart TV')

RemoteController.batteryPercentage()

console.log(controller)
