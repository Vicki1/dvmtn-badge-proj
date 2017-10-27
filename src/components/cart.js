import React from 'react';

export default function Cart(props){
      if(props.cartList){
          var list = props.cartList
          
           const cartDisplay = list.map((product, i)=>
            <div key={`${i},${product.id}`} className="productDiv"><img  height="150px" width="200px" src={product.picture} alt={`${product.product_name} photo`}/>
            <span>{product.product_name}, ${product.price}</span>
           
            </div>

        )
        return(
           <div className="cartDisplayDiv">
               {cartDisplay}
           </div>
        )
      }
      else{
          return(
        <div className="cartDisplayDiv">
            Empty
        </div>
    )
      }

}