import json from '../data/leathers.json';
import Material from '../models/Material';

const leatherWorking = json.materials;
let materials = [];


for (let i = 0, len = leatherWorking.length; i < len; i++) {
    let material = new Material(leatherWorking[i]);
    materials.push(material);
}


module.exports = {
    leatherWorkingMaterials: materials
}