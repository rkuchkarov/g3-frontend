import React from "react";
import {calculateRiverCoordinates} from "../../../../utils/chunk";

const Road = ({ chunkX, chunkY, size, direction }) => {

    const coordinates = calculateRiverCoordinates(chunkX, chunkY, direction);

    return (
        <line
            x1={coordinates.x1}
            y1={coordinates.y1}
            x2={coordinates.x2}
            y2={coordinates.y2}
            stroke={'#795548'}
            strokeWidth={size * 1.3} />
    )
};

export default Road;