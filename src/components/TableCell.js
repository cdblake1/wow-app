import React from 'react';
import '../static/table.css';
import propTypes from 'prop-types';


export default class TableCell extends React.Component {
    render() {
        let item = this.props.item;
        return (
            <td>{item}</td>
        )
    }
}

TableCell.propTypes = {
}