import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cart from "./cart";
import {addToCartInReducer, getAllProducts} from "../redux/reducer";
import {bindActionCreators} from 'redux';

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

   componentDidMount(){
       // this.props.getAllProducts();
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
      
           MAIN PRODUCT <br/>
           NAME: { this.state.mainProduct ? this.state.mainProduct.product_name: ''}
           PRICE : { this.state.mainProduct ? this.state.mainProduct.price : ''}
           <img height="250px" width ="400px" src={this.state.mainProduct ? this.state.mainProduct.picture: ''} />

           <div id="cartDiv">Your Cart : <Cart cartList={(this.state.cartList.length>0) ? this.state.cartList : ''}/></div>
            <p>this is after the card div</p>  
               <div className="productsDisplayDiv">{productsDisplay}</div>
              <ul className="list">
                  
                <li id="one">1</li>
                <li id ="two">2</li>
                <li>3</li>
                <li>4</li>
              </ul>
              <a href='http://www.clker.com/cliparts/1/b/c/5/12654323841027211571sunset.png'>hey this is my "" selected</a>
                <video href="https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/4846/8/224234489/785530033.mp4?token=1509417455-0x4dc99818e0ca0c9e8d5cab966174cc9e2703502b&download=1&filename=Milky+Way+-+10339.mp4" controls></video>
              
              <div className="allBoxes">
                <div className="boxmodel boxy"></div>
                <div className="boxy two"></div>
                <div className="boxy three"></div>
                 <div className="boxy four"></div>
                  <div className="boxy five"></div>
              </div>
              <div className="fixed"></div>
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
        addToCartInReducer : addToCartInReducer,
        getAllProducts: getAllProducts
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Landing);