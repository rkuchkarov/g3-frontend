import React from 'react';
import _ from 'lodash';
import './style.css';
import ChunkObjectInfo from "./chunkObjectInfo";
import Character from "./chunkCharactersInfo";

const ChunkInfo = ({ inventoryPersonId, openedChunkId, chunkObjects, persons, closeInventory, openInventory }) => {
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
                        const {id, name, age, mastership, is_male, day_action: { action }, inventory} = person;
                        const masteryById = _.find(mastership, (m) => {
                            return m.mastery.id === action
                        });
                        const actionName = masteryById ? masteryById.mastery.name : action === 'waiting' ? 'Ждёт' : undefined;
                        return (
                            <Character
                                personId={id}
                                inventoryPersonId={inventoryPersonId}
                                inventory={inventory}
                                closeInventory={closeInventory}
                                openInventory={openInventory}
                                action={actionName}
                                isMale={is_male}
                                masterships={mastership}
                                name={name}
                                age={age}
                                key={index}
                            />)})
                    }
                </>
            }
        </div>
    );
};

export default ChunkInfo;