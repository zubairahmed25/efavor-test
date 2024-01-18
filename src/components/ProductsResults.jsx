import { Suspense, lazy, useContext } from "react";
import { GlobalContext } from "../GlobalContext/Context";
import Pagination from "./Pagination";
import Skeleton from "react-loading-skeleton";
import ProductSkeltons from "./Skeltons";
const ProductItem = lazy(() => import("./ProductItem"));

function ProductsResults() {
  const { products, productsloading } = useContext(GlobalContext)
  return (
    <div>
      {productsloading ? (
        <ProductSkeltons />) :
        <div>
          <div className="row">
            <div className="column">
              {
                products.shop_looks?.slice(0, 10).map((product) => (
                  <Suspense key={product.id} fallback={<Skeleton height={205} />}>
                    <ProductItem product={product} />
                  </Suspense>
                ))
              }
            </div>
            <div className="column">
              {
                products.shop_looks?.slice(10, 20).map((product) => (
                  <Suspense key={product.id} fallback={<Skeleton height={205} />}>
                    <ProductItem product={product} />
                  </Suspense>
                ))
              }
            </div>
            <div className="column">
              {
                products.shop_looks?.slice(20, 30).map((product) => (
                  <Suspense key={product.id} fallback={<Skeleton height={205} />}>
                    <ProductItem product={product} />
                  </Suspense>
                ))
              }
            </div>

          </div>
          <Pagination active={products?.page} totalPages={Math.ceil(products?.total / products?.limit)} />
        </div>
      }
    </div>
  );
}

export default ProductsResults;
