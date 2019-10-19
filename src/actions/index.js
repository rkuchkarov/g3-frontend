export const RESET_STATE = 'RESET_STATE';
export const MAP_OPEN = 'MAP_OPEN';
export const CHUNK_INFO_OPENED = 'CHUNK_INFO_OPENED';
export const MAP_FETCH = 'MAP_FETCH';
export const MAP_FETCHED = 'MAP_FETCHED';
export const CHUNK_INFO_FETCH = 'CHUNK_INFO_FETCH';
export const CHUNK_INFO_FETCHED = 'CHUNK_INFO_FETCHED';

export const resetState = () => {
    return {
        type: RESET_STATE
    }
};

export const openMap = () => {
    return {
        type: MAP_OPEN
    }
};

export const openChunkInfo = (id) => {
    return {
        type: CHUNK_INFO_OPENED,
        id
    }
};

export const fetchMap = () => {
    return {
        type: MAP_FETCH
    }
};

export const fetchedMap = (chunks) => {
    return {
        type: MAP_FETCHED,
        chunks
    }
};

export const fetchChunkInfo = () => {
    return {
        type: CHUNK_INFO_FETCH
    }
};

export const fetchedChunkInfo = (info) => {
    return {
        type: CHUNK_INFO_FETCHED,
        info
    }
};