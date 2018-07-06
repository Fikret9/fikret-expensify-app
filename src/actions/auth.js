import {firebase, googleAuthProvider} from '../firebase/firebase';

export const  login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const  logout = (uid) => ({
    type: 'LOGOUT'
})

export const startLogin = () => {
    console.log('firebase auth popup');
    return () => {       
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogout = () => {    
    console.log('firebase auth logout ');
    return () => {       
        return firebase.auth().signOut();
    }
}