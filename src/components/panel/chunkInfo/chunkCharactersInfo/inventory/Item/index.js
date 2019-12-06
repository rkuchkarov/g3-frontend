import React from 'react';
import fishIcon from './fishIcon.png';
import './style.css';

const Item = ({ creationDate, expDate, id, limit, name, quality, weight }) => {

        return (
            <div className={'itemWrapper'}>
                    <img className={'itemIcon'} src={fishIcon}/>
                    <div className={'itemName'}>{name}</div>
                    {/*<div>{quality}</div>*/}
                    {/*<div>{weight}</div>*/}
                    {/*<div>{creationDate}</div>*/}
                    {/*<div>{expDate}</div>*/}
                    {/*<div>{limit}</div>*/}
            </div>
        );
};

export default Item;