import React from "react";
import Lottie from 'react-lottie';
import animationData from '../../../assets/C84xgUkqDY.json';
import {useNavigate, Link} from "react-router-dom";
import "./ServiceUnavailable.css"

const ServiceUnavailable = () => {
    const navigate = useNavigate();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        
          <div className="dashboard">
          <Lottie options={defaultOptions} height={500} width={500} />
          <h1>503 - Servicio No Disponible</h1>
          <p>Lo sentimos, el servicio está temporalmente no disponible. Por favor, intenta nuevamente más tarde.</p>
      </div>
    );
}

export default ServiceUnavailable;