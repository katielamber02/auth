import {AUTH_USER,AUTH_ERROR} from './types'
import axios from 'axios'

//export const signup({email,password})=>	dispatch=>{
//	axios.post('http://localhost:3090/signup',{email,password})	
//}

export const signup=(formProps,callback)=> async dispatch=>{
	try{
		const response=await axios.post('http://localhost:3090/signup',formProps)	
	dispatch({
		type:AUTH_USER,
		payload:response.data.token
	})
	localStorage.setItem('token',response.data.token)
	callback()
	}catch(e){
		dispatch({
			type:AUTH_ERROR,
		    payload:'Email is in use'
		})
	}
}

export const signout=()=>{
	localStorage.removeItem('token')
	return{
		type:AUTH_USER,
		payload:''
	}
}
export const signin=(formProps,callback)=> async dispatch=>{
	try{
		const response=await axios.post('http://localhost:3090/signin',formProps)	
	dispatch({
		type:AUTH_USER,
		payload:response.data.token
	})
	localStorage.setItem('token',response.data.token)
	callback()
	}catch(e){
		dispatch({
			type:AUTH_ERROR,
		    payload:'Invalid login credentials'
		})
	}
}