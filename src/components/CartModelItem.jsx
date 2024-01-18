import PropTypes from 'prop-types';
import { useState } from 'react';
import { useActions, useVariables } from "@tapcart/webbridge-react";


const CartModelItem = ({ item, active }) => {
    const {
        addToCart,
        openProduct,
        openCollection,
        applyDiscount,
        removeDiscounts,
        showToast
      } = useActions();
    
// const addToCartAction = (variantId, count) => {
//       addToCart({
//         lineItems: [
//             {
//                 variantId: variantId.toString(),
//                 quantity: count
//             }
//         ]
//     })
// }

  const openProductAction = (productId) => {
    openProduct({ productId: productId.toString() });
  };

    const [count, setCount] = useState(1)
    return (
        <div className={`${active === item.product_id ? "active" : ""} model-items model-items-${item.product_id}`}>
            <div className="model_items_box">
                <div className="box_img">
                    <img src={item.image_url} alt="image_url" />
                </div>
                <div className="product-info">
                    <p>
                        {item.title}
                    </p>
                    <strong className="price">
                        <span className="super">$</span>
                        <span className="price_dollar">6</span>
                        <span className="super">.49</span>
                    </strong>
                    <del className="del">$10.99</del>
                    <span className="saved">Save $4.50</span>
                    <div className="count_box">
                        <div className='counter'>
                        <button className="count_btn" onClick={() => setCount(pre => pre === 0 ? 0 : pre - 1)}>-</button>
                        <input type="text" value={count} className="count_num" />
                        <button className="count_btn" onClick={() => setCount(pre => pre + 1)}>+</button>
                        </div>
                       <button className="add_to_cart" onClick={() => {
                            console.log({ id: item, count })
                            //addToCartAction(item.variant_id, count)
                            openProductAction(item.product_id)
                        }}>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartModelItem.propTypes = {
    item: PropTypes.object,
    active: PropTypes.number
};

export default CartModelItem;