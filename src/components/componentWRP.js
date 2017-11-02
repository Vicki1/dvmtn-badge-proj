import React,{Component} from 'react';

export default class ComponentWPR extends Component{
    constructor(props){
        super(props)
        
        this.state={
            hay: ''
        }
    }

componentWillReceiveProps(){
        this.setState({hay: 'componentWillReceiveProps worked'})
}
    render(){
        return(
            <div>
                hi
            </div>
        )
    }
}