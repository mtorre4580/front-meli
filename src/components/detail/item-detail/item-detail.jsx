import './item-detail.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Price from '../../commons/price/price';
import Condition from '../../commons/condition/condition';
import Breadcrumb from '../../commons/breadcrumb/breadcrumb';

const ItemDetail = ({item, categories}) => (
    <section className="container">
        <Breadcrumb categories={categories} />
        <div className="container item-detail">
            <div className="row">
                <div className="col-xs-12 col-md-6 offset-md-2">
                    <figure className="item-detail-image">
                        <img src={item.picture} alt={item.title} className="img-fluid" />
                    </figure>
                </div>
                <div className="col-xs-12 col-md-4">
                    <Condition condition={item.condition} sold_quantity={item.sold_quantity} />
                    <h1 className="item-detail-title">{item.title}</h1>
                    <Price value={item.price} />
                    <button type="button" className="btn btn-item-buy">Comprar</button>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-xs-12 col-md-8 item-detail-description-ctn">
                    <h2 className="item-detail-title">Descripción del producto</h2>
                    <p className="item-description">{item.description}</p>
                </div>
            </div>
        </div>
    </section>
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


