import React, { Component } from 'react';
import './style.css';
import { connect } from  'react-redux';
import { set_data } from '../../store/actions';

class Home extends React.Component {
    static getDerivedStateFromProps(props,state){
        console.log('props****',props);
        return{
            
        }

    }
    render() {
        console.log('this.props',this.props.userData);
        // console.log('userdata',this.props.DataUSer());
        let dataUser = {name:'baber',email:'khan82'}
        return (
            <div>
                <h1>Home</h1>
                <button onClick={()=>{this.props.set_data(dataUser)}}>Click me</button>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {
    userData: state.mainReducer.users
    }

}
const mapDispatchTopProps=(dispatch)=>{
       return {
           set_data: (data)=>dispatch(set_data(data))
       }
}

export default connect(mapStateToProps,mapDispatchTopProps)(Home);
