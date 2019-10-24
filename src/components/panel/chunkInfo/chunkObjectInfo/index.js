import React from 'react';
import _ from 'lodash';
import MastershipsInfo from "./mastershipInfo";
import './style.css';

const TRANSLATES = {
    meadow: 'поле',
    rivers: 'река',
    forest: 'лес',
    swamp: 'болото',
    hill: 'холм',
    lake: 'озеро'
};

const ChunkObjectInfo = ({ chunkType, chunkInfo }) => {
    const isArray = chunkType === 'lake' || chunkType === 'rivers';

    const renderInfo = (name, size, masterships, index) => (
        <>
            <div className={'chunkType'}>{_.get(TRANSLATES, chunkType, chunkType)}</div>
            <div key={index}>
                <div>Размер: {size}</div>
                <MastershipsInfo masterships={masterships}/>
            </div>
        </>
    );

    return (
        <div className={'chunkObjectInfo'}>
            { !isArray && renderInfo(_.get(TRANSLATES, chunkType, chunkType), chunkInfo.size, chunkInfo.masterships, chunkInfo.id)}
            { isArray && chunkInfo.map(({ size, masterships}, index) => (
                renderInfo(_.get(TRANSLATES, chunkType, chunkType), size, masterships, index)
            ))}
        </div>
    );
};

export default ChunkObjectInfo;