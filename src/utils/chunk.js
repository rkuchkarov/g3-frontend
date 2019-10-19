import _ from 'lodash';
export const MAP_WIDTH = -100;
export const MAP_HEIGHT = -400;
export const CHUNK_WIDTH = 100;
export const CHUNK_HEIGHT = 100;
export const MAX_CHUNK_TERRAIN_COVERAGE = 5;
const DEFAULT_COLOR = '#bcaaa4';
const MAP_TYPE_COLORS = {
    'meadow': '#66bb6a',
    'forest': '#00600f',
    'field': '#fdd835',
    'swamp': '#524c00',
    'hill': '#ffe082',
    'mountain': '#8d6e63',
    'snow': '#bdbdbd',
    'desert': '#ffd54f',
    'lake': '#00838f',
    'sea': '#4dd0e1'
};

export const calculateChunkPosition = (x, y) => {
    const horizontalChunksNum = MAP_WIDTH / CHUNK_WIDTH;
    const verticalChunksNum = MAP_HEIGHT / CHUNK_HEIGHT;
    const horizontalCenterChunk = _.round(horizontalChunksNum / 2);

    const verticalCenterChunk = _.round(verticalChunksNum / 2);

    const targetChunkNumberVertical = horizontalCenterChunk + x;
    const targetChunkNumberHorizontal = verticalCenterChunk - y;

    return {
        x: (targetChunkNumberVertical * CHUNK_WIDTH) - CHUNK_WIDTH,
        y: (targetChunkNumberHorizontal * CHUNK_HEIGHT) - CHUNK_HEIGHT
    }
};

export const getChunkType = (terrains) => {
    let maxTerrainType = {'type': null, size: 0};
    terrains.forEach((value) => {
        const size = _.get(value, 'size', null);
        if (size && size > maxTerrainType.size) {
            maxTerrainType = {type: value.type, size: size}
        }
    });
    return maxTerrainType.type;
};

export const getChunkColor = (terrains) => {
    const chunkType = getChunkType(terrains);
    return _.get(MAP_TYPE_COLORS, chunkType, DEFAULT_COLOR);
};

const calculateXRiver = (chunkX, side) => {
    switch (side) {
        case 'N':
        case 'S':
        case 'C':
            return chunkX + (CHUNK_WIDTH / 2);
        case 'E':
            return chunkX + CHUNK_WIDTH;
        case 'W':
            return chunkX;
        default:
            console.log('ERROR!', chunkX, side)
    }
};

const calculateYRiver = (chunkY, side) => {
    switch (side) {
        case 'N':
            return chunkY;
        case 'S':
            return chunkY + CHUNK_HEIGHT;
        case 'E':
        case 'W':
        case 'C':
            return chunkY + (CHUNK_HEIGHT / 2);
        default:
            console.log('ERROR!', chunkY, side, side === 'S')
    }
};

export const calculateRiverCoordinates = (chunkX, chunkY, from, to) => {
    let x1 = calculateXRiver(chunkX, from);
    let y1 = calculateYRiver(chunkY, from);
    let x2 = calculateXRiver(chunkX, to);
    let y2 = calculateYRiver(chunkY, to);
    return { x1, y1, x2, y2 };
};