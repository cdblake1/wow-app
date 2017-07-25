export default class Material {
    constructor(material) {
        this.name = material.name;
        this.id = material.id;
        this.quantity = material.quantity;
        this.marketPrice = material.marketPrice;
        this.minimumPrice = material.minimumPrice;
        this.twoWeekMedian = material.twoWeekMedian;
        this.dailySold = material.dailySold;
        this.dailyPosted = material.dailyPosted;
    }
}