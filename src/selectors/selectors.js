import _ from 'lodash';

export const getChunks = (state) => _.get(state, 'chunks');
export const getIsChunkOpened = (state) => _.get(state, 'openedChunk.isOpened');
export const getChunkOpenedId = (state) => _.get(state, 'openedChunk.chunkId');
export const getOpenedChunkInfo = (state) => _.get(state, 'openedChunk.chunkInfo', null);
export const getDate = (state) => '5 ноября';