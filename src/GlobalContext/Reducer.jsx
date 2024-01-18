import actions from "./actionTypes";

const { GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_RESET,
    GET_PRODUCT_BEGIN,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    GET_CATEGORIES_BEGIN,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    GET_CATEGORIES_RESET,
 } = actions;


const reducer = (state, action) => {
    const { type, data, error, id } = action
    switch (type) {
        case GET_PRODUCTS_BEGIN:
            return {
                ...state,
                productsloading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsloading: false,
                products: data
            }
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                error
            }
        case GET_PRODUCTS_RESET:
            return {
                ...state
            }
        case GET_PRODUCT_BEGIN:
            return {
                ...state,
                productLoading: id
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                productLoading: false,
                product: data
            }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                error
            }
            case GET_CATEGORIES_BEGIN:
                return {
                 ...state,
                    categoriesloading: true
                }
            case GET_CATEGORIES_SUCCESS:
                return {
               ...state,
                  categoriesloading: false,
                  categories: data
                }
            case GET_CATEGORIES_FAILURE:
                return {
               ...state,
                  error
                }
            case GET_CATEGORIES_RESET:
                return {
             ...state,
             categories:{}
            }
        default:
            return state;
    }
}

export default reducer