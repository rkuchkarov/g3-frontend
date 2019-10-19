import React from "react";
import Chunk from "./chunk";
import './style.css';

const Map = ({ chunks, onClickChunk, openedChunkId  }) => {

    return (
        <div className={'mapWrapper'} >
            <svg className={'map'}>
                {chunks.map((chunk, index) => {
                    const isOpened = openedChunkId === chunk.id;
                    return (<Chunk onClickChunk={onClickChunk} key={index} info={chunk} isOpened={isOpened} />)
                })}
            </svg>
        </div>
    );
};

export default Map;