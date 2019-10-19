import React from "react";

import { CHUNK_HEIGHT, CHUNK_WIDTH, calculateChunkPosition, getChunkColor } from "../../../utils/chunk";
import Lake from "./lake";
import River from "./river";
// import Road from "./road";
import './style.css';

const Chunk = ({ info, onClickChunk, isOpened }) => {
    const { x, y, id, terrains, rivers } = info;
    const coordinates = calculateChunkPosition(x, y);
    const chunkColor = getChunkColor(terrains);
    // const isLakeExist = 'lake' in terrains;
    // const isRoadsExists = 'roads' in terrains;

    const renderTerrain = (type, size, index) => {
        switch (type) {
            case 'lake':
                return <Lake chunkX={coordinates.x} chunkY={coordinates.y} size={size} key={index} />;
            default:
                return null;
        }
    };

    const handleClick = () => onClickChunk(id);

    return (
        <>
            <rect
                onClick={handleClick}
                className={`chunk ${isOpened ? ' opened': ''}`}
                x={coordinates.x}
                y={coordinates.y}
                width={CHUNK_WIDTH}
                height={CHUNK_HEIGHT}
                fill={chunkColor}
                strokeWidth={'3'}
                stroke={'black'}
                />
            { terrains.map(({ type, size }, index) => renderTerrain(type, size, index))}
            { rivers && (
                rivers.map(({ from, to, size }, index) => <River
                    chunkX={coordinates.x}
                    chunkY={coordinates.y}
                    from={from}
                    to={to}
                    size={size}
                    key={index}
                />
            ))
            }
            {/*{ isRoadsExists && (*/}
            {/*    info.terrains.roads.map((road) => <Road chunkX={coordinates.x} chunkY={coordinates.y} direction={road.direction} size={road.size} />*/}
            {/*    ))*/}
            {/*}*/}
        </>
    )
};

export default Chunk;