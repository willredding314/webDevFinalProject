// import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const USER_API = `${API_BASE}/users`;


export const createUser = async (user) => {
    const response = await fetch(`${USER_API}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
};


//     const response = await axios.post(USER_API, user)
//     return response.data;
// }

// export const findUsers  = async () => {
//     const response = await axios.get(USER_API); // GET http://localhost:4000/api/tuits
//     return response.data; 
// }

// export const deleteUser = async (uid) => {
//     const response = await axios.delete(`${USER_API}/${uid}`)
//     return response.data;
// }

// export const updateUser = async (user) => {
//     const response = await axios.put(`${USER_API}/${user._id}`, user);
//     return response.data;
// }

// export const addToFriendsList = async (uid, friend) => {
//     const reponse = await axios.put(`${USER_API}/friends/${uid}`, friend); 
//     // {
//     //    "friends": "ObjectId()"
//     // }
// }

// export const removeFromFriendsList = async (uid, friend) => {
//     const reponse = await axios.delete(`${USER_API}/friends/${uid}`, friend); 
//     // {
//     //    "friends": "ObjectId()"
//     // }
// }
