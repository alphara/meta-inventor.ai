import React, { Component } from 'react';
import './Dreams.css';
import MatrixArchitect from './MatrixArchitect.jpg';
import NikolaTesla from './NikolaTesla.jpg';
import GoldStorage from './GoldStorage.jpg';

class Dreams extends Component {
  render() {
    return (
      <div className="Dreams">
        <img src={NikolaTesla} className="Dreams__NikolaTesla" alt="Nikola Tesla" />
        <img src={MatrixArchitect} className="Dreams__MatrixArchitect" alt="Matrix Architect" />
        <img src={GoldStorage} className="Dreams__GoldStorage" alt="Gold Storage" />
      </div>
    );
  }
}

export default Dreams;
