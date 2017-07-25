import React from 'react';
import '../static/table.css';
import propTypes from 'prop-types';
import TableCell from './TableCell';


export default class TableRow extends React.Component {
    render() {
        let item = this.props.item;
        return (
            <tr>
                {this.mapCells(item)}
            </tr>
        )
    }
    mapCells(item) {
        let tableCells = [];

        for (let key in item) {
            console.log(item[key]);
            tableCells.push(<TableCell key={key} item={this.capitalize(item[key])} />);
        }

        return tableCells;
    }

    capitalize(string) {
        return String(string).charAt(0).toUpperCase() + String(string).slice(1);
    }
}

TableRow.propTypes = {
    items: propTypes.array,
}