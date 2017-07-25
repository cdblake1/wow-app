import React from 'react';
import '../static/table.css';
import '../static/dropdown.css';
import propTypes from 'prop-types';





export default class Dropdown extends React.Component {
    render() {
        let title = this.props.title;
        return (
            <div className="btn btn-primary" type="button">{title}</div>
        )
    }

    // loadTitles() {
    //     return this.props.titles.map(title => {
    //         return (
    //             <a key={title}>{title}</a>
    //         )
    //     });
    // }

}

Dropdown.propTypes = {
    titles: propTypes.string,
}
