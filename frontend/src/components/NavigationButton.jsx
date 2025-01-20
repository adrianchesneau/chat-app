import React from 'react';
import '../styles/NavigationButton.css';

// Définition du composant Button
const NavigationButton = ({ text, onClick }) => {
  return (
        <button onClick={onClick} className="custom-button-primary">
        <span>{text}</span>
        </button>
  );
};

export default NavigationButton;