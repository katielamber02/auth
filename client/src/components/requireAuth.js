import React, { Component } from 'react';
import {connect} from 'react-redux'

export default (ChildComponent)=>{
	class ComposedComponent extends Component{
		componentDidMount(){
	//our component just got rendered	
	this.shouldNavigateAway()
	}
	componentDidUpdate(){
	//our component just got updated	
	this.shouldNavigateAway()
	console.log('componentDidUpdate')
	}
	shouldNavigateAway(){
		if(!this.props.auth){
			console.log('I NEED TO LEAVE')
			this.props.history.push('/')
		}
	}
		render(){
			return <ChildComponent {...this.props}/>
		}
	}
	function mapStateToProps(state){
	return{
		auth:state.auth.authenticated
	}
}
	return connect(mapStateToProps)(ComposedComponent)
}

