export const RESET_STATE = 'RESET_STATE';
export const MAP_OPEN = 'MAP_OPEN';
export const CHUNK_INFO_OPENED = 'CHUNK_INFO_OPENED';
export const MAP_FETCH = 'MAP_FETCH';
export const PERSONS_FETCH = 'PERSONS_FETCH';
export const MAP_FETCHED = 'MAP_FETCHED';
export const PERSONS_FETCHED = 'PERSONS_FETCHED';
export const DATE_FETCHED = 'DATE_FETCHED';
export const DATE_FETCH = 'DATE_FETCH';
export const CHUNK_INFO_FETCH = 'CHUNK_INFO_FETCH';
export const CHUNK_INFO_FETCHED = 'CHUNK_INFO_FETCHED';
export const NEXT_DAY_CLICKED = 'NEXT_DAY_CLICKED';

export const resetState = () => {
    return {
        type: RESET_STATE
    }
};

export const clickNextDay = () => {
    return {
        type: NEXT_DAY_CLICKED
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

export const fetchPersons = () => {
    return {
        type: PERSONS_FETCH
    }
};

export const fetchDate = () => {
    return {
        type: DATE_FETCH
    }
};

export const fetchedDate = (date) => {
    return {
        type: DATE_FETCHED,
        date
    }
};

export const fetchedMap = (chunks) => {
    return {
        type: MAP_FETCHED,
        chunks
    }
};

export const fetchedPersons = (persons) => {
    return {
        type: PERSONS_FETCHED,
        persons
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