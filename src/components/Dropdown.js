import React from 'react';
import '../static/table.css';
import '../static/dropdown.css';
import propTypes from 'prop-types';
import  'bootstrap/dist/js/bootstrap.js';


export default class Dropdown extends React.Component {
    constructor() {
        super()
        this.state = {
         title: 'Choose Profession'
        }   
    }

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                    {this.state.title} <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    {this.mapSelections()}
                </ul>
            </div>
        )
    }

    mapSelections() {
      return this.props.titles.map(title => {
        return <li key={title}><a className="d-item" href="#" onClick={this.props.onClick.bind(this)}>{title.toLowerCase()}</a></li>
      })  
    }

    setTitle() {
        return 
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
    titles: propTypes.array,
    onClick: propTypes.func
}
