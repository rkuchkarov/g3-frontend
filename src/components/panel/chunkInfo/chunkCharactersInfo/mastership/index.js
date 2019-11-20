import React from 'react';
import './style.css';

const CharacterMastership = ({ mastery, skill }) => (
    <div className={'personMasteryInfo'}>
        <div>{mastery.name}: {skill}</div>
    </div>
);

export default CharacterMastership;