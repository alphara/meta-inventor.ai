import React, { Component } from 'react';
import './Dreams.css';
import MatrixArchitect from './Images/MatrixArchitect.jpg';
import NikolaTesla from './Images/NikolaTesla.jpg';
import GoldStorage from './Images/GoldStorage.jpg';
import ArtificialIntelligence1 from './Images/ArtificialIntelligence1.jpg';
import ArtificialIntelligence2 from './Images/ArtificialIntelligence2.jpg';
import TeslaCar from './Images/TeslaCar.jpg';
import TeslaSalon from './Images/TeslaSalon.jpg';
import LivingRoom from './Images/LivingRoom.jpg';
import BedRoom from './Images/BedRoom.jpg';
import Catamaran from './Images/Catamaran.jpg';
import CatamaranLagoon from './Images/CatamaranLagoon.jpg';
import Suite1 from './Images/Suite1.jpg';
import Suite2 from './Images/Suite2.jpg';
import FreddyMercury from './Images/FreddyMercury.jpg';
import RedhairGirl from './Images/RedhairGirl.png';
import LatinaGirl from './Images/LatinaGirl.jpg';
import NikolaTeslaFace from './Images/NikolaTeslaFace.jpg';
import MariaOrsic from './Images/MariaOrsic.jpg';

class Dreams extends Component {
  render() {
    return (
      <div className="Dreams">
        <img src={NikolaTesla} className="Dreams__NikolaTesla" alt="Nikola Tesla" />
        <img src={MatrixArchitect} className="Dreams__MatrixArchitect" alt="Matrix Architect" />
        <img src={GoldStorage} className="Dreams__GoldStorage" alt="Gold Storage" />
        <img src={ArtificialIntelligence1} className="Dreams__ArtificialIntelligence1" alt="Artificial Intelligence 1" />
        <img src={ArtificialIntelligence2} className="Dreams__ArtificialIntelligence2" alt="Artificial Intelligence 2" />
        <img src={TeslaCar} className="Dreams__TeslaCar" alt="Tesla Car" />
        <img src={TeslaSalon} className="Dreams__TeslaSalon" alt="Tesla Salon" />
        <img src={LivingRoom} className="Dreams__LivingRoom" alt="Living Room" />
        <img src={BedRoom} className="Dreams__BedRoom" alt="Bed Room" />
        <img src={Catamaran} className="Dreams__Catamaran" alt="Catamaran" />
        <img src={CatamaranLagoon} className="Dreams__CatamaranLagoon" alt="Catamaran Lagoon" />
        <img src={Suite1} className="Dreams__Suite1" alt="Suite 1" />
        <img src={Suite2} className="Dreams__Suite2" alt="Suite 2" />
        <img src={FreddyMercury} className="Dreams__FreddyMercury" alt="Freddy Mercury" />
        <img src={RedhairGirl} className="Dreams__RedhairGirl" alt="Redhair Girl" />
        <img src={LatinaGirl} className="Dreams__LatinaGirl" alt="Latina Girl" />
        <img src={NikolaTeslaFace} className="Dreams__NikolaTeslaFace" alt="Nikola Tesla Face" />
        <img src={MariaOrsic} className="Dreams__MariaOrsic" alt="Maria Orsic" />
      </div>
    );
  }
}

export default Dreams;
