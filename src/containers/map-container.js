import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as selectors from "../selectors/selectors";
import Map from "../components/map";
import { openMap, openChunkInfo, clickNextDay, closeInventory, openInventory } from "../actions";
import Panel from "../components/panel";
import './style.css';

class MapContainer extends Component {
    constructor(props) {
        super(props);
        props.openMap();
    }

    render() {
        const {
            chunks,
            isChunkOpened,
            inventoryPersonId,
            openedChunkInfo,
            date,
            openChunkInfo,
            openedChunkId,
            clickNextDay,
            persons,
            closeInventory,
            openInventory
        } = this.props;

        return(
            <div className={'container'}>
                <Panel
                    inventoryPersonId={inventoryPersonId}
                    openedChunkId={openedChunkId}
                    persons={persons}
                    date={date}
                    isChunkOpened={isChunkOpened}
                    openedChunkInfo={openedChunkInfo}
                    clickNextDay={clickNextDay}
                    closeInventory={closeInventory}
                    openInventory={openInventory}
                />
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
        inventoryPersonId: selectors.getInventoryPersonId(state),
        openedChunkInfo: selectors.getOpenedChunkInfo(state),
        openedChunkId: selectors.getChunkOpenedId(state),
        date: selectors.getDate(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        openMap,
        openChunkInfo,
        clickNextDay,
        closeInventory,
        openInventory
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);