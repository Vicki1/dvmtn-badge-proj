import axios from 'axios';

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const ADD_TO_CART = "ADD_TO_CART";

var initialState=
{
    products: [{ id: 1, product_name:'sunset', price: 5, picture: 'http://www.clker.com/cliparts/1/b/c/5/12654323841027211571sunset.png'},{ id: 2,product_name:'tiger', price: 6, picture: 'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/tiger-594575_1920.jpg?itok=zu9e53P_'},{id: 3, product_name:'snowy mountains', price: 10, picture: 'http://www.acclaimimages.com/_gallery/_free_images/0420-0908-2000-3354_snow_covered_valley_surrounded_by_mountains_m.jpg'}],
  
    customerCart: []
}

export function addToCartInReducer(product){
    return{
       type: ADD_TO_CART,
       payload: product
    }
}

export default function reducerFn(state=initialState, action){
    switch(action.type){
        case GET_ALL_PRODUCTS:
        return console.log('getting all products');

        case ADD_TO_CART:
            const newCartList= [...state.customerCart,action.payload];
        return Object.assign({},state,{customerCart: newCartList})

        default:
        return state;
    }
}