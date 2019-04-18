import './item-detail.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Price from '../../commons/price/price';
import Condition from '../../commons/condition/condition';
import Breadcrumb from '../../commons/breadcrumb/breadcrumb';

const ItemDetail = ({item, categories}) => (
    <div className="container">
        <Breadcrumb categories={categories} />
        <section className="item-detail">
            <div className="item-detail-ctn">
                <div className="item-detail-image">
                    <img src={item.picture} alt={item.title} />
                </div>
                <div className="item-detail-header">
                    <Condition condition={item.condition} sold_quantity={item.sold_quantity} />
                    <h2 className="item-detail-title">{item.title}</h2>
                    <Price value={item.price} />
                    <button type="button" className="btn btn-item-buy">Comprar</button>
                </div>
            </div>
            <div className="item-description-ctn">
                <h3>Descripción del producto</h3>
                <div className="item-description">{item.description}</div>
            </div>
        </section>
    </div>
);

ItemDetail.propTypes = {
   item: PropTypes.shape({
       picture: PropTypes.string,
       title: PropTypes.string,
       condition: PropTypes.string,
       sold_quantity: PropTypes.number,
       price: PropTypes.shape({
            currency: PropTypes.string,
            amount: PropTypes.number
       }),
       description: PropTypes.string
   })
}

export default ItemDetail;


