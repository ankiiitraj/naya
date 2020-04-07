import React, { Component } from 'react';
import './capacitywork.css';

const options = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

class CapacityWork extends Component {

    render() {
        return (
            <ul className='capacitywork'>
                {options.map((val) =>
                    <li>{val}</li>
                )}
            </ul>
        );
    }
}

export default CapacityWork;