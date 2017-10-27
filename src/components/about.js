import React,{Component} from 'react';
import {connect} from 'react-redux';

class About extends Component{
    constructor(props){
        super(props)

        this.state={
           aboutUs: ''
        }
    }

    render(){
        return(
            <div className="landingDiv">
                hello this is the ABOUT page<br/>
              
           
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        test:state.test,
        state : state
    }
}
export default connect(mapStateToProps)(About);