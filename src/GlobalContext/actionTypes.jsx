const actions={
    GET_PRODUCTS_BEGIN:"GET_PRODUCTS_BEGIN",
    GET_PRODUCTS_SUCCESS:"GET_PRODUCTS_SUCCESS",
    GET_PRODUCTS_FAILURE:"GET_PRODUCTS_FAILURE",
    GET_PRODUCTS_RESET:"GET_PRODUCTS_RESET",
    GET_PRODUCT_BEGIN:"GET_PRODUCT_BEGIN",
    GET_PRODUCT_SUCCESS:"GET_PRODUCT_SUCCESS",
    GET_PRODUCT_FAILURE:"GET_PRODUCT_FAILURE",
    GET_CATEGORIES_BEGIN:"GET_CATEGORIES_BEGIN",
    GET_CATEGORIES_SUCCESS:"GET_CATEGORIES_SUCCESS",
    GET_CATEGORIES_FAILURE:"GET_CATEGORIES_FAILURE",
    GET_CATEGORIES_RESET:"GET_CATEGORIES_RESET",

    getProductsBegin:()=>({type:actions.GET_PRODUCTS_BEGIN}),
    getProductsSuccess:(data)=>({type:actions.GET_PRODUCTS_SUCCESS,data}),
    getProductsFailure:(error)=>({type:actions.GET_PRODUCTS_FAILURE,error}),
    getProductsReset:()=>({type:actions.GET_PRODUCTS_RESET}),
    getProductBegin:(id)=>({type:actions.GET_PRODUCT_BEGIN,id}),
    getProductSuccess:(data)=>({type:actions.GET_PRODUCT_SUCCESS,data}),
    getProductFailure:(error)=>({type:actions.GET_PRODUCT_FAILURE,error}),
    getCategoriesBegin:()=>({type:actions.GET_CATEGORIES_BEGIN}),
    getCategoriesSuccess:(data)=>({type:actions.GET_CATEGORIES_SUCCESS,data}),
    getCategoriesFailure:(error)=>({type:actions.GET_CATEGORIES_FAILURE,error}),
    getCategoriesReset:()=>({type:actions.GET_CATEGORIES_RESET})
}
export default actions