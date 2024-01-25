import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./Reducer";
import axios from "axios";
import actions from "./actionTypes";

const { getProductsBegin,
    getProductsSuccess,
    getProductsFailure,
    getProductBegin,
    getProductSuccess,
    getProductFailure,
    getCategoriesBegin,
    getCategoriesSuccess,
    getCategoriesFailure,
} = actions;



const initialValue = {
    productsloading: false,
    products: [],
    error: null,
    productLoading: null,
    product: null
}
const GlobalContext = createContext({
    ...initialValue,
    getAllProducts: () => { },
    getSingleProduct: () => { },
    getCategories: () => { },
})

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    const getAllProducts = async (search = "", category_id, page = 1, tags = "", labels = "", themes = "", limit = 30, order = "new") => {
        dispatch(getProductsBegin())
        try {
            const response = await axios(`https://stl-api.efmt.app/f/api/looks/list?limit=${limit}&page=${page || 1}&tags=${tags}&search=${search}${category_id ? `&category_id=${category_id}` : ""}&labels=${labels}&themes=${themes}&order=${order}`)
            if (response.status === 200) {
                dispatch(getProductsSuccess(response.data))
            }
            else {
                throw response
            }
        } catch (error) {
            dispatch(getProductsFailure(error))
        }
    }
    const getSingleProduct = async (id) => {
        dispatch(getProductBegin())
        try {
            const response = await axios(`https://stl-api.efmt.app/f/api/looks/${id}`)
            if (response.status === 200) {
                dispatch(getProductSuccess(response.data))
                // let config = {
                //     method: 'get',
                //     maxBodyLength: Infinity,
                //     url:`https://www.efavormart.com/search?q=${response.data.shop_look.products.map(obj => `id:${obj.product_id}`).join(' OR ')}&type=product&view=tw-shop-the-look`,
                //     credentials: 'same-origin',
                //     // headers: { 
                //     //   'Cookie': '_cmp_a=%7B%22purposes%22%3A%7B%22a%22%3Atrue%2C%22p%22%3Atrue%2C%22m%22%3Atrue%2C%22t%22%3Atrue%7D%2C%22display_banner%22%3Afalse%2C%22sale_of_data_region%22%3Afalse%7D; _landing_page=%2Fsearch%3Fq%3Did%3A6890497081390%2520OR%2520id%3A6782896570414%2520OR%2520id%3A6783481872430%2520OR%2520id%3A4715200315438%2520OR%2520id%3A6707317473326%2520OR%2520id%3A6810000261166%26type%3Dproduct%26view%3Dtw-shop-the-look; _orig_referrer=; _shopify_s=d7c4a3cb-d736-4523-8d97-54efade523e0; _shopify_y=fa497a56-3ecd-4ca0-affe-92f5e31702ed; cart_currency=USD; localization=US; secure_customer_sig=',
                //     // }
                //   };

                // const resp=await axios(config)
                // console.log(resp.data);

            }

            else {
                throw response
            }
        } catch (error) {
            dispatch(getProductFailure(error))
        }
    }
    const getCategories = async () => {
        dispatch(getCategoriesBegin())
        try {
            const response = await axios(`https://stl-api.efmt.app/f/api/categories`)
            if (response.status === 200) {
                dispatch(getCategoriesSuccess(response.data))
            }
            else {
                throw response
            }
        } catch (error) {
            dispatch(getCategoriesFailure(error))
        }
    }
    return (
        <GlobalContext.Provider value={{ ...state, getAllProducts, getSingleProduct, getCategories }}>
            {children}
        </GlobalContext.Provider>
    )
}
GlobalProvider.propTypes = {
    children: PropTypes.node
}
export { GlobalContext, GlobalProvider }