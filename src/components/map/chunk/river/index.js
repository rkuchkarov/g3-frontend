import React from "react";
import {calculateRiverCoordinates} from "../../../../utils/chunk";

const River = ({ chunkX, chunkY, size, from, to }) => {

    const coordinates = calculateRiverCoordinates(chunkX, chunkY, from, to);

    return (
        <line
            x1={coordinates.x1}
            y1={coordinates.y1}
            x2={coordinates.x2}
            y2={coordinates.y2}
            stroke={'blue'}
            strokeWidth={size * 1.3} />
    )
};

export default River;