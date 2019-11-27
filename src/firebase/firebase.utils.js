import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
        apiKey: "AIzaSyDS0bBpvjKMBnNE_tm003IRFYWjU4exuaw",
        authDomain: "gymdatabase-56e9b.firebaseapp.com",
        databaseURL: "https://gymdatabase-56e9b.firebaseio.com",
        projectId: "gymdatabase-56e9b",
        messagingSenderId: "1066662787459",
        appId: "1:1066662787459:web:3d08bdf0994e1811829eb6",
        measurementId: "G-Z1E0TLZCL1",
        storageBucket: "gs://gymdatabase-56e9b.appspot.com"
      };

export const createUserProfileDocument = async (userAuth, additionalData) => {
   
    if(!userAuth) {
        return;
    }
        
        const userRef = firestore.doc(`users/${userAuth.uid}`);
       
        const snapShot = await userRef.get();
       
           


        if(!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            console.log('displayName',displayName);
            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('Error Creating User', error.message);
            }

        }

    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = firebase.storage().ref();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;