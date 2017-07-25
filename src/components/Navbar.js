import React from 'react';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div >
                                <Link className="navbar-brand" to="/">WoW App</Link>
                            </div>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Materials">Materials</Link>
                            </li>
                            <li>
                                <Link to="/Products">Products</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

Navbar.propTypes = {
}
