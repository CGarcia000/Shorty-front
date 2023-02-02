import api from './api';

export async function postUrl(body) {
    const response = await api.post('/url/short', body);

    return response.data;
};