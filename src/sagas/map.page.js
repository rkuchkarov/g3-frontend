import { takeLatest, call, put, fork, select } from 'redux-saga/effects'
import _ from 'lodash';
import * as A from '../actions';
import * as selectors from "../selectors/selectors";
import G3Service from "../services/g3-service";

function* fetchMap() {
    try {
        const response = yield call(G3Service.getChunks);
        yield put(A.fetchedMap(response.result.items));
    } catch (e) {
        console.log('error', e);
    }
}

function* fetchChunkInfo() {
    const openedChunkId = yield select(selectors.getChunkOpenedId);
    try {
        yield put(A.fetchChunkInfo());
        const response = yield call(G3Service.getChunkInfo, openedChunkId);
        const result = _.get(response, 'result', {});
        yield put(A.fetchedChunkInfo(result));
    } catch (e) {
        console.log('error', e);
    }
}

function* watchMapPage() {
    yield takeLatest(A.MAP_FETCH, fetchMap);
}

export default function* mapPageSaga() {
    yield fork(watchMapPage);
    yield takeLatest(A.MAP_OPEN, mapPageFlow);
    yield takeLatest(A.CHUNK_INFO_OPENED, fetchChunkInfo);
}

function* mapPageFlow() {
    yield put(A.resetState());
    yield put(A.fetchMap());
}