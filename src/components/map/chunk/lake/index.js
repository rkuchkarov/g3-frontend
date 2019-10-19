import React from "react";
import { CHUNK_HEIGHT, CHUNK_WIDTH, MAX_CHUNK_TERRAIN_COVERAGE } from "../../../../utils/chunk";

const Lake = ({ chunkX, chunkY, size }) => {
    const lakeX = chunkX + (CHUNK_WIDTH / 2);
    const lakeY = chunkY + (CHUNK_HEIGHT / 2);
    const sizeX = (CHUNK_WIDTH / 100) * (size * (100/MAX_CHUNK_TERRAIN_COVERAGE));
    const sizeY = (CHUNK_HEIGHT / 100) * (size * (100/MAX_CHUNK_TERRAIN_COVERAGE));

    return (
        <ellipse cx={lakeX} cy={lakeY} rx={sizeX / 2} ry={sizeY / 3.5} fill={'blue'} />
    )
};

export default Lake;