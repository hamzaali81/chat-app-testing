import firebase from '../../config/firebase';
import history from 'history/createBrowserHistory';
// console.log(history);
// import { useHistory } from 'react-router-dom';
// import firebase from 'firebase';
// const set_data = (data)=>{

//       return (dispatch)=>{
//         console.log('Chal check kar',data);
//           dispatch({
//               type: 'SET_DATA',data:data,
//               email: 'test@mail.com'
//           })
//           dispatch({
//               type: 'OK_DATA'
//           })
//     return console.log('Chal rha');
//       }
// }

const facebooklogin=(history)=>{
     console.log('hello facebook');
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(function(result) {

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            let create_user = {
              name: user.displayName,
              email: user.email,
              profile: user.photoURL,
              uid: user.uid
            }
            console.log('user bhai',user);
            console.log('data extract',create_user);
           firebase.database().ref('/').child(`user/${user.uid}`).set(create_user)
          .then(()=>{
            dispatch({
                   type: "SET_USER",
                   payload: create_user
            })
            alert('user login sucessful');
            // history.push('/chat'); 
          })
          
           // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Ye tu hoga',errorMessage);
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
    // console.log('facebook login');
}

const get_user = ()=>{
  return (dispatch)=>{
       firebase.database.ref('/').child.on('child_added',(data)=>{
          console.log('firebase data',data.val());
       })
  }
}

export {
    facebooklogin,
    get_user
};