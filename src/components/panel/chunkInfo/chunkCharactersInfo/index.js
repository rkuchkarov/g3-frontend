import React from 'react';
import fisher from './fisher.png';
import './style.css';
import CharacterMastership from "./mastership";

const Character = ({ isMale, action, name, age, masterships }) => (
    <div className={'characterWrapper'}>
        <div className={'characterTitle'}>
            <img className={'fisherImage'} src={fisher}/>
            <div className={'characterInfo'}>
                <div><b>{name}</b></div>
                <div>Возраст: {age}</div>
                <div>Пол: {isMale ? 'Мужчина': 'Женщина'}</div>
            </div>
        </div>
        {action && <div><b>Состояние:</b> {action}</div>}
        {masterships && <div>
            <div className={'personMastershipsTitle'}><b>Способности:</b></div>
            { masterships && masterships.map(({ Skill, Mastery}, index) => (
                <CharacterMastership skill={Skill} mastery={Mastery} key={index} />
            ))}
        </div>}
    </div>
);

export default Character;