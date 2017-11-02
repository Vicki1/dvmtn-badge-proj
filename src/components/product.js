import React,{Component} from 'react';
import axios from 'axios';


export default class Product extends Component{
    constructor(props){
        super(props)

        this.state={
            product: {id: '', product_name: '', picture: '', price : ''}
        }
    }

    /*componentDidMount(){
        axios.get(`http://localhost:4000/api/getAllProducts`)
        .then(results=>{
            console.log(results[this.props.match.params.id],`results from product call`)
            var selectedProduct= results[this.props.macth.params.id]
            this.setState({product: selectedProduct})
        })
        .catch(err=>console.log(err, `from trying to get product`))
    }*/

    render(){
        console.log(this.state)
        console.log(this.props.match.params.id, `match info`)
        return(
            <div>

               Hey this is the id I took off of my match params : <br/>
                    {this.props.match.params.id}
                <div className="cat">
                    <div className="kitty"><div>hello</div><div>goodbye</div></div> 
                    <div className="kitty"></div>
                </div>

                <div className="godzilla">
                    <div className="lizard"></div> 
                    <div className="lizard"></div>
                    <div className="lizard"></div> 
                    <div className="lizard"></div>
                    <div className="lizard"></div> 
                    <div className="lizard"></div>
                </div>
            

            <div className="dog">
                    <div className="puppy"> a</div> 
                    <div className="puppy">b</div>
                    <div className="puppy">c</div> 
                    <div className="puppy">d</div>
                    <div className="puppy">e</div> 
                    <div className="puppy">f</div>
            </div>

            <div className="alignItemsList">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
            </div>
        </div>
        )
    }
}