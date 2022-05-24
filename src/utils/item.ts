// first place most common last place most rare
const itemsQuality = [
    "Old",
    "New",
    "Polished",
]
// first place most common last place most rare
const itemsType = [
    "sword",
    "shield",
    "helmet",
    "armor",
    "boots",
    "coin"
]

interface itemPropertiesInterface {
    damage: boolean
    value: number
}


export class Item {
    name: string
    quality: string
    type: string
    properties: itemPropertiesInterface
    price: number
    id: number
    level: number

    constructor(level: number) {
        // don't change order cuz it mint brake
        this.type = this.generateType()
        this.quality = this.generateQuality()
        this.properties = this.generateProperties()
        this.name = this.generateName()
        this.id = Math.random()
        this.level = level + 1
        this.price = this.generatePrice()
        // this one should be updated
    }

    getItem() {
        return this
    }

    generateProperties() {
        const result: itemPropertiesInterface = {
            damage: false,
            value: 0
        }
        // this one returns NaN fix it
        const qualityModifier = itemsQuality.indexOf(this.quality)
        if (this.type === "sword" || this.type === "secondary") result.damage = true
        if (result.damage) result.value = this.level * (qualityModifier + Math.floor(Math.random() * 10))

        return result
    }

    generateName(): string {
        return `${this.quality} ${this.type}`
    }

    generateQuality(): string {
        for (let quality of itemsQuality) {
            if (Math.random() * 2 > 1) return quality
        }

        return itemsQuality[0]
    }

    generateType(): string {
        for (let type of itemsType) {
            if (Math.random() * 2 > 1) return type
        }

        return itemsType[0]
    }

    generatePrice(): number {
        const qualityModifier = itemsQuality.indexOf(this.quality)
        return this.level * qualityModifier + Math.floor(Math.random() * 10)
    }
}