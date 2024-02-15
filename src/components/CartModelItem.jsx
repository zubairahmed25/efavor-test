import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useActions, useVariables } from "@tapcart/webbridge-react";


const CartModelItem = ({ item, active }) => {
    const {
        addToCart,
        openProduct,
        openCollection,
        removeDiscounts,
        showToast
      } = useActions();

      const [productData, setProductData] = useState({});
      const getProductData = async () => {
          const GRAPHQL_URL = `https://efavormart-new.myshopify.com/api/2023-01/graphql.json`;
          const productQuery = () => `query {product(id: "gid://shopify/Product/${item.product_id}") {
              id
              title
              variants(first: 1) {
                edges {
                    node {
                        price {
                            amount
                        }
                        compareAtPrice { 
                            amount 
                        }
                    }
                }
             }
              priceRange {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                    amount
                  }
              }
              featuredImage {
                url
              }
            }
          }`;
          
          const GRAPHQL_BODY = () => {
            return {
              async: true,
              crossDomain: true,
              method: "POST",
              headers: {
                "X-Shopify-Storefront-Access-Token": "69728f1602a4d743a4a0a38adc65d0ca",
                "Content-Type": "application/graphql",
              },
              body: productQuery(),
            };
          };
          
          const res = await fetch(GRAPHQL_URL, GRAPHQL_BODY());
          const data = await res.json();
          setProductData(data.data)
      }
  
      useEffect(()=>{
          getProductData();
      }, [])

    
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

    // const [count, setCount] = useState(1)
    console.log("dataa", productData)
    console.log("productss", productData?.product?.variants?.edges[0]?.node?.compareAtPrice?.amount)
    return (
        <div className={`${active === item.product_id ? "active" : ""} model-items model-items-${item.product_id}`}>
            <div onClick={()=>{openProductAction(item.product_id)}} className="model_items_box">
                <div className="box_img">
                    <img src={item.image_url} alt="image_url" />
                </div>
                <div className="product-info">
                    <p style={{marginBottom:"1em"}}>
                        {item.title}
                       
                    </p>
                    <strong className="price">
                        <span className="super">$</span>
                        <span className="price_dollar">{productData?.product?.variants?.edges[0]?.node?.price?.amount}</span>
                        {/* <span className="super">.49</span> */}
                    </strong>
                    <del className="del">{productData?.product?.variants?.edges[0]?.node?.compareAtPrice?.amount}</del>
                    {/* <span className="saved">Save $4.50</span> */}
                    {/* <div className="count_box">
                        <div className='counter'>
                        <button className="count_btn" onClick={() => setCount(pre => pre === 0 ? 0 : pre - 1)}>-</button>
                        <input type="text" value={count} className="count_num" />
                        <button className="count_btn" onClick={() => setCount(pre => pre + 1)}>+</button>
                        </div>
                       <button className="add_to_cart" onClick={() => {
                            console.log({ id: item, count })
                            addToCartAction(item.variant_id, count)
                            // openProductAction(item.product_id)
                        }}>add to cart</button>
                    </div> */}
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