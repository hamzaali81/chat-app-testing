import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_user } from '../../store/actions';

class Chat extends Component {
   componentDidMount(){
       this.props.get_user()
   }

    render() {
        let user = this.props.current_user;
        return (
            <div>
                <h1>!Welcome to {user.name}</h1>
                <div>
                    <h4>Chat User</h4>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        current_user: state.mainReducer.current_user

    }
}

const mapDispatchtoProps = (dispatch)=>{
    return {
         get_user: ()=>dispatch(get_user())
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Chat);