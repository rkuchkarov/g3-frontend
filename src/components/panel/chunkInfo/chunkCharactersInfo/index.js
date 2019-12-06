import React from 'react';
import fisher from './fisher.png';
import './style.css';
import CharacterMastership from "./mastership";
import Inventory from "./inventory";

const Character = ({ personId, inventoryPersonId, isMale, inventory, action, name, age, masterships, closeInventory, openInventory }) => {
    const isInventoryShown = inventoryPersonId === personId;

    const handleClick = () => {
        if (inventoryPersonId === personId) {
            closeInventory();
        } else {
            openInventory(personId);
        }
    };

    return (
        <>
            {isInventoryShown && <Inventory items={inventory} closeInventory={closeInventory} />}
            <div className={'characterWrapper'} onClick={handleClick}>
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
                    { masterships && masterships.map(({ skill, mastery}, index) => (
                        <CharacterMastership skill={skill} mastery={mastery} key={index} />
                    ))}
                </div>}
            </div>
        </>
    );
};

export default Character;