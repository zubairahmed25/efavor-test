import { useContext, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/Context";
import ProductsResults from "../components/ProductsResults";

const Category = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { getAllProducts, products } = useContext(GlobalContext);
  const ref = useRef()
  useEffect(() => {
    getAllProducts(searchParams.get("search")||"", searchParams.get("id"), searchParams.get("page"), searchParams.get("tags")||"", searchParams.get("labels")||"")
  }, [searchParams])
  return (
    <div className="container">
      <div className="results">
        <div style={{ maxWidth: 220, width: "100%" }}></div>
        <h2>{products.total} Results</h2>
        <div className="search-input-wrapper">
          <input type="text" className="search-input" placeholder="Search for Looks" ref={ref} />
          <button type="button" onClick={() => {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set('search', ref.current.value);
            setSearchParams(newSearchParams.toString());
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
      </div>
      <ProductsResults />
    </div>
  );
};

export default Category;