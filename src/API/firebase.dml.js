import {firestore} from '../firebase/firebase.utils';


export const fetchUserMember = async () => {
    let user = [];
    await firestore.collection("member").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = {
                ...doc.data(),
                id: doc.id
            }
            user.push(data)
            console.log(data)
        });
    });
    return user;
}

export const fetchUserTrainer = async () => {
    let user = [];
    await firestore.collection("trainer").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = {
                name: doc.data().name,
                address: doc.data().address,
                email: doc.data().email,
                phoneno: doc.data().phoneno,
                id: doc.id
            }
            user.push(data)
        });
    });
    return user;
}

export const deleteUserMember = async (id) => {
    await firestore.collection('member').doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    }); 
}

export const deleteUserTrainer = async (id) => {
    await firestore.collection('trainer').doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    }); 
}

export const addUser = async (state) => {
    await firestore.collection(state.Type).add({
        name: state.name,
        email: state.email,
        address: state.address,
        phoneno: state.phoneno
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

export const updateUser = async (data) => {
    await firestore.collection(data.Type).doc(data.id).set({
        name: data.name,
        email: data.email,
        address: data.address,
        phoneno: data.phoneno
    });
}
