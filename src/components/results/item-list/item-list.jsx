import React from 'react';
import Item from '../item/item';
import PropTypes from 'prop-types';
import Breadcrumb from '../../commons/breadcrumb/breadcrumb';

const ItemList = ({items, categories}) => {
    return (
        <div className="container">
            <section>
                <Breadcrumb categories={categories}/>
                { items.map(item => <Item item={item} key={item.id} />) }     
            </section>   
        </div>
    );
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        picture: PropTypes.string,
        price: PropTypes.shape({
            currency: PropTypes.string,
            amount: PropTypes.number
        })
    })),
    categories: PropTypes.arrayOf(PropTypes.string)
}

export default ItemList;