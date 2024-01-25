import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const ProductItem = ({ product }) => {

    return (
        <Link to={`/category/${product.id}`} className="card">
            <img src={product.image_url} alt={product.title} />
            <div className="content">
                <p>
                    <span>
                        {product.title}
                    </span>
                </p>
            </div>
        </Link>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object
};

export default ProductItem;