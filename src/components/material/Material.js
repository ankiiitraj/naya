import React, { Component } from 'react';
import './material.css';

const options = ['Wood', 'Metal', 'Glass', 'Plastic', 'Concrete', 'Other'];

class Material extends Component {
    render() {
        return (
            <ul className='material'>
                {options.map((val) =>
                    <li>{val}</li>
                )}
            </ul>
        );
    }
}

export default Material;