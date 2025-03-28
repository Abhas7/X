const API_BASE_URL = 'https://reqres.in/api';

function login(email, password) {
    return fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    }).then(response => {
        if (!response.ok) throw new Error('Login failed');
        return response.json();
    });
}

function getUsers(page = 1) {
    return fetch(`${API_BASE_URL}/users?page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if (!response.ok) throw new Error('Failed to fetch users');
        return response.json();
    });
}

function updateUser(id, userData) {
    return fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    }).then(response => {
        if (!response.ok) throw new Error('Failed to update user');
        return response.json();
    });
}

function deleteUser(id) {
    return fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'DELETE',
    }).then(response => {
        if (!response.ok) throw new Error('Failed to delete user');
        return true;
    });
}
