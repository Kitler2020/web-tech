import Shop from "./Shop";
import {connect} from "react-redux";
import {
    handleFilters,
    handleToggleFilter,
    handleToggleOptions, handleToggleOrder,
    loadProducts,
    setCurrentPage
} from "../reducers/product";
import {
    loadCategoriesFromDB,
    loadFilteredProductsFromDB,
    loadManufacturesFromDB,
    loadProductsFromDB
} from "../apiActions";



const mapStateToProps =(state)=>{
    return{
        products: state.productsReducer
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        loadProducts: (sortBy,limit)=>dispatch(loadProductsFromDB(sortBy,limit)),
        loadFilteredProducts: (page,limit,filters,order,sortBy)=>dispatch(loadFilteredProductsFromDB(page,limit,filters,order,sortBy)),
        loadCategories: ()=>dispatch(loadCategoriesFromDB()),
        loadManufactures: ()=>dispatch(loadManufacturesFromDB()),
        handleToggleFilter : (filter,filterBy)=>dispatch(handleToggleFilter(filter,filterBy)),
        setCurrentPage :(page)=>dispatch(setCurrentPage(page)),

        handleChangeOptions : (options)=>dispatch(handleToggleOptions(options)),
        handleChangeOrder : (order)=>dispatch(handleToggleOrder(order)),
    }
}

const ShopContainer = connect(mapStateToProps,mapDispatchToProps)(Shop)
export default ShopContainer