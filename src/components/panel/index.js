import React from "react";
import _ from "lodash";
import ChunkInfo from "./chunkInfo";
import './style.css';

const Panel = ({ date, openedChunkId, openedChunkInfo, clickNextDay, persons }) => {
    const chunkObjects = _.map(openedChunkInfo, (value, prop) => ({ type: prop, info: value }));
    const isChunkInfoShown = chunkObjects && chunkObjects.length > 0;

    return (
        <div className={'panel'}>
            <div className={'title'}>
                {date && <div>{date.day}&nbsp;день {date.ten}&nbsp;декады {date.month}&nbsp;месяца {date.year}&nbsp;года</div>}
            </div>
            {
                isChunkInfoShown && <ChunkInfo openedChunkId={openedChunkId} persons={persons} chunkObjects={chunkObjects}/>
            }
            <div className={'nextDay'} onClick={clickNextDay}>Следующий день</div>
        </div>
    );
};

export default Panel;