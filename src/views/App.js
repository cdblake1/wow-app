import React from 'react';
import propTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Routes from '../components/Routes';


export default class App extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Routes />
            </div>
        )
    }
}


