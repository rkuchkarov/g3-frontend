import React from 'react';
import './style.css';
import ChunkObjectInfo from "./chunkObjectInfo";
import Character from "./chunkCharactersInfo";

const ChunkInfo = ({ openedChunkId, chunkObjects, persons }) => {
    const personsInChunk = persons.filter((person) => person.chunk_id === openedChunkId);
    const isPersonsShown = personsInChunk.length > 0;

    return (
        <div className={'chunkObject'}>
            <div className={'objectsTitle'}>Объекты</div>
            { chunkObjects.map((chunkObject, index) => {
                const { type: chunkType, info: chunkInfo } = chunkObject;
                if (!chunkInfo) {
                    return null;
                }
                return (<ChunkObjectInfo chunkType={chunkType} chunkInfo={chunkInfo} key={index}/>)
            })
            }
            {isPersonsShown &&
                <>
                    <div className={'personsTitle'}>Персонажи</div>
                    { personsInChunk.map((person, index) => {
                        const {name, age, mastership, is_male} = person;
                        return (<Character isMale={is_male} masterships={mastership} name={name} age={age} key={index}/>)})
                    }
                </>
            }
        </div>
    );
};

export default ChunkInfo;