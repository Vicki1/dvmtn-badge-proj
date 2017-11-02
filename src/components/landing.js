import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cart from "./cart";
import {addToCartInReducer, getAllProducts, getThirdProduct} from "../redux/reducer";
import {bindActionCreators} from 'redux';
import ComponentWPR from './componentWRP';
import axios from 'axios';

class Landing extends Component{
    constructor(props){
        super(props)

        this.state={
          productsToDipsplay: props.state.products,
           mainProduct: props.state.products[0],
           cartList: [],
           did: '',
           

        }
      this.changeMainPic = this.changeMainPic.bind(this);
      this.addToCart= this.addToCart.bind(this);
    }


   componentWillMount(){
     
    this.setState({productsToDipsplay: this.props.state.products})
   }

   componentDidMount(){
      this.props.getThirdProduct();
   }

   changeMainPic(product){
       this.setState({mainProduct: product})
   }

addToCart(product){
    var newCartList=[...this.state.cartList, product]
    this.setState({cartList:newCartList})
   
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
                <ComponentWPR />
           MAIN PRODUCT <br/>
           NAME: { this.state.mainProduct ? this.state.mainProduct.product_name: ''}
           PRICE : { this.state.mainProduct ? this.state.mainProduct.price : ''}
           <img height="250px" width ="400px" src={this.state.mainProduct ? this.state.mainProduct.picture: ''} />

           <div id="cartDiv">Your Cart : <Cart cartList={(this.state.cartList.length>0) ? this.state.cartList : ''}/></div>
            <p>this is after the card div</p>  
               <div className="productsDisplayDiv">{productsDisplay}</div>
               <iframe src="https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/324/9/226624999/796537768.mp4?token=1509503151-0x3960ea3b1163519f9f96a5d13e47d298d1bb0fd1&download=1&filename=Swimming+-+10835.mp4" title="hey" width="200px" height="150px"></iframe>
              <ul className="list">
                  
                <li id="one">1</li>
                <li id ="two">2</li>
                <li>3</li>
                <li>4</li>
              </ul>
              <a href='http://www.clker.com/cliparts/1/b/c/5/12654323841027211571sunset.png'>hey this is my "" selected</a>

             audio <audio controls>
                  <source src="lalalaSOMEAUDIOFILEHERE.ogg" type="audio/ogg"/>
              </audio>
              <div className="allBoxes">
                <div className="boxmodel boxy"></div>
                <div className="boxy two"></div>
                <div className="boxy three"></div>
                 <div className="boxy four"></div>
                  <div className="boxy five"></div>
              </div>
              <div className="fixed"></div>
              <button onClick={()=>this.props.getAllProducts()}>see special product name</button>
              Special Product Name: {this.props.state.specialProductName ? this.props.state.specialProductName.product_name : ''}<br/>
              third product id: {this.props.state.thirdProduct.id}
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getThirdProduct: getThirdProduct,
        getAllProducts: getAllProducts
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Landing);