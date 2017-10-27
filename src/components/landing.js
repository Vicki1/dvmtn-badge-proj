import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cart from "./cart";
import {addToCartInReducer} from "../redux/reducer";

class Landing extends Component{
    constructor(props){
        super(props)

        this.state={
          productsToDipsplay: [],
           mainProduct: props.state.products[0],
           cartList: []

        }
      this.changeMainPic = this.changeMainPic.bind(this);
      this.addToCart= this.addToCart.bind(this);
    }


   componentWillMount(){
      
    this.setState({productsToDipsplay: this.props.state.products})
   }

   changeMainPic(product){
       this.setState({mainProduct: product})
   }

addToCart(product){
    var newCartList=[...this.state.cartList, product]
    this.setState({cartList:newCartList})
    this.props.addToCartInReducer(product);
}



    render(){
       console.log(`local state on landing`, this.state)
       console.log(`state from redux`, this.props.state )
        const products= this.state.productsToDipsplay
 
        const productsDisplay = products.map((product, i)=>
            <div key={product.id} className="productDiv"><img  height="150px" width="200px" src={product.picture} alt={`${product.product_name} photo`}/><span>{product.product_name}</span>
            <button onClick={()=>this.changeMainPic(product)}>details</button>
            <button onClick={()=>this.addToCart(product)}>Add to my Cart</button>
            </div>

        )
        
        return(
            <div className="landingDiv">
          <video src="../videoCollection/Lion - 9579.mp4" controls><p>Your browser does not support video</p></video>
           MAIN PRODUCT <br/>
           NAME: {this.state.mainProduct.product_name}<br/>
           PRICE : {this.state.mainProduct.price}<br/><br/>
           <img height="250px" width ="400px" src={this.state.mainProduct.picture} /><br/>

           <div className="CartDiv">Your Cart : <Cart cartList={(this.state.cartList.length>0) ? this.state.cartList : ''}/></div>
              
               <div className="productsDisplayDiv">{productsDisplay}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
      test: state.test,
      state:state
    }
}
export default connect(mapStateToProps,{addToCartInReducer})(Landing);