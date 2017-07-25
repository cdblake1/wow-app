import React from 'react';
import propTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Table from '../components/Table';
import Dropdown from '../components/Dropdown';
import { enchantingMaterials } from '../controllers/enchantController';

const headers = ["name", "id", "quantity", "marketPrice", "minimumPrice", "twoWeekMedian",
    "dailySold", "dailyPosted"];

export default class Materials extends React.Component {

    render() {
        let titles = ["Leatherworking", "Enchanting"];
        return (
            <div className="container">
                <p>Materials</p>
                <div className="row">
                    <div className="col-sm-12">
                        <Dropdown title="Leatherworking" />
                        <Dropdown title="Enchanting" />
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
