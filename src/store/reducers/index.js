const INTIAL_STATE={
    users: [
        {
        name: 'hamza',
        email: 'hamza54834@gmail.com'
    },
    {
        name: 'ali',
        email: 'ali3221@gmail.com'
    }
]
}

const mainReducer =(state = INTIAL_STATE,action)=>{
    console.log('action app',action);
    switch(action.type){
        case 'SET_DATA':{
           return ({
               ...state,users:[...state.users,action.data],name:'hamza'
        })
        }
        default:{
            return state
        }

    }
    return state;
}
export default mainReducer;