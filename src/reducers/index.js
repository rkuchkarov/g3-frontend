import * as A from '../actions';

const initialState = {
    chunks: [],
    openedChunk: {
        isOpened: false,
        chunkId: null,
        chunkInfo: null
    },
    persons: [],
    date: null
};

const reducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {

        case A.RESET_STATE:
            return initialState;

        case A.CHUNK_INFO_OPENED:
            return {
                ...state,
                openedChunk: {
                    ...state.openedChunk,
                    isOpened: true,
                    chunkId: action.id
                }
            };

        case A.MAP_FETCHED:
            return {
                ...state,
                chunks: action.chunks
            };

        case A.DATE_FETCHED:
            return {
                ...state,
                date: action.date
            };

        case A.CHUNK_INFO_FETCHED:
            return {
                ...state,
                openedChunk: {
                    ...state.openedChunk,
                    chunkInfo: action.info
                }
            };

        case A.PERSONS_FETCHED:
            return {
                ...state,
                persons: action.persons
            };

        default:
            return state;
    }
};

export default reducer;