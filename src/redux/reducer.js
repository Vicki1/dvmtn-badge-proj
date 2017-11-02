import axios from 'axios';

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const GET_THIRD_PRODUCT = 'GET_THIRD_PRODUCT';
const ADD_TO_CART = "ADD_TO_CART";

var initialState=
{
    products:[
    {
        "id": 1,
        "product_name": "sunset",
        "price": 5,
        "photo_url": "http://www.clker.com/cliparts/1/b/c/5/12654323841027211571sunset.png",
        "details": "You know you want this sunset. It's five o'clock somewhere"
    },
    {
        "id": 2,
        "product_name": "tiger",
        "price": 6,
        "photo_url": "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/tiger-594575_1920.jpg?itok=zu9e53P_",
        "details": "Kitty! You know you want these eyes"
    },
    {
        "id": 3,
        "product_name": "snowy mountains",
        "price": 10,
        "photo_url": "http://www.acclaimimages.com/_gallery/_free_images/0420-0908-2000-3354_snow_covered_valley_surrounded_by_mountains_m.jpg",
        "details": "Ice? You mean ICE?!!!"
    }
],
  
    customerCart: [],
    specialProductName: '',
    thirdProduct: ''
}

export function getAllProducts(){
    return{
        type: GET_ALL_PRODUCTS,
        payload: axios.get(`http://localhost:4000/api/getAllProducts`)
        .then((res)=>{
            console.log(`this is getAllProducts response from server`, res.data)
            return res.data[0];
        })
        .catch(err=>console.log(err, `error from getAllProducts axios request`))
    }
}

export function getThirdProduct(){
    return{
        type: GET_THIRD_PRODUCT,
        payload: axios.get(`http://localhost:4000/api/getAllProducts`)
        .then((res)=>{
            console.log(`this is getAllProducts response from server`, res.data)
            return res.data[2];
        })
        .catch(err=>console.log(err, `error from getAllProducts axios request`))
    }
}




export function addToCartInReducer(product){
    return{
       type: ADD_TO_CART,
       payload: product
    }
}



export default function reducerFn(state=initialState, action){
    switch(action.type){
        case GET_ALL_PRODUCTS + `_FULFILLED`:
            console.log('this is what reducer got' ,action.payload)
            return Object.assign({},state,{specialProductName: action.payload});

        case ADD_TO_CART + `_FULFILLED`:
            const newCartList= [...state.customerCart,action.payload];
            return Object.assign({},state,{customerCart: newCartList});
        
        case GET_THIRD_PRODUCT + `_FULFILLED`:
            return Object.assign({},state,{thirdProduct: action.payload});


        default:
            return state;
    }
}