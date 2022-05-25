export enum slots {
    head = "head",
    armor = "armor",
    boots = "boots",
    weapon = "weapon",
    secondary = "secondary",
    money = "money",
}

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

export enum itemImage {
    sword = "https://toppng.com/uploads/preview/mini-letter-opener-sword-sword-11563002065fhqy6rnkul.png",
    helmet = "https://cdn.imgbin.com/15/13/16/imgbin-the-elder-scrolls-v-skyrim-dragonborn-armour-helmet-video-game-role-playing-game-armour-1R2EfVqzEQdK3Sa19tuLFJgEE.jpg",
    knight = "https://toppng.com/uploads/preview/fantasy-knight-11549006626h6rawp6ow2.png",
    shield = "https://c0.klipartz.com/pngpicture/201/17/gratis-png-escudo-de-plata.png",
    armor = "https://www.pngall.com/wp-content/uploads/4/Armor-PNG-Transparent-HD-Photo.png",
    boots = "https://w7.pngwing.com/pngs/978/875/png-transparent-riding-boot-the-elder-scrolls-v-skyrim-dragonborn-shoe-leather-boot-game-leather-accessories.png",
    coin = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2wGlFSS9dUdWhEn3fC_dEjC-itZRxyQUpw&usqp=CAU",
    none = '',
}

interface itemPropertiesInterface {
    damage: boolean
    value: number
}

interface itemInterface {
    name: string
    quality: string
    type: string
    properties: itemPropertiesInterface
    price: number
    id: number
    level: number
    image: itemImage
    slot: slots
}

export class Item {
    name: string
    quality: string
    type: string
    properties: itemPropertiesInterface
    price: number
    id: number
    level: number
    image: itemImage
    slot: slots

    constructor(itemData?: itemInterface) {
        this.level = 1
        this.type = this.generateType()
        this.quality = this.generateQuality()
        this.properties = this.generateProperties()
        this.name = this.generateName()
        this.id = Math.random()
        this.price = this.generatePrice()
        this.image = this.generateImageLink()
        this.slot = this.getItemSlot()

        if (itemData) {
            const {level, type, quality, properties, name, id, price, image} = itemData;

            this.level = level;
            this.type = type;
            this.quality = quality
            this.properties = properties
            this.name = name
            this.id = id
            this.price = price
            this.image = image
        }
    }


    getItem() {
        return this
    }

    generateProperties() {
        const result: itemPropertiesInterface = {
            damage: false,
            value: 0
        }

        const qualityModifier = itemsQuality.indexOf(this.quality)
        if (this.type === "sword" || this.type === "secondary") result.damage = true
        result.value = this.level * (qualityModifier + Math.floor(Math.random() * 5))
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
        const qualityModifier = itemsQuality.indexOf(this.quality) * this.level
        return Number(qualityModifier + Math.floor(Math.random() * 10))
    }

    generateImageLink() {

        switch (this.type) {
            case itemsType[0]:
                return this.image = itemImage.sword
            case itemsType[1]:
                return this.image = itemImage.shield
            case itemsType[2]:
                return this.image = itemImage.helmet
            case itemsType[3]:
                return this.image = itemImage.armor
            case itemsType[4]:
                return this.image = itemImage.boots
            case itemsType[5]:
                return this.image = itemImage.coin
            default:
                return this.image = itemImage.none
        }
    }

    getItemSlot(): slots {
        switch (this.type) {
            case (itemsType[0]):
                return this.slot = slots.weapon
            case (itemsType[1]):
                return this.slot = slots.secondary
            case (itemsType[2]):
                return this.slot = slots.head
            case (itemsType[3]):
                return this.slot = slots.armor
            case (itemsType[4]):
                return this.slot = slots.boots
            default:
                return slots.money
        }
    }
}

export let baseWeapon: Item;
baseWeapon = new Item({
    name: "Old sword",
    quality: "Old",
    type: "sword",
    properties: {damage: true, value: 5},
    price: 1,
    id: 1,
    level: 1,
    image: itemImage.sword,
    slot: slots.weapon,
});