import api from './api';

export async function postActivitesBooking(body, token) {
  const response = await api.post('/url/short', body);

  return response.data;
};