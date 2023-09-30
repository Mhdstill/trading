import { callApi } from './api'; // Assurez-vous d'importer callApi et API_BASE_URL depuis api.js

export const register = async (email, plainPassword, firstname = null, lastname = null, phone = null, birthday = null) => {
    try {
        const data = { email, plainPassword, firstname, lastname, phone, birthday };
        const response = await callApi('api/users', 'POST', data);

        return response;
    } catch (error) {
        throw error;
    }
};

// Fonction pour se connecter
export const login = async (email, password) => {
    try {
        const data = { email, password };
        const response = await callApi('auth', 'POST', data);

        localStorage.setItem('authToken', response.token);
        return response;

    } catch (error) {
        throw error;
    }
};

export function logout(navigate = null, path = null) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('operationToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('module');
    if (navigate && path) {
        navigate(path);
        window.location.reload();
    }
}