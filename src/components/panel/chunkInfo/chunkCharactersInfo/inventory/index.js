import React from 'react';
import './style.css';
import Item from "./Item";

const Inventory = ({ items, closeInventory }) => (
    <div className={'inventoryWrapper'}>
        <div className={'inventoryHeader'} onClick={closeInventory}>
            <div className={'inventoryTitle'}>Инвентарь ({Object.keys(items).length})</div>
            <div className={'inventoryClose'}>Закрыть</div>
        </div>
        {Object.keys(items).map((key) => {
            const { creationDate, expDate, id, limit, name, quality, weight } = items[key];
            return <Item
                // creationDate={CreationDate}
                // expDate={ExpDate}
                // id={ID}
                // limit={Limit}
                name={name}
                // quality={Quality}
                // weight={Weight}
            />
        }

            )}
    </div>
);

export default Inventory;