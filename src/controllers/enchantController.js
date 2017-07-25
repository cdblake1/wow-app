import json from '../data/enchants.json';
import Material from '../models/Material';

const enchanting = json.materials;
let materials = [];


for (let i = 0, len = enchanting.length; i < len; i++) {
    let material = new Material(enchanting[i]);
    materials.push(material);
}


module.exports = {
    enchantingMaterials: materials
}