import React from 'react';
import './style.css';

const MastershipsInfo = ({ masterships }) => (
    <div className={'chunkObjectInfo'}>
        <div><b>Профы</b></div>
        { masterships && masterships.map(({ capacity, max_capacity, mastery}, index) => (
            <div key={index}>
                <div>{mastery.name} ({capacity}/{max_capacity})</div>
            </div>
        ))}

    </div>
);

export default MastershipsInfo;