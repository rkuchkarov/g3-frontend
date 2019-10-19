import React from 'react';
import fisher from './fisher.png';
import './style.css';

const Character = ({ name, skill }) => (
    <div className={'character'}>
        <img className={'fisherImage'} src={fisher}/>
        <div className={'characterInfo'}>
            <div><b>{name}</b></div>
            <div>Skill: {skill}</div>
        </div>
    </div>
);

export default Character;