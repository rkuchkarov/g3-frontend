import React from 'react';
import './style.css';
import ChunkObjectInfo from "./chunkObjectInfo";

const ChunkInfo = ({ chunkObjects }) => (
    <div className={'chunkObject'}>
        <div className={'objectsTitle'}>Объекты</div>
        { chunkObjects.map((chunkObject, index) => {
            const { type: chunkType, info: chunkInfo } = chunkObject;
            console.log(chunkObject);
            if (!chunkInfo) {
                return null;
            }
            return (<ChunkObjectInfo chunkType={chunkType} chunkInfo={chunkInfo} key={index}/>)
        })
        }
    </div>
);

export default ChunkInfo;