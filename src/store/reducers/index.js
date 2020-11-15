const INTIAL_STATE={
    users: [],
    //     {
    //     name: 'hamza',
    //     email: 'hamza54834@gmail.com'
    // },
    // {
    //     name: 'ali',
    //     email: 'ali3221@gmail.com'
    // }
// ]
current_user: {}
}

const mainReducer =(state = INTIAL_STATE,action)=>{
    console.log('action app',action);
    switch(action.type){
        case 'SET_USER':{
           return ({
            
            //    ...state,users:[...state.users,action.data],name:'hamza'
                 ...state,
                 current_user: action.payload
        })
        }
        case 'SETFIREBASEUSER':{
           return ({
            
            //    ...state,users:[...state.users,action.data],name:'hamza'
                 ...state,
                 users: [...state.users,action.payload]
        })
        }
        default:{
            return state
        }

    }
    return state;
}
export default mainReducer;