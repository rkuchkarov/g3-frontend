import _ from 'lodash';

export const getChunks = (state) => _.get(state, 'chunks');
export const getPersons = (state) => _.get(state, 'persons');
export const getIsChunkOpened = (state) => _.get(state, 'openedChunk.isOpened');
export const getInventoryPersonId = (state) => _.get(state, 'openedChunk.openedInventory');
export const getChunkOpenedId = (state) => _.get(state, 'openedChunk.chunkId');
export const getOpenedChunkInfo = (state) => _.get(state, 'openedChunk.chunkInfo', null);
export const getDate = (state) => _.get(state, 'date');