import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as selectors from "../selectors/selectors";
import Map from "../components/map";
import { openMap, openChunkInfo, clickNextDay } from "../actions";
import Panel from "../components/panel";
import './style.css';

class MapContainer extends Component {
    constructor(props) {
        super(props);
        props.openMap();
    }

    render() {
        const { chunks, isChunkOpened, openedChunkInfo, date, openChunkInfo, openedChunkId, clickNextDay, persons } = this.props;

        return(
            <div className={'container'}>
                <Panel openedChunkId={openedChunkId} persons={persons} date={date}  isChunkOpened={isChunkOpened} openedChunkInfo={openedChunkInfo} clickNextDay={clickNextDay} />
                <Map chunks={chunks} onClickChunk={openChunkInfo} openedChunkId={openedChunkId}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chunks: selectors.getChunks(state),
        persons: selectors.getPersons(state),
        isChunkOpened: selectors.getIsChunkOpened(state),
        openedChunkInfo: selectors.getOpenedChunkInfo(state),
        openedChunkId: selectors.getChunkOpenedId(state),
        date: selectors.getDate(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openMap,
        openChunkInfo,
        clickNextDay
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);