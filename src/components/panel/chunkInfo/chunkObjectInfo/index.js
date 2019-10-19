import React from 'react';
import _ from 'lodash';
import MastershipsInfo from "./mastershipInfo";
import './style.css';

const TRANSLATES = {
    meadow: 'поле',
    river: 'река',
    forest: 'лес',
    swamp: 'болото',
    hill: 'гора',
    lake: 'озеро'
};

const ChunkObjectInfo = ({ chunkType, chunkInfo }) => (
    <div className={'chunkObjectInfo'}>
        { chunkInfo && chunkInfo.map(({ size, masterships}, index) => (
            <>
                <div className={'chunkType'}>{_.get(TRANSLATES, chunkType, chunkType)}</div>
                <div key={index}>
                    <div>Размер: {size}</div>
                    <MastershipsInfo masterships={masterships}/>
                </div>
            </>
        ))}

    </div>
);

export default ChunkObjectInfo;