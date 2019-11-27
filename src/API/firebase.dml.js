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
        });
    });
    return user;
}

export const fetchUserTrainer = async () => {
    let user = [];
    await firestore.collection("trainer").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = {
                ...doc.data(),
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
        phoneno: state.phoneno,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

export const updateUser = async (data) => {
    let Type = data.Type;
    if(Type === 'member') {
        await firestore.collection(Type).doc(data.id).set({
            name: data.name,
            email: data.email,
            address: data.address,
            phoneno: data.phoneno,
            selectedTrainer: data.selectedTrainer,
            imageURL: data.imageURL
            
        });
    }
    else {
        await firestore.collection(Type).doc(data.id).set({
            name: data.name,
            email: data.email,
            address: data.address,
            phoneno: data.phoneno,
            imageURL: data.imageURL
            
            
        });
    }
    
}

