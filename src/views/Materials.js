import React from 'react';
import propTypes from 'prop-types';
import Table from '../components/Table';
import Dropdown from '../components/Dropdown';
import { enchantingMaterials } from '../controllers/enchantController';

const headers = ["name", "id", "quantity", "marketPrice", "minimumPrice", "twoWeekMedian",
    "dailySold", "dailyPosted"];

const professions = [
    'HERBALISM',
    'MINING',
    'SKINNING',
    'ALCHEMY',
    'BLACKSMITHING',
    'ENCHANTING',
    'ENGINEERING',
    'INSCRIPTION',
    'JEWELCRAFTING',
    'LEATHERWORKING',
    'TAILORING',
    'ARCHAEOLOGY',
    'COOKING',
    'FIRST AID',
    'FISHING'
]

let onclick = function(e) {
    this.setState({
        title: e.target.text
    })
}


export default class Materials extends React.Component {

    render() {
        return (
            <div className="container">
                <p>Materials</p>
                <div className="row">
                    <div className="col-sm-12">
                        <Dropdown titles={professions} onClick={onclick}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Table headers={headers} />
                    </div>
                </div>
            </div>
        )
    }
}
