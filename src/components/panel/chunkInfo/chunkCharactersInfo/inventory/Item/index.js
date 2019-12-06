import React from 'react';
import _ from 'lodash';
import Tooltip from 'react-tooltip-lite';
import fishIcon from './fishIcon.svg';
import meatIcon from './meatIcon.svg';
import birdIcon from './birdIcon.svg';
import berryIcon from './berryIcon.svg';
import mushroomIcon from './mushroomIcon.svg';
import questionIcon from './questionIcon.svg';
import './style.css';

const ICONS_MAP = {
    fish: fishIcon,
    meat: meatIcon,
    bird: birdIcon,
    berry: berryIcon,
    mushroom: mushroomIcon
};

const Item = ({ creationDate, expDate, id, limit, name, quality, weight, category }) => {
    const icon = _.get(ICONS_MAP, category, questionIcon);
        return (
            <Tooltip direction={'right'} arrowSize={5} distance={0} content={
                <div className={'itemTooltip'}>
                    <div className={'tooltipTitle'}>{name}</div>
                    <div>Качество: {quality}</div>
                    <div>Вес: {weight}</div>
                    <div>Дата создания:{creationDate}</div>
                    <div>Дата протухания: {expDate}</div>
                    <div>Лимит: {limit}</div>
                </div>
            }>
                <div className={'itemWrapper'}>
                    <img className={'itemIcon'} src={icon} alt={'itemIcon'}/>
                    <div className={'itemName'}>{name}</div>
                </div>
            </Tooltip>

        );
};

export default Item;