import React from 'react';
import './style.css';
import ChunkObjectInfo from "./chunkObjectInfo";

const ChunkInfo = ({ chunkObjects }) => (
    <div className={'chunkObject'}>
        <div className={'objectsTitle'}>Объекты</div>
        { chunkObjects.map((chunkObject, index) => {
            const chunkType = chunkObject.type;
            const chunkInfo = chunkObject.info;
            if (!chunkInfo) {
                return null;
            }
            return (<ChunkObjectInfo chunkType={chunkType} chunkInfo={chunkInfo} key={index}/>)
        })
        }
    </div>
);

export default ChunkInfo;