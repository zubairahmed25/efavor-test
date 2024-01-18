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