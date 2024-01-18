import { Suspense, lazy, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Context";
import Skeleton from "react-loading-skeleton";
const CartModelItem = lazy(() => import("./CartModelItem"));

function ModelContent() {
  const [launchModel, setLaunchModel] = useState(true);
  const { id } = useParams()
  const handleLaunchModel = () => {
    console.log("close");
    setLaunchModel((launchModel) => !launchModel)
  };
  const { getSingleProduct, product } = useContext(GlobalContext)
  const [active, setActive] = useState(null)
  useEffect(() => {
    getSingleProduct(id)
  }, [id])
  return (
    launchModel &&
    <div className="custom-model">
      <div
        className={"bg-darker"}
        onClick={handleLaunchModel}
      />
      <div className="model">
        <div className="btn_close" onClick={handleLaunchModel}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            width="18"
            viewBox="0 0 384 512"
            fill="currentColor"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
        <div className="model_content">
          <div className="model_img">
            <div style={{ position: "relative" }}>
              <img src={product?.shop_look.square_image_url} alt="square_image_url" />
              <ul className="model-dots">
                {
                  product?.shop_look?.products.map(obj => <li key={`productdot-${obj.product_id}`} className={active === obj.product_id ? "active" : ""} style={{ left: `${obj.x_coord}%`, top: `${obj.y_coord}%` }} onClick={() => {
                    const productItem=document.querySelector(`.model-items-${obj.product_id}`)

                    document.querySelector(".model").scrollTo({
                      top: productItem.offsetTop,
                      behavior: 'smooth' 
                    });
                    setActive(obj.product_id)
                  }} />)
                }
              </ul>
            </div>
          </div>
          <div className="items_container">
            {
              product?.shop_look?.products.map((item) => (<Suspense key={item.product_id} fallback={<Skeleton />}>
                <CartModelItem active={active} item={item} />
              </Suspense>))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelContent;
