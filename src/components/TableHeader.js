import React from 'react';
import '../static/table.css';
import propTypes from 'prop-types';


export default class TableHeader extends React.Component {
    render() {
        let header = this.props.header;
        return (
            <th>{this.capitalize(header)}</th>
        )
    }

    capitalize(string) {
        return String(string).charAt(0).toUpperCase() + String(string).slice(1);
    }
}

TableHeader.propTypes = {
    header: propTypes.string
}