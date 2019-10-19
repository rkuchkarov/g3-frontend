import React from "react";
import _ from "lodash";
import ChunkInfo from "./chunkInfo";
import './style.css';

const Panel = ({ date, openedChunkInfo }) => {
    const chunkObjects = _.map(openedChunkInfo, (value, prop) => ({ type: prop, info: value }));
    const isChunkInfoShown = chunkObjects && chunkObjects.length > 0;

    return (
        <div className={'panel'}>
            <div className={'title'}>
                {date}
            </div>
            {
                isChunkInfoShown && <ChunkInfo chunkObjects={chunkObjects}/>
            }
        </div>
    );
};

export default Panel;