import React from 'react';
import '../static/table.css';
import TableHeader from './TableHeader';
import propTypes from 'prop-types';
import TableRow from './TableRow';




export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.headers = this.props.headers;
        this.items = this.props.items;
    }
    render() {
        return (
            <table className="table table-bordered table-top">
                <thead>
                    <tr>
                        {this.buildHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {this.mapRows()}
                </tbody>
            </table>
        )
    }

    buildHeaders() {
        return this.headers.map(header => {
            return <TableHeader key={header} header={header} />
        });
    }

    mapRows() {
        if (this.items !== undefined) {
            return this.items.map(item => {
                return <TableRow key={this.items.indexOf(item)} item={item} />
            })
        }
    }
}

Table.propTypes = {
    headers: propTypes.array,
    items: propTypes.array
}
