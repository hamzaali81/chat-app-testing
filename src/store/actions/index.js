import Firebase from '../../config/firebase';
import firebase from 'firebase';
const set_data = (data)=>{

      return (dispatch)=>{
        console.log('Chal check kar',data);
          dispatch({
              type: 'SET_DATA',data:data
          })
          dispatch({
              type: 'OK_DATA'
          })
    return console.log('Chal rha');
      }
}

const facebooklogin=()=>{
     console.log('hello facebook');
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('user bhai',user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }
    // console.log('facebook login');
}

export {
    set_data,facebooklogin
};