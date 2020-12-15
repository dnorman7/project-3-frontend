import { getToken, setToken, getUserFromToken } from './tokenService';


const BASE_URL = 'http://localhost:3001/api/diet/';

async function getDiet(id) {
    const response = await fetch(BASE_URL + `${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'Application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${getToken()}`
        },
    })

    if(response.ok){
        const res = await response.json()
        return res
    }else{
        return new Promise()
    }
}

async function getDiets(user) {
    const response = await fetch(BASE_URL, {
        method: 'get',
        headers: {
            'Content-Type': 'Application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${getToken()}`
        },
    })

    if(response.ok){
        const res = await response.json()
        return res
    }else{
        return new Promise()
    }
}
function addDiets(diet) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${getToken()}`
        },
        body: JSON.stringify(diet)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Credentials');
    })
}
function editDiet(diet) {
    return fetch(BASE_URL, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${getToken()}`
        },
        body: JSON.stringify(diet)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Credentials');
    })
}
function deleteDiet(diet) {
    return fetch(BASE_URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'Application/json',
            'Accept' : 'application/json',
            'Authorization' : `Bearer ${getToken()}`
        },
        body: JSON.stringify(diet)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Credentials');
    })
}
export {
    getDiets,
    editDiet,
    deleteDiet,
    addDiets,
    getDiet
}